import User from "../models/User.model.js";
import Application from "../models/Application.model.js";
import JobApplication from "../models/JobApplication.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import admin from "../config/firebase.config.js";

// Login
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    throw new ApiError(400, "Please provide email and password");
  }

  // Find user with password field
  const user = await User.findOne({ email })
    .select("+password +isFirstLogin")
    .populate("applicationId");

  if (!user) {
    throw new ApiError(401, "Invalid email or password");
  }

  // Check password
  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) {
    throw new ApiError(401, "Invalid email or password");
  }

  // Check if account is active
  if (!user.isActive) {
    throw new ApiError(
      401,
      "Your account has been deactivated. Please contact support.",
    );
  }

  // Update last login
  user.lastLogin = new Date();
  await user.save();

  // Generate JWT token
  const token = user.generateToken();

  // Get all applications for this user
  const applications = await Application.find({ userId: user._id })
    .select(
      "applicationNumber status program counselingDate counselingTime createdAt",
    )
    .sort({ createdAt: -1 });

  // Get last job application to get resume info
  const lastJobApplication = await JobApplication.findOne({ user: user._id })
    .sort("-createdAt")
    .select("resume createdAt")
    .lean();

  res.status(200).json(
    new ApiResponse(
      200,
      {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          role: user.role,
          lastLogin: user.lastLogin,
          isFirstLogin: user.isFirstLogin,
          lastResumeUrl: lastJobApplication?.resume || null,
          lastResumeUploadedAt: lastJobApplication?.createdAt || null,
        },
        token,
        applications,
        application: applications[0] || null,
      },
      user.isFirstLogin
        ? "Login successful. Please change your password."
        : "Login successful",
    ),
  );
});

// Change password on first login
export const changePasswordFirstLogin = asyncHandler(async (req, res) => {
  const { newPassword } = req.body;

  if (!newPassword) {
    throw new ApiError(400, "Please provide new password");
  }

  if (newPassword.length < 6) {
    throw new ApiError(400, "New password must be at least 6 characters long");
  }

  const user = await User.findById(req.user.id).select(
    "+password +isFirstLogin +tempPassword",
  );

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // Update password and mark first login
  user.password = newPassword;
  user.isFirstLogin = false;
  user.tempPassword = null;
  await user.save();

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        null,
        "Password changed successfully! Welcome to Charters Business.",
      ),
    );
});

// Get current user profile
export const getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id)
    .select("+isFirstLogin")
    .populate({
      path: "applicationId",
      select:
        "applicationNumber status program location mobileNo countryCode counselingDate counselingTime createdAt",
    });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // Get all applications for this user
  const applications = await Application.find({ userId: user._id })
    .select(
      "applicationNumber status program counselingDate counselingTime createdAt",
    )
    .sort({ createdAt: -1 });

  // Get last job application resume info
  const lastJobApplication = await JobApplication.findOne({ user: user._id })
    .sort("-createdAt")
    .select("resume createdAt")
    .lean();

  res.status(200).json(
    new ApiResponse(
      200,
      {
        ...user.toObject(),
        applications,
        lastResumeUrl: lastJobApplication?.resume || null,
        lastResumeUploadedAt: lastJobApplication?.createdAt || null,
      },
      "User profile retrieved successfully",
    ),
  );
});

// Update profile
export const updateProfile = asyncHandler(async (req, res) => {
  const { name, avatar } = req.body;

  const fieldsToUpdate = {};
  if (name) fieldsToUpdate.name = name;
  if (avatar) fieldsToUpdate.avatar = avatar;

  const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
    new: true,
    runValidators: true,
  }).populate("applicationId");

  // Get last job application resume info
  const lastJobApplication = await JobApplication.findOne({ user: user._id })
    .sort("-createdAt")
    .select("resume createdAt")
    .lean();

  res.status(200).json(
    new ApiResponse(
      200,
      {
        ...user.toObject(),
        lastResumeUrl: lastJobApplication?.resume || null,
        lastResumeUploadedAt: lastJobApplication?.createdAt || null,
      },
      "Profile updated successfully",
    ),
  );
});

// Change password
export const changePassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword) {
    throw new ApiError(400, "Please provide current and new password");
  }

  if (newPassword.length < 6) {
    throw new ApiError(400, "New password must be at least 6 characters long");
  }

  const user = await User.findById(req.user.id).select("+password");

  const isMatch = await user.comparePassword(currentPassword);
  if (!isMatch) {
    throw new ApiError(401, "Current password is incorrect");
  }

  user.password = newPassword;
  await user.save();

  res
    .status(200)
    .json(new ApiResponse(200, null, "Password changed successfully"));
});

// Logout
export const logout = asyncHandler(async (req, res) => {
  res.status(200).json(new ApiResponse(200, null, "Logged out successfully"));
});

// Firebase OTP Login
export const firebaseLogin = asyncHandler(async (req, res) => {
  const { idToken } = req.body;

  if (!idToken) {
    throw new ApiError(400, "Please provide Firebase ID token");
  }

  try {
    // Verify Firebase ID token
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { phone_number } = decodedToken;

    if (!phone_number) {
      throw new ApiError(400, "Phone number not found in token");
    }

    // Find user by phone number
    const user = await User.findOne({ phoneNumber: phone_number })
      .select("+isFirstLogin")
      .populate("applicationId");

    if (!user) {
      // User not found - Client should redirect to signup
      return res
        .status(404)
        .json(
          new ApiResponse(404, null, "User not registered. Please sign up."),
        );
    }

    if (!user.isActive) {
      throw new ApiError(
        401,
        "Your account has been deactivated. Please contact support.",
      );
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Generate JWT token
    const token = user.generateToken();

    // Get all applications for this user
    const applications = await Application.find({ userId: user._id })
      .select(
        "applicationNumber status program counselingDate counselingTime createdAt",
      )
      .sort({ createdAt: -1 });

    // Get last job application to get resume info
    const lastJobApplication = await JobApplication.findOne({ user: user._id })
      .sort("-createdAt")
      .select("resume createdAt")
      .lean();

    res.status(200).json(
      new ApiResponse(
        200,
        {
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            role: user.role,
            lastLogin: user.lastLogin,
            isFirstLogin: user.isFirstLogin,
            lastResumeUrl: lastJobApplication?.resume || null,
            lastResumeUploadedAt: lastJobApplication?.createdAt || null,
          },
          token,
          applications,
          application: applications[0] || null,
        },
        "Login successful",
      ),
    );
  } catch (error) {
    console.error("Firebase token verification error:", error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(401, "Invalid or expired Firebase token");
  }
});

// Firebase OTP Signup
export const firebaseSignup = asyncHandler(async (req, res) => {
  const { idToken, name, email } = req.body;

  if (!idToken || !name || !email) {
    throw new ApiError(400, "Please provide ID token, name, and email");
  }

  try {
    // Verify Firebase ID token
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { phone_number, uid } = decodedToken;

    if (!phone_number) {
      throw new ApiError(400, "Phone number not found in token");
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ phoneNumber: phone_number }, { email }],
    });

    if (existingUser) {
      throw new ApiError(400, "User already exists with this phone or email");
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      password: User.generateRandomPassword(), // Dummy password
      phoneNumber: phone_number,
      isFirstLogin: false,
    });

    // Generate JWT token
    const token = user.generateToken();

    res.status(201).json(
      new ApiResponse(
        201,
        {
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            role: user.role,
            lastLogin: user.lastLogin,
            isFirstLogin: user.isFirstLogin,
          },
          token,
          applications: [],
          application: null,
        },
        "Account created and login successful",
      ),
    );
  } catch (error) {
    console.error("Firebase signup error:", error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(401, "Invalid or expired Firebase token");
  }
});

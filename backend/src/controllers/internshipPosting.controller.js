import InternshipPosting from "../models/InternshipPosting.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

// Create internship posting (Admin/Recruiter only)
export const createInternshipPosting = asyncHandler(async (req, res) => {
  const {
    title,
    company,
    location,
    internshipType,
    category,
    stipend,
    duration,
    description,
  } = req.body;

  if (
    !title ||
    !location ||
    !internshipType ||
    !category ||
    !stipend ||
    !duration ||
    !description
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const internshipPosting = await InternshipPosting.create({
    title: title.trim(),
    company: company?.trim() || "Charters Business",
    location: location.trim(),
    internshipType,
    category: category.trim(),
    stipend: stipend.trim(),
    duration: duration.trim(),
    description,
    createdBy: req.user.id,
  });

  res
    .status(201)
    .json(
      new ApiResponse(
        201,
        internshipPosting,
        "Internship posting created successfully"
      )
    );
});

// Get all internship postings
export const getAllInternshipPostings = asyncHandler(async (req, res) => {
  const {
    location,
    category,
    internshipType,
    search,
    page = 1,
    limit = 10,
    sortBy = "createdAt",
    order = "desc",
  } = req.query;

  const query = { isActive: true };

  if (location && location !== "All") {
    query.location = location;
  }

  if (category) {
    query.category = category;
  }

  if (internshipType) {
    query.internshipType = internshipType;
  }

  if (search) {
    query.$text = { $search: search };
  }

  const sortOptions = {};
  sortOptions[sortBy] = order === "desc" ? -1 : 1;

  const [internshipPostings, count] = await Promise.all([
    InternshipPosting.find(query)
      .populate("createdBy", "name email")
      .sort(sortOptions)
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit))
      .lean(),
    InternshipPosting.countDocuments(query),
  ]);

  res.status(200).json(
    new ApiResponse(
      200,
      {
        internshipPostings,
        pagination: {
          total: count,
          page: parseInt(page),
          pages: Math.ceil(count / limit),
          limit: parseInt(limit),
        },
      },
      "Internship postings retrieved successfully"
    )
  );
});

// Get single internship posting by ID (Public)
export const getInternshipPostingById = asyncHandler(async (req, res) => {
  const internshipPosting = await InternshipPosting.findById(
    req.params.id
  ).populate("createdBy", "name email");

  if (!internshipPosting) {
    throw new ApiError(404, "Internship posting not found");
  }

  // Increment views
  InternshipPosting.findByIdAndUpdate(
    req.params.id,
    { $inc: { views: 1 } },
    { new: false }
  ).exec();

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        internshipPosting,
        "Internship posting retrieved successfully"
      )
    );
});

// Update internship posting (Admin/Recruiter only)
export const updateInternshipPosting = asyncHandler(async (req, res) => {
  const internshipPosting = await InternshipPosting.findById(req.params.id);

  if (!internshipPosting) {
    throw new ApiError(404, "Internship posting not found");
  }

  if (
    internshipPosting.createdBy.toString() !== req.user.id &&
    req.user.role !== "admin"
  ) {
    throw new ApiError(
      403,
      "You are not authorized to update this internship posting"
    );
  }

  const allowedFields = [
    "title",
    "company",
    "location",
    "internshipType",
    "category",
    "stipend",
    "duration",
    "description",
    "isActive",
  ];

  const updates = {};
  allowedFields.forEach((field) => {
    if (req.body[field] !== undefined) {
      updates[field] = req.body[field];
    }
  });

  const updatedInternshipPosting = await InternshipPosting.findByIdAndUpdate(
    req.params.id,
    updates,
    { new: true, runValidators: true }
  ).populate("createdBy", "name email");

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        updatedInternshipPosting,
        "Internship posting updated successfully"
      )
    );
});

// Delete/Deactivate internship posting (Admin/Recruiter only)
export const deleteInternshipPosting = asyncHandler(async (req, res) => {
  const internshipPosting = await InternshipPosting.findById(req.params.id);

  if (!internshipPosting) {
    throw new ApiError(404, "Internship posting not found");
  }

  if (
    internshipPosting.createdBy.toString() !== req.user.id &&
    req.user.role !== "admin"
  ) {
    throw new ApiError(
      403,
      "You are not authorized to delete this internship posting"
    );
  }

  await InternshipPosting.findByIdAndUpdate(req.params.id, { isActive: false });

  res
    .status(200)
    .json(
      new ApiResponse(200, null, "Internship posting deleted successfully")
    );
});

// Get my internship postings (Recruiter/Admin)
export const getMyInternshipPostings = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  const query = { createdBy: req.user.id };

  const [internshipPostings, count] = await Promise.all([
    InternshipPosting.find(query)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit))
      .lean(),
    InternshipPosting.countDocuments(query),
  ]);

  res.status(200).json(
    new ApiResponse(
      200,
      {
        internshipPostings,
        pagination: {
          total: count,
          page: parseInt(page),
          pages: Math.ceil(count / limit),
        },
      },
      "Your internship postings retrieved successfully"
    )
  );
});

// Get internship statistics (Admin)
export const getInternshipStats = asyncHandler(async (req, res) => {
  const [
    totalInternships,
    activeInternships,
    inactiveInternships,
    totalApplications,
  ] = await Promise.all([
    InternshipPosting.countDocuments(),
    InternshipPosting.countDocuments({ isActive: true }),
    InternshipPosting.countDocuments({ isActive: false }),
    InternshipPosting.aggregate([
      { $group: { _id: null, total: { $sum: "$applicationsCount" } } },
    ]),
  ]);

  res.status(200).json(
    new ApiResponse(
      200,
      {
        totalInternships,
        activeInternships,
        inactiveInternships,
        totalApplications: totalApplications[0]?.total || 0,
      },
      "Internship statistics retrieved successfully"
    )
  );
});

// Get all applications for a specific internship (Admin/Recruiter only)
export const getAllApplicationsForInternship = asyncHandler(
  async (req, res) => {
    try {
      const { page = 1, limit = 10, status } = req.query;
      const { id } = req.params; // Get internship ID from URL path parameter

      // Import JobApplication model
      const JobApplication = (await import("../models/JobApplication.model.js"))
        .default;

      const query = {};

      if (id) {
        query.internshipPosting = id;
      } else {
        throw new ApiError(400, "Internship ID is required");
      }

      if (status) {
        query.status = status;
      }

      const [applications, count] = await Promise.all([
        JobApplication.find(query)
          .populate("user", "name email")
          .populate("internshipPosting", "title company")
          .sort({ createdAt: -1 })
          .limit(parseInt(limit))
          .skip((parseInt(page) - 1) * parseInt(limit))
          .lean(),
        JobApplication.countDocuments(query),
      ]);

      res
        .status(200)
        .json(
          new ApiResponse(
            200,
            applications,
            "Applications retrieved successfully"
          )
        );
    } catch (error) {
      throw new ApiError(500, "Failed to retrieve applications");
    }
  }
);

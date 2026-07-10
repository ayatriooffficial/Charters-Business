import multer from "multer";
import { fileTypeFromBuffer } from "file-type";
import ApiError from "../utils/ApiError.js";

// Use memory storage so we can inspect the buffer before uploading to Cloudinary.
const storage = multer.memoryStorage();

// First-pass filter: check the declared MIME type from the multipart header.
// This is cheap but client-controlled; a second magic-byte check follows.
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["application/pdf"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new ApiError(400, "Only PDF files are allowed"), false);
  }
};

// Multer instance
export const uploadResume = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB max
  },
}).single("resume");

/**
 * Second-pass MIME validation using file magic bytes.
 *
 * SECURITY: The fileFilter above only reads file.mimetype from the HTTP
 * Content-Type header of the multipart part — it is fully client-controlled
 * and trivially spoofed (e.g. rename malware.exe to resume.pdf).
 * This middleware reads the actual file buffer signature to confirm the
 * real file type before it is passed to the controller.
 */
export const validateFileMagicBytes = async (req, res, next) => {
  // Skip if no file was uploaded (controller handles the no-resume case).
  if (!req.file) return next();

  try {
    const detected = await fileTypeFromBuffer(req.file.buffer);

    // PDF magic bytes: starts with %PDF- (hex 25 50 44 46 2D).
    const isPdf = detected && detected.mime === "application/pdf";

    if (!isPdf) {
      return res.status(400).json({
        success: false,
        message: "Invalid file content. Only genuine PDF files are accepted.",
      });
    }

    next();
  } catch (err) {
    next(new ApiError(500, "File validation failed. Please try again."));
  }
};

// Error handling middleware for multer
export const handleUploadError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        success: false,
        message: "File size cannot exceed 5MB",
      });
    }
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
  next(err);
};

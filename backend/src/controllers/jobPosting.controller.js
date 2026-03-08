import JobPosting from '../models/JobPosting.model.js';
import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/ApiResponse.js';
import ApiError from '../utils/ApiError.js';

// Create job posting (Admin/Recruiter only)
export const createJobPosting = asyncHandler(async (req, res) => {
  const {
    title,
    company,
    location,
    jobType,
    category,
    salary,
    experience,
    description,
  } = req.body;

  // Validation
  if (!title || !location || !jobType || !category || !salary || !experience || !description) {
    throw new ApiError(400, 'All fields are required');
  }

  const jobPosting = await JobPosting.create({
    title: title.trim(),
    company: company?.trim() || 'Charters Business',
    location: location.trim(),
    jobType,
    category: category.trim(),
    salary: salary.trim(),
    experience: experience.trim(),
    description,
    createdBy: req.user.id,
  });

  res.status(201).json(
    new ApiResponse(201, jobPosting, 'Job posting created successfully')
  );
});

// Get all job postings (Public with filters)
export const getAllJobPostings = asyncHandler(async (req, res) => {
  const { 
    location, 
    category, 
    jobType,
    search, 
    page = 1, 
    limit = 10,
    sortBy = 'createdAt',
    order = 'desc'
  } = req.query;

  const query = { isActive: true };

  // Filters
  if (location && location !== 'All') {
    query.location = location;
  }

  if (category) {
    query.category = category;
  }

  if (jobType) {
    query.jobType = jobType;
  }

  // Text search
  if (search) {
    query.$text = { $search: search };
  }

  // Sort options
  const sortOptions = {};
  sortOptions[sortBy] = order === 'desc' ? -1 : 1;

  // Execute query with pagination
  const [jobPostings, count] = await Promise.all([
    JobPosting.find(query)
      .populate('createdBy', 'name email')
      .sort(sortOptions)
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit))
      .lean(), // Performance: Use lean() for read-only data
    JobPosting.countDocuments(query)
  ]);

  res.status(200).json(
    new ApiResponse(200, {
      jobPostings,
      pagination: {
        total: count,
        page: parseInt(page),
        pages: Math.ceil(count / limit),
        limit: parseInt(limit),
      }
    }, 'Job postings retrieved successfully')
  );
});

// Get single job posting by ID (Public)
export const getJobPostingById = asyncHandler(async (req, res) => {
  const jobPosting = await JobPosting.findById(req.params.id)
    .populate('createdBy', 'name email');

  if (!jobPosting) {
    throw new ApiError(404, 'Job posting not found');
  }

  // Increment views (async, don't wait)
  JobPosting.findByIdAndUpdate(
    req.params.id,
    { $inc: { views: 1 } },
    { new: false }
  ).exec();

  res.status(200).json(new ApiResponse(200, jobPosting, 'Job posting retrieved successfully'));
});

// Update job posting (Admin/Recruiter only)
export const updateJobPosting = asyncHandler(async (req, res) => {
  const jobPosting = await JobPosting.findById(req.params.id);

  if (!jobPosting) {
    throw new ApiError(404, 'Job posting not found');
  }

  // Check ownership (unless admin)
  if (
    jobPosting.createdBy.toString() !== req.user.id &&
    req.user.role !== 'admin'
  ) {
    throw new ApiError(403, 'You are not authorized to update this job posting');
  }

  const allowedFields = [
    'title', 'company', 'location', 'jobType', 
    'category', 'salary', 'experience', 'description', 'isActive'
  ];

  const updates = {};
  allowedFields.forEach(field => {
    if (req.body[field] !== undefined) {
      updates[field] = req.body[field];
    }
  });

  const updatedJobPosting = await JobPosting.findByIdAndUpdate(
    req.params.id,
    updates,
    { new: true, runValidators: true }
  ).populate('createdBy', 'name email');

  res.status(200).json(
    new ApiResponse(200, updatedJobPosting, 'Job posting updated successfully')
  );
});

// Delete/Deactivate job posting (Admin/Recruiter only)
export const deleteJobPosting = asyncHandler(async (req, res) => {
  const jobPosting = await JobPosting.findById(req.params.id);

  if (!jobPosting) {
    throw new ApiError(404, 'Job posting not found');
  }

  // Check ownership (unless admin)
  if (
    jobPosting.createdBy.toString() !== req.user.id &&
    req.user.role !== 'admin'
  ) {
    throw new ApiError(403, 'You are not authorized to delete this job posting');
  }

  // Soft delete - just mark as inactive
  await JobPosting.findByIdAndUpdate(req.params.id, { isActive: false });

  res.status(200).json(new ApiResponse(200, null, 'Job posting deleted successfully'));
});

// Get my job postings (Recruiter/Admin)
export const getMyJobPostings = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  const query = { createdBy: req.user.id };

  const [jobPostings, count] = await Promise.all([
    JobPosting.find(query)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit))
      .lean(),
    JobPosting.countDocuments(query)
  ]);

  res.status(200).json(
    new ApiResponse(200, {
      jobPostings,
      pagination: {
        total: count,
        page: parseInt(page),
        pages: Math.ceil(count / limit),
      }
    }, 'Your job postings retrieved successfully')
  );
});

// Get job posting statistics (Admin)
export const getJobStats = asyncHandler(async (req, res) => {
  const [totalJobs, activeJobs, inactiveJobs, totalApplications] = await Promise.all([
    JobPosting.countDocuments(),
    JobPosting.countDocuments({ isActive: true }),
    JobPosting.countDocuments({ isActive: false }),
    JobPosting.aggregate([
      { $group: { _id: null, total: { $sum: '$applicationsCount' } } }
    ])
  ]);

  res.status(200).json(
    new ApiResponse(200, {
      totalJobs,
      activeJobs,
      inactiveJobs,
      totalApplications: totalApplications[0]?.total || 0
    }, 'Job statistics retrieved successfully')
  );
});

export default {
  port: process.env.PORT || 5000,
  env: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET,
  jwtExpire: process.env.JWT_EXPIRE || '30d',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  mongodbUri: process.env.MONGODB_URI,
<<<<<<< HEAD
};
=======
};
>>>>>>> e985f5b1974c94b7d2f971f63a2b6805fc1006d2

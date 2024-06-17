require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  dbUrl: process.env.DB_URL,
  jwtSecret: process.env.JWT_SECRET,
};

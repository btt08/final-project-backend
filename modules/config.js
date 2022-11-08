require('dotenv').config();

module.exports = {
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 5000,
  DB_USER: process.env.DB_USER,
  DB_PWD: process.env.DB_PWD,
  DB_NAME: process.env.DB_NAME
};
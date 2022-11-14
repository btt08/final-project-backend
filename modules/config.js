const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, `../${process.env.NODE_ENV}.env`)
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'dev',
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 5000,
  DB_USER: process.env.DB_USER || 'admin',
  DB_PWD: process.env.DB_PWD || 'admin',
  DB_NAME: process.env.DB_NAME || 'products'
};
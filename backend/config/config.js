const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../.env") });

const env = process.env;

module.exports = {
    env : env.APP_ENV,
  [env.APP_ENV]: {
    dialect: env.DB_DRIVER,
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
  },
};

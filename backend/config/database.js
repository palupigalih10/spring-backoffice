const { Sequelize } = require("sequelize");
const config = require("@config/config");

const opt = config[config.env];

const sequelize = new Sequelize(opt.database, opt.username, opt.password, {
  dialect: opt.dialect,
  host: opt.host,
  logging: false,
  // logging: (...msg) => console.log(msg),
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const sync = () => {
  Promise.resolve(
    sequelize
      .sync()
      .then(() => {
        console.log("Database connection has been established successfully.");
      })
      .catch((error) => {
        console.error("Unable to connect to the database:", error);
      })
  );
};

/**
 *  Close database connection.
 *
 *  @returns void
 */
const close = () => {
  Promise.resolve(sequelize.close()).then(() => {
    console.log("Database connection closed.");
  });
};

module.exports = { sequelize, sync, close };

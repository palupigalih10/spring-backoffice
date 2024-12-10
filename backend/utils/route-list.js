require("module-alias/register");

const expressListRoutes = require("express-list-routes");

const app = require("../app");

expressListRoutes(app, {
  // prefix: '', // A prefix for router Path
  spacer: 7, // Spacer between router Method and Path
  logger: console.info, // A custom logger function or a boolean (true for default logger, false for no logging)
  color: true, // If the console log should color the method name
});

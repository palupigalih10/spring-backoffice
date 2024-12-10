const routeV1 = require("@routes/v1/index");

require("dotenv").config();

const initAppRoute = (app) => {
  // if (app === undefined) {
  //   throw new TypeError(
  //     "initAppRoute() requires app instance but got undefined."
  //   );
  // }

  // if (routes === undefined) {
  //   throw new TypeError("Cannot initiate becasuse routes got undefined");
  // }

  app.use("/v1", routeV1);
};

const isRouter = (route) => {
  return typeof route == "function" && route.name == "router";
};

module.exports = {
  initAppRoute,
};

const routeV1 = require("@routes/v1/index");
const routeV2 = require("@routes/v2/index");

// const express = require("express");
// const router = express.Router();

const routes = [
  { path: "/v1", route: routeV1 },
  { path: "/v2", route: routeV2 },
];

module.exports = routes;

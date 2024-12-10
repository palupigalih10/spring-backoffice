const express = require("express");

const router = express.Router();

router.get("/test", (req, res, next) => {
  res.status(200).statusMessage("Test");
});

const route = [{ path: "/", route: router }];

module.exports = route;

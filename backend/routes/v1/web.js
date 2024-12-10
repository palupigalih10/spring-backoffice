const express = require("express");
const httpStatus = require("http-status");

const router = express.Router();

router.get("/homepage", (req, res, next) => {
  const message = "Web Homepage";
  res.statusCode(httpStatus.OK).json({
    message: message,
  });
});

module.exports = router;

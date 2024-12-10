const express = require("express");
const cors = require("cors");
const httpStatus = require("http-status-codes");
const ApiError = require("@utils/ApiError");
const adminRoute = require("@routes/v1/admin");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options("*", cors());

app.use("/v1/admin", adminRoute);

app.use((req, res, next) => {
  next(new ApiError(httpStatus.StatusCodes.NOT_FOUND, "Not found"));
});

module.exports = app;

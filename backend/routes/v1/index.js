const express = require("express");
const adminRoute = require("@routes/v1/admin");
const webRoute = require("@routes/v1/web");

const router = express.Router({ mergeParams: true });

router.use("/admin", adminRoute);

module.exports = router;

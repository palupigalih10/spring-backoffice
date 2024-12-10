require("module-alias/register");
require("dotenv").config();
const Db = require("@config/database");

const app = require("./app");

const HOSTNAME = process.env.APP_HOST || "localhost";
const PORT = process.env.APP_PORT || 3000;
const APP_URL = process.env.APP_URL || `http://${HOSTNAME}`;

try {
  Db.sync();

  app.listen(PORT, (req) => {
    console.log(`Server is running on ${APP_URL}:${PORT}`);
  });

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
} catch (error) {
  console.error("Error when starting server", error);
  process.exit(1);
}

function shutdown() {
  console.log("Shuting down application...");

  try {
    Db.close();
    process.exit(0);
  } catch (error) {
    console.log("Error during shutdown the server", error);
    process.exit(1);
  }
}

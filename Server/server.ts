import logger from "./src/Utils/logger";
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// environment variables from config.env to development
dotenv.config({ path: "./config.env" });
const app = require("./src/app.ts");

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info("DB connections successful!");
  });

// 4) Start Server
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  logger.info(`App running on port ${port}...`);
});

process.on("uncaughtException", (err: Error) => {
  logger.info("UNCAUGHT EXCEPTION ...Shuting down");
  logger.info(err.name, err.message);
  process.exit(1);
});

// Handling all promise rejections - last safety net
// Listening to the unhandledRejection event which allows us to
// handle the errors in async code which werent previously handled
process.on("unhandledRejection", (err: Error) => {
  logger.info(err.name, err.message);
  logger.info("UNHANDLED REJECTION...Shuting down");
  server.close(() => {
    process.exit(1);
  });
});

import mongoose, { ConnectOptions } from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    logger.info("Database connected");
  } catch (error) {
    logger.error("Could not connect to db", error);
    process.exit(1);
  }
}

export default connect;

import { Express } from "express";
import config from "config";
import logger from "./Utils/logger";
import connect from "./Utils/connect";
import express from "express";
import cors from "cors";
import deserializeUser from "./Middleware/deserializeUser";
const userRoute = require("./Routes/user.routes");
const productRoute = require("./Routes/product.routes")
const cartRoute = require("./Routes/cart.routes");
const orderRoute = require("./Routes/order.routes");

const port = config.get<number>("port");
const host = config.get<string>("host");

const app: Express = express();

// Attach our user to every single request in the application
app.use(deserializeUser);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, async () => {
  logger.info(`Server listening at http://${host}:${port}...`);
  await connect();
});

app.use("/api/products", productRoute);
app.use("/api/user", userRoute);
app.use("/api/v1/cart", cartRoute); 
app.use("/api/v1/order", orderRoute); 

// 4) Start Server
module.exports = app;

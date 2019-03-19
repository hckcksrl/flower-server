import express from "express";
import { createConnection, getRepository } from "typeorm";
import { Users } from "./entity/user";
import { connectionOptions } from "./ormconfig";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import login from "./router/user/login";
import flower from "./router/flower/flowers";
import image from "./router/image/image";
import library from "./router/library/library";
import DecodeJwt from "./jwt/decodeJwt";
const app = express();

const jwt = async (req, res, next) => {
  const token = req.get("Authorization");
  if (token != undefined) {
    const user = await DecodeJwt(token);
    if (user) {
      req.user = user;
    } else {
      req.user = undefined;
    }
  }
  next();
};
app.use(jwt);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/user", login);
app.use("/api/flower", flower);
app.use("/api/image", image);
app.use("/api/library", library);

createConnection(connectionOptions)
  .then(() => {
    app.listen(process.env.PORT, () => console.log(process.env.PORT));
  })
  .catch(err => console.log(err));

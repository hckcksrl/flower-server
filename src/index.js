import express from "express";
import {
  createConnection,
  getRepository,
  getConnection,
  ConnectionOptions
} from "typeorm";
import { Users } from "./entity/user";
import { connectionOptions } from "./ormconfig";
import { Library } from "./entity/library";
import bodyParser from "body-parser";
import { Flower } from "./entity/flower";
import { Image } from "./entity/image";

const login = require("../src/router/login");
const app = express();

app.get("/", async (req, res) => {
  // const result = await getRepository(Image)
  //   .createQueryBuilder()
  //   .insert()
  //   .into(Image)
  //   .values({
  //     image_path: "d",
  //     user: 3,
  //     flower: 1
  //   })
  //   .execute();

  const result = await getRepository(Users)
    .createQueryBuilder()
    .insert()
    .into("users")
    .values({ email: "hckcksrl@naver.com", password: "asdasd" })
    .execute();

  res.send(result);
});

// app.get("/:id", async (req, res) => {
//   // const result = await getRepository(Library)
//   //   .createQueryBuilder("library")
//   //   .where("library.userId=:id", { id: req.params })
//   //   .getOne();

//   // const result = await getRepository(User)
//   //   .createQueryBuilder("user")
//   //   .where("user.id=:id", { id: req.params })
//   //   .getOne();

//   res.send(req.params);
// });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", login);

createConnection(connectionOptions)
  .then(() => {
    app.listen(4000, () => console.log("start"));
  })
  .catch(err => console.log(err));

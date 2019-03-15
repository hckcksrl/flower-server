import express from "express";
import {
  createConnection,
  getRepository,
  getConnection,
  ConnectionOptions
} from "typeorm";
import { User } from "./entity/user";
import { connectionOptions } from "./ormconfig";
import { Library } from "./entity/library";

const app = express();

app.get("/", async (req, res) => {
  // const result = await getRepository(User)
  //   .createQueryBuilder()
  //   .insert()
  //   .into(User)
  //   .values({ email: "hckcksrl@naver.com", password: "asd" })
  //   .execute();

  const result = await getRepository(Library)
    .createQueryBuilder()
    .insert()
    .into(Library)
    .values({ library_name: "한글", user: 1 })
    .execute();

  res.send(result);
});

app.get("/:id", async (req, res) => {
  const result = await getRepository(Library)
    .createQueryBuilder("library")
    .where("library.userId=:id", { id: req.params })
    .getOne();

  // const result = await getRepository(User)
  //   .createQueryBuilder("user")
  //   .where("user.id=:id", { id: req.params })
  //   .getOne();

  res.send(result);
});

createConnection(connectionOptions)
  .then(() => {
    app.listen(4000, () => console.log("start"));
  })
  .catch(err => console.log(err));

import express from "express";
import { getRepository } from "typeorm";
import { Users } from "../../entity/user";
import CreateJwt from "../../jwt/createJwt";
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const user = await getRepository(Users)
      .createQueryBuilder("users")
      .where("users.email=:email AND users.password=:password", {
        email: req.body.email,
        password: req.body.password
      })
      .getOne();
    const jwt = CreateJwt(user.email);
    res.status(200).send(jwt);
  } catch (err) {
    res.status(404).send("error");
  }
});

router.put("/regist", async (req, res) => {
  try {
    const user = await getRepository(Users)
      .createQueryBuilder()
      .insert()
      .into("users")
      .values({ email: req.body.email, password: req.body.password })
      .execute();

    const jwt = CreateJwt(user.email);
    res.status(200).send(jwt);
  } catch (err) {
    res.status(404).send("error");
  }
});

module.exports = router;

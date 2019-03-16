import express from "express";
import { getRepository } from "typeorm";
import { Users } from "../entity/user";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await getRepository(Users)
      .createQueryBuilder("user")
      .where("user.email=:email", { email: req.body.email })
      .getOne();
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;

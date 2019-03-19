import express from "express";
import { getRepository } from "typeorm";
import { Flower } from "../../entity/flower";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const flower = await getRepository(Flower)
      .createQueryBuilder("flower")
      .where()
      .getMany();
    res.send(flower);
  } catch (err) {
    res.send("a");
  }
});

router.put("/", async (req, res) => {
  try {
    const result = await getRepository(Flower)
      .createQueryBuilder()
      .insert()
      .into("flower")
      .values({
        flower_path: req.body.flower_path,
        flower_name: req.body.flower_name,
        flower_type: req.body.flower_type,
        color: req.body.color,
        weather: req.body.weather,
        content: req.body.content
      })
      .execute();

    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

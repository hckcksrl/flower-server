import express from "express";
import { getRepository } from "typeorm";
import { Image } from "../../entity/image";
import { Disting } from "../../entity/disting";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const image = await getRepository(Image)
      .createQueryBuilder("image")
      .where()
      .getMany();
    res.send(image);
  } catch (err) {
    res.send("a");
  }
});

router.put("/", async (req, res) => {
  try {
    await getRepository(Image)
      .createQueryBuilder()
      .insert()
      .into("image")
      .values({
        image_path: req.body.image_path,
        user: req.body.user,
        flower: req.body.flower
      })
      .execute()
      .then(result => {
        req.body.flower.map(flower => {
          getRepository(Disting)
            .createQueryBuilder()
            .insert()
            .into("disting")
            .values({ flower: flower, image: result.identifiers[0].id })
            .execute();
        });
        res.send(result);
      })
      .catch(err => console.log(err));
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await getRepository(Image)
      .createQueryBuilder()
      .delete()
      .from("image")
      .where({ id: req.params.id })
      .execute();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

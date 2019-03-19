import express from "express";
import { getRepository } from "typeorm";
import { Users } from "../../entity/user";
import { Library } from "../../entity/library";
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const library = await getRepository(Library)
      .createQueryBuilder("library")
      .where("library.user=:id", { id: req.params.id })
      .getMany();
    res.status(200).send(library);
  } catch (err) {
    res.status(404).send("error");
  }
});
router.put("/", async (req, res) => {
  try {
    const library = await getRepository(Library)
      .createQueryBuilder("library")
      .insert()
      .into("library")
      .values({ library_name: req.body.library_name, user: req.body.user })
      .execute();
    res.status(200).send(library);
  } catch (error) {
    res.status(404).send("error");
  }
});

module.exports = router;

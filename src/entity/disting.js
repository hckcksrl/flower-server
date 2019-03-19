import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToOne
} from "typeorm";
import { Users } from "./user";
import { Flower } from "./flower";
import { Image } from "./image";

@Entity()
export class Disting {
  @PrimaryGeneratedColumn()
  id = undefined;

  @ManyToOne(() => Image, image => image.id, {
    cascade: true,
    onDelete: "CASCADE"
  })
  image = Image;

  @ManyToOne(() => Flower, flower => flower.id, {
    cascade: true,
    onDelete: "CASCADE"
  })
  flower = Flower;
}

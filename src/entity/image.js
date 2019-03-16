import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable
} from "typeorm";
import { Users } from "./user";
import { Flower } from "./flower";

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id = undefined;

  @Column({ type: "varchar", nullable: false, unique: true })
  image_path = "";

  @ManyToMany(() => Flower, {
    cascade: ["insert"]
  })
  @JoinTable()
  flower = Flower;

  @ManyToOne(() => Users, user => user.id)
  user = Users;
}

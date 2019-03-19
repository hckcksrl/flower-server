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
import { Disting } from "./disting";

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id = undefined;

  @Column({ type: "varchar", nullable: false, unique: true })
  image_path = "";

  @OneToMany(() => Disting, disting => disting.id)
  disting = Disting;

  @ManyToOne(() => Users, user => user.id)
  user = Users;
}

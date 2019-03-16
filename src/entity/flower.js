import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable
} from "typeorm";
import { Image } from "./image";

@Entity()
export class Flower {
  @PrimaryGeneratedColumn()
  id = undefined;

  @Column({ type: "varchar", nullable: false })
  flower_path = "";

  @Column({ type: "varchar", nullable: false })
  flower_name = "";

  @Column({ type: "varchar", nullable: false })
  flower_type = "";

  @Column({ type: "text", nullable: false })
  content = "";

  @Column({ type: "varchar", nullable: false })
  color = "";

  @Column({ type: "varchar", nullable: false })
  weather = "";

  @ManyToMany(() => Image, { cascade: ["insert"] })
  images = Image;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable
} from "typeorm";
import { Image } from "./image";
import { Disting } from "./disting";

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

  @OneToMany(() => Disting, disting => disting.id)
  disting = Disting;
}

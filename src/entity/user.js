import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Library } from "./library";
import { Image } from "./image";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id = undefined;

  @Column({ type: "varchar", nullable: false, unique: true })
  email = "";

  @Column({ type: "varchar", nullable: false })
  password = "";

  @OneToMany(() => Library, library => library.user)
  librarys = Library;

  @OneToMany(() => Image, image => image.id)
  images = Image;
}

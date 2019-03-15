import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Library } from "./library";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id = undefined;

  @Column({ type: "varchar", nullable: false, unique: true })
  email = "";

  @Column({ type: "varchar", nullable: false })
  password = "";

  @OneToMany(type => Library, library => library.user)
  librarys = Library;
}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user";

@Entity()
export class Library {
  @PrimaryGeneratedColumn()
  id = undefined;

  @Column("varchar")
  library_name = "";

  @ManyToOne(type => User, user => user.librarys, {
    cascade: true,
    nullable: false,
    onDelete: "CASCADE"
  })
  user = User;
}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Users } from "./user";

@Entity()
export class Library {
  @PrimaryGeneratedColumn()
  id = undefined;

  @Column({ type: "varchar", nullable: true })
  library_name = "";

  @ManyToOne(() => Users, user => user.librarys, {
    cascade: true,
    nullable: false,
    onDelete: "CASCADE"
  })
  user = Users;
}

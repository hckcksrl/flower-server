// export const connectionOptions = {
//   type: "mysql",
//   host: "localhost",
//   port: 3306,
//   username: "root",
//   password: "1111",
//   database: "flower",
//   synchronize: true,
//   entities: [__dirname + "/entity/*.js"]
// };
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

export const connectionOptions = {
  type: "postgres",
  database: "flowers",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  synchronize: true,
  entities: [__dirname + "/entity/*.js"]
};

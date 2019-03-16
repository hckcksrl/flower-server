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

export const connectionOptions = {
  type: "postgres",
  database: "flowers",
  host: "localhost",
  port: 5432,
  username: "hckcksrl",
  password: "1111",
  synchronize: true,
  entities: [__dirname + "/entity/*.js"]
};

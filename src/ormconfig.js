export const connectionOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "1111",
  database: "flower",
  synchronize: true,
  entities: [__dirname + "/entity/*.js"]
};

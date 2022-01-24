require("dotenv").config();

//console.log("config db", process.env)

const dbOptions = {
  connectionLimit: 10,
  host: process.env.HOST,
  user: process.env.USERDB,
  password: process.env.PASSWORD,
  port: process.env.PORT_MYSQL,
  database: process.env.DATABASE,
  debug: true,
};

module.exports = dbOptions;
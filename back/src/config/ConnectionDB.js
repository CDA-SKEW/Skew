var MySQL = require("mysql");
const dbOptions = require("./db");

connectionPool = MySQL.createPool({ ...dbOptions });

connectionPool.config.connectionConfig.queryFormat = function (query, values) {

  // repere les singles quote et double quote pour les saisr dans la db
  console.log("pool config", "query key", query, "values", values);
  return query.replace(
    /:(\w+)/g,
    function (txt, key) {
      if (values.hasOwnProperty(key)) {
        return this.escape(values[key]);
      }
      return txt;
    }.bind(this)
  );

  // console.log("querySql:", querySql);
};

var getConnection = function (done) {
  // console.log("connection pool");
  // console.log(connectionPool);
  connectionPool.getConnection(done);
};

module.exports = { getConnection: getConnection }; ""


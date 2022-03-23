var MySQL = require("mysql");
const dbOptions = require("./db");

connectionPool = MySQL.createPool({ ...dbOptions });

connectionPool.config.connectionConfig.queryFormat = function (query, values) {
  if (!values) return query
  // repere les singles quote et double quote pour les saisr dans la db
  return query.replace(
    /:(\w+)/g,
    function (txt, key) {
      if (values.hasOwnProperty(key)) {
        return this.escape(values[key]);
      }
      return txt;
    }.bind(this)
  );
};

var getConnection = function (done) {
  connectionPool.getConnection(done);
};

module.exports = { getConnection: getConnection }; ""


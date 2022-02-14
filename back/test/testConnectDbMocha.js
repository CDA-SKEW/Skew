var MySQL = require("mysql");
const dbOptions = require("../src/config/db");

// Config Chai
const chai = require('chai');
const expect = chai.expect;

connectionPool = MySQL.createPool({ ...dbOptions });

// var getConnection = function (done) {
//   console.log("connection pool");
//   connectionPool.getConnection(done);
// };

// module.exports = { getConnection: getConnection };

it('db.connection.connect...', function (done) {
  connectionPool.getConnection(function (err, result) {
    if (err) {
      done(err);
    }
    // console.log(result)
    expect(result.state).to.equal("connected")
    done();

  });
});
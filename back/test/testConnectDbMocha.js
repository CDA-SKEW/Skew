var MySQL = require("mysql");
const dbOptions = require("../src/config/db")

// Config Chai
const chai = require('chai');
const expect = chai.expect;

connectionPool = MySQL.createPool({ ...dbOptions });

it('db.connection.connect...', function (done) {
  connectionPool.getConnection(function (err, result) {
    if (err) {
      done(err);
    }
    expect(result.state).to.equal("connected")
    done();
  });
  
});
var MySQL = require("mysql");
const dbOptions = require("../src/config/db")

// Config Chai
const chai = require('chai');
const expect = chai.expect;

// console.log("dbOptions",dbOptions)
connectionPool = MySQL.createPool({ ...dbOptions });

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
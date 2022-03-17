// Request node-cron, moment & fs
const cron = require("node-cron");
const fs = require("fs");
const moment = require("moment");
// Processus enfants
const { spawn } = require("child_process");
// ENV
require("dotenv").config();

const mysql = require('mysql')

const connection = mysql.createConnection({
    // described at https://www.npmjs.com/package/mysql#multiple-statement-queries
    multipleStatements: true,
    // your connection options follow here
  });
  connection.query(yourSqlFileContent, (err) => { console.log(err ? err : 'restored!') });
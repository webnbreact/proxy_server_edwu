const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // Change user here if the mysql user on your computer differs
  database: 'booking',
});


module.exports = db;

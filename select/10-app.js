// Selecting From a Table
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "play"
});

const query = "SELECT * FROM customers" 

con.connect( err => {
  if (err) throw err;
  con.query(query , (err, rows, fields) => {
      if (err) throw err;
      console.log(rows)
      //console.log(fields)
      //console.log( JSON.parse(JSON.stringify(result)));
      con.end()
  });
});
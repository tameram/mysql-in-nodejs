// Select With a Filter
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "play"
});


// 1. ? as a placeholder
//var adr = 'Mountain 21';
//var sql = 'SELECT * FROM customers WHERE address = ?';
// 'SELECT * FROM customers WHERE address = 'Mountain 21';

// 2. multiple placeholders
var name = 'Amy';
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';

con.connect(err => {
  if (err) throw err;
  //  con.query(sql, [adr],  (err, result, fields) => {
    con.query(sql, [name , adr],  (err, result, fields) => {
      if (err) throw err;
      console.log(JSON.parse(JSON.stringify(result)));
      con.end()
    });
});


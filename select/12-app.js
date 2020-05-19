// Sort the Result
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "play"
});


//var sql = "SELECT * FROM customers ORDER BY name"
var sql = "SELECT * FROM customers ORDER BY name DESC"
con.connect(err => {
  if (err) throw err;
    con.query(sql,  (err, result, fields) => {
      if (err) throw err;
      console.log(JSON.parse(JSON.stringify(result)));
      con.end()
    });
});


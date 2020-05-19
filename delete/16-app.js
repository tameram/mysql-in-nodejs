// Delete Record
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "play"
});

var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
con.connect(err => {
  if (err) throw err;
    con.query(sql,  (err, result, fields) => {
      if (err) throw err;
      console.log(JSON.parse(JSON.stringify(result)));
      con.end()
    });
});
// Sort the Result
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  // database: "play"
  database: "northwind"
});


//var sql = "SELECT * FROM customers ORDER BY name"
//var sql = "SELECT * FROM customers ORDER BY name DESC";


const sql = `
          SELECT Orders.OrderID, Customers.CompanyName
                 FROM Orders
                 INNER JOIN Customers 
                 ON Orders.CustomerID = Customers.CustomerID limit 10; `


con.connect(err => {
  if (err) throw err;
    con.query(sql,  (err, result, fields) => {
      if (err) throw err;
      console.log(JSON.parse(JSON.stringify(result)));
      con.end()
    });
});


// join

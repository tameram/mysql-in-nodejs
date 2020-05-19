// Creating a Table
const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'play'
});

// drop table  customers
const sql = `
    CREATE TABLE customers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        address VARCHAR(255)
    )`
con.connect( error => {
    if (error) throw error;
   // console.log('Connected', con.state)
    con.query(sql, function (err, result) {
      if (err) throw err;
        console.log("Table created" , JSON.stringify(result, null , 4));
        con.end()
    });
})


/*
var sql = `ALTER TABLE customers 
                ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY`;
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table altered");
});
*/

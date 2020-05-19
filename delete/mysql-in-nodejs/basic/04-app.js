// Creating a Table
const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'play'
});

const sql = `
    CREATE TABLE customers (
        name VARCHAR(255),
        address VARCHAR(255)
    )`;

    con.connect( error => {
        if (error) throw error;
    
        con.query(sql, (err, result) => {
          if (err) throw err;
          console.log("Table created" , JSON.stringify(result, null , 4));
          con.end()
        });
    })
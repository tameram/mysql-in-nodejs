// Insert inserted ID
const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'play'
});


const sql = `INSERT INTO customers 
                    (name, address)
                    VALUES ('Michelle', 'Blue Village 1')`;

con.connect(error => {
    if (error) throw error;

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted, ID: " + result.insertId);
        con.end()
    });
});

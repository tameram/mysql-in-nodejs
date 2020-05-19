// Insert Into Table
const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'play'
});


var sql = `INSERT INTO customers 
                (name, address)
                VALUES ('Company Inc', 'Highway 37')`;
                
con.connect( error => {
    if (error) throw error;

    con.query(sql, (err, result) => {
      if (err) throw err;
        console.log("Table created" , JSON.stringify(result, null , 4));
        con.end()
    });
})
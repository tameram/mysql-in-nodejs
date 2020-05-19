//Node.js MySQL Create Database

const mysql = require('mysql')
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
});

con.connect(error => {
    if (error) throw error;
  //  console.log('Connected', con.state)

    con.query("CREATE DATABASE play", (err, result) => {
        if (err) throw err;
        console.log("play Database created");
        console.log(result)
        con.end();
    });

})
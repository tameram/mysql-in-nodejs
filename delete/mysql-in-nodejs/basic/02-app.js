// Create Connection

const mysql = require('mysql')
console.log(mysql)

const config = {
    host: 'localhost',
    user: 'root',
    password: ''
}

const con = mysql.createConnection(config);

//console.clear();
//console.log(con)
//console.log(con.state)

con.connect( error => {
    if (error) throw error;
    console.log('Connected', con.state)
   con.end();
})



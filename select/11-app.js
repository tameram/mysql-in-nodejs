// Select With a Filter
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "play"
});

// 1. Select With a Filter
//var sql ="SELECT * FROM customers WHERE address = 'Park Lane 38'"

// 2. Wildcard Characters
//var sql = "SELECT * FROM customers WHERE address LIKE 'S%'"

// 3. Escaping Query Values
//var adr = 'Mountain 21'; // Danny\'s car
//var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);

// 4. Limit the Result 
var sql = "SELECT * FROM customers LIMIT 5";
//

con.connect(err => {
  if (err) throw err;
    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      console.log(JSON.parse(JSON.stringify(result)));
      con.end()
    });
});

/*
MySQL recognizes the following escape sequences.
\0     An ASCII NUL (0x00) character.
\'     A single quote (“'”) character.
\"     A double quote (“"”) character.
\b     A backspace character.
\n     A newline (linefeed) character.
\r     A carriage return character.
\t     A tab character.
\Z     ASCII 26 (Control-Z). See note following the table.
\\     A backslash (“\”) character.
\%     A “%” character. See note following the table.
\_     A “_” character. See note following the table.

*/
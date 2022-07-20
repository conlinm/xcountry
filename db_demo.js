import mysql from 'mysql2';

var con = mysql.createConnection({
	host: '34.145.124.152',
	user: 'root',
	password: 'xcrm',
	database: 'cross_country'
});

con.query('SHOW TABLES', function (err, results, fields) {
	if (err) throw err;
    //this will convert all the individual objects in the results array to regular objects (without the RowDataPacket) 
	results = results.map((v) => Object.assign({}, v));
	console.log(results);
});
// con.end();

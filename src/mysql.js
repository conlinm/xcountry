import mysql from 'mysql2/promise';

let con = null;

export async function conFn() {
	if (!con) {
		con = await mysql.createConnection({
			host: '34.145.124.152',
			user: 'root',
			password: 'xcrm',
			database: 'cross_country'
		});
	}
	return con;
}

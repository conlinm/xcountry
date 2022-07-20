import { conFn } from '../mysql.js';

export async function get({ params }) {
	
	let con = await conFn();

	const schools = await con.query('SELECT * FROM school').then(function ([rows, fields]) {
		return rows;
	});
	if (schools) {
		return {
			status: 200,
			body: { schools }
		};
	}
}

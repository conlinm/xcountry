import { conFn } from '../mysql.js';

export async function get({ params }) {
	
	let con = await conFn();

	const meets = await con.query('SELECT * FROM meet').then(function ([rows, fields]) {
		return rows;
	});
	if (meets) {
		return {
			status: 200,
			body: { meets }
		};
	}
}

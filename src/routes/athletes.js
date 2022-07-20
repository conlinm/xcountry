import { conFn } from '../mysql.js';

export async function get({ params }) {
	let con = await conFn();

	const athletes = await con
		.query('SELECT * FROM high_school_athlete')
		.then(function ([rows, fields]) {
			return rows;
		});
	if (athletes) {
		return {
			status: 200,
			body: { athletes }
		};
	}
}

/** @type {import('@sveltejs/kit').RequestHandler} */

import { conFn } from '../mysql.js';

export async function get({ params }) {
	let con = await conFn();

	const top_schools = await con
		.query(`CALL count_girls_by_school("22:00:00");`)
		.then(function ([rows, fields]) {
			return rows;
		});

	if (top_schools) {
		return {
			status: 200,
			body: { top_schools }
		};
	}
}

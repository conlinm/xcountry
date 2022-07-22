/** @type {import('@sveltejs/kit').RequestHandler} */

import { conFn } from '../mysql.js';

export async function get({ params }) {
	let con = await conFn();

	const top_athletes = await con
		.query(`CALL athletes_under_standard("00:19:00", "00:20:00");`)
		.then(function ([rows, fields]) {
			return rows;
		});

	if (top_athletes) {
		return {
			status: 200,
			body: { top_athletes }
		};
	}
}

/** @type {import('@sveltejs/kit').RequestHandler} */

import { conFn } from '../mysql.js';

export async function get({ url }) {
	let con = await conFn();
	const event_selection = url.searchParams.get('event_selection') || '';
	const name = url.searchParams.get('name');

	let query = `SELECT * FROM high_school_athlete`;

	// console.log({ name, event_selection });

	if (name && !event_selection) {
		query += ` WHERE last_name LIKE '%${name}%'`;
	}
	if (event_selection && !name) {
		query += ` WHERE event_name = '${event_selection}'`;
	}
	if (event_selection && name) {
		query += ` WHERE last_name LIKE '%${name}%' and event_name = '${event_selection}'`;
	}

	const athletes = await con.query(query).then(function ([rows, fields]) {
		return rows;
	});
	if (athletes) {
		return {
			status: 200,
			body: { athletes }
		};
	}
}

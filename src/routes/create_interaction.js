/** @type {import('@sveltejs/kit').RequestHandler} */

import { conFn } from '../mysql.js';

export async function get({ url }) {
	let con = await conFn();
	const athlete_id = url.searchParams.get('athlete_id') || '';
	const first_name = url.searchParams.get('first_name');
	const last_name = url.searchParams.get('last_name');

	console.log({ athlete_id, first_name, last_name });
	const interaction = await con
		.query(
			`SELECT athlete_id, first_name,last_name 
        FROM high_school_athlete WHERE athlete_id = '${athlete_id}'`
		)
		.then(function ([rows, fields]) {
			return rows;
		});
	if (interaction) {
		return {
			status: 200,
			body: {
				athlete_id,
				first_name,
				last_name,
				interaction
			}
		};
	}
	console.log({ interaction });
}

export async function post({ request }) {
	let con = await conFn();
	const form = await request.formData();
	const athlete_id = form.get('athlete_id');
	const interaction_date = form.get('date');
	const notes = form.get('note');
	con.query(
		'INSERT INTO interactions (athlete_id, user_id, interaction_date, notes) VALUES (?, ?, ?, ?)',
		[athlete_id, '111111', interaction_date, notes]
	);
	return {
        status: 302,
		headers: { Location: '/interactions',
                    accept: JSON }
		
	};
}

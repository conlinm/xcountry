/** @type {import('@sveltejs/kit').RequestHandler} */

import { conFn } from '../mysql.js';

export async function get({ url }) {
	let con = await conFn();
	const athlete_id = url.searchParams.get('athlete_id') || '';
	const first_name = url.searchParams.get('first_name');
	const last_name = url.searchParams.get('last_name');

	console.log({ athlete_id, first_name, last_name });
	const result = await con
		.query(
			`SELECT athlete_id, first_name,last_name 
        FROM high_school_athlete WHERE athlete_id = '${athlete_id}'`
		)
		.then(function ([rows, fields]) {
			return rows;
		});
	if (result) {
		return {
			status: 200,
			body: {
				athlete_id,
				first_name,
				last_name,
				result
			}
		};
	}
	console.log({ result });
}
let result_id = 888888881;

export async function post({ request }) {
	let con = await conFn();
	const form = await request.formData();
	const athlete_id = form.get('athlete_id');
	const distance = form.get('distance');
	const result_time = form.get('result_time');
	const finishing_position = form.get('finishing_position');
	
	con.query(
		`INSERT INTO meet_results(result_id,meet_id,athlete_id,distance,result_time,finishing_position) VALUES (?, '999999999', ?, ?, ?, ?);`,
		[result_id.toString(), athlete_id, distance, result_time, finishing_position]
	);
	result_id = result_id + 1;
	return {
		status: 302,
		headers: { Location: '/results', accept: JSON }
	};
}

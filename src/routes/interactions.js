/** @type {import('@sveltejs/kit').RequestHandler} */

import { conFn } from '../mysql.js';

export async function get({ params }) {
	let con = await conFn();

	const interactions = await con
		.query(
			`SELECT a.first_name,last_name, Date_Format(i.interaction_date,"%Y-%m-%d") as interaction_date, i.notes, i.interactions_id, i.athlete_id
	FROM interactions as i JOIN high_school_athlete as a
		ON a.athlete_id = i.athlete_id ORDER BY interaction_date DESC;`
		)
		.then(function ([rows, fields]) {
			return rows;
		});
	if (interactions) {
		return {
			status: 200,
			body: { interactions }
		};
	}
}

export async function post({ request }) {
	let con = await conFn();
	const form = await request.formData();
	const athlete_id = form.get('athlete_id');
	const interaction_date = form.get('date');
	const notes = form.get('note');
	con.query(
		'INSERT INTO interations (athlete_id, user_id, interation_date, notes) VALUES (?, ?, ?, ?)',
		[athlete_id, '111111', interaction_date, notes]
	);
	return {
		body: {
			athlete_id: form.get('athlete_id'),
			user_id: '111111',
			interaction_date: form.get('date'),
			notes: form.get('note')
		}
	};
}

export async function put({ request }) {
	console.log('put');
	let con = await conFn();
	const form = await request.formData();
	const interaction_date = form.get('date');
	const notes = form.get('note');
	const interactions_id = form.get('interaction_id');
	con.query('UPDATE interactions SET interaction_date = ?, notes = ? WHERE interactions_id = ?', [
		interaction_date,
		notes,
		interactions_id
	]);
	return {
		body: {
			interaction_date: form.get('date'),
			notes: form.get('note'),
			interactions_id: form.get('interaction_id')
		}
	};
}

export async function del({ request }) {
	console.log('delete');
	let con = await conFn();
	const form = await request.formData();

	const interactions_id = form.get('interaction_id');
	con.query('DELETE FROM interactions WHERE interactions_id = ?', [interactions_id]);
	return {
		body: {
			interactions_id: form.get('interaction_id')
		}
	};
}

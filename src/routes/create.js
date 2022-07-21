/** @type {import('@sveltejs/kit').RequestHandler} */

import { conFn } from '../mysql.js';

export async function get({ params }) {
	let con = await conFn();

	const users = await con.query('SELECT * FROM website_user;').then(function ([rows, fields]) {
		return rows;
	});
	if (users) {
		return {
			status: 200,
			body: { users }
		};
	}
}

export async function post({ request }) {
	let con = await conFn();
	const form = await request.formData();
	const first_name = form.get('first_name');
	const last_name = form.get('last_name');
	const email = form.get('email');
	const password = form.get('password');
	con.query(
		'INSERT INTO website_user (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
		[first_name, last_name, email, password]
	);
	return {
		body: {
			first_name: form.get('first_name'),
			last_name: form.get('last_name'),
			email: form.get('email'),
			password: form.get('password')
		}
	};
}


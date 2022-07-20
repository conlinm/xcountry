import { conFn } from '../mysql.js';

export async function get({ params }) {
	let con = await conFn();

	const prs = await con
		.query('CALL get_pr')
		.then(function ([rows, fields]) {
			return rows;
		});
	if (prs) {
		return {
			status: 200,
			body: { prs }
		};
	}
}

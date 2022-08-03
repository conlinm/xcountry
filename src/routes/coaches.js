import { conFn } from '../mysql.js';

export async function get({ params }) {
	let con = await conFn();

	const coaches = await con
		.query(
			`SELECT c.first_name, c.last_name, c.email, c.phone_number, s.school_name FROM high_school_coach as c JOIN school as s ON c.school_id = s.school_id ORDER BY c.last_name;`
		)
		.then(function ([rows, fields]) {
			return rows;
		});
	if (coaches) {
		return {
			status: 200,
			body: { coaches }
		};
	}
}

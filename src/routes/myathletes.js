/** @type {import('@sveltejs/kit').RequestHandler} */

import { conFn } from '../mysql.js';

export async function get({ params }) {
	
	let con = await conFn();

	const my_athletes = await con.query(`SELECT a.last_name, a.grade_level, s.school_name,u.gpa, u.recruit_status 
    FROM high_school_athlete as a JOIN users_athletes as u
        ON a.athlete_id = u.athlete_id
        JOIN school as s 
        ON a.school_id = s.school_id`).then(function ([rows, fields]) {
		return rows;
	});
	if (my_athletes) {
		return {
			status: 200,
			body: { my_athletes }
		};
	}
}

import { conFn } from '../mysql.js';

export async function get({ params }) {
	let con = await conFn();

	const results = await con
		.query(`SELECT a.athlete_id, a.first_name, a.last_name, a.event_name, s.school_name, mr.distance, mr.result_time, meet.meet_name, Date_Format(meet.meet_date,"%m/%d/%Y") as meet_date
        FROM high_school_athlete as a
            JOIN school as s
                ON a.school_id = s.school_id
            JOIN meet_results as mr
                ON a.athlete_id = mr.athlete_id 
            JOIN meet as meet
                ON mr.athlete_id = a.athlete_id and mr.meet_id = meet.meet_id
        WHERE mr.result_time < '01:00:00'
        ORDER BY meet_date, a.athlete_id;`)
		.then(function ([rows, fields]) {
			return rows;
		});
	if (results) {
		return {
			status: 200,
			body: { results }
		};
	}
}
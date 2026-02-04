import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals }) => {
	const token = locals.token;
	const user = locals.user;

	// Check if lecturer
	if (!user?.roles.includes('lecturer')) {
		// Redirect or show access denied? For now, let's just show empty or distinct message in UI.
		// Ideally prompt to register as lecturer profile?
	}

	let classes = [];
	let lecturerProfile = null;

	try {
		// 1. Get Lecturer Profile
		const profileRes = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/lecturers/me`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		lecturerProfile = profileRes.data.data;

		// 2. Get Classes taught by this lecturer
		if (lecturerProfile) {
			const classesRes = await axios.get(
				`${PUBLIC_ACADEMIC_API_URL}/classes?lecturer_id=${lecturerProfile.id}`,
				{
					headers: { Authorization: `Bearer ${token}` }
				}
			);
			classes = classesRes.data.data;
		}
	} catch (error: any) {
		// Ignore 404 for profile (means not yet set up)
		if (error.response?.status !== 404) {
			console.error('Fetch teaching data failed', error.message);
		}
	}

	return { classes, lecturerProfile };
};

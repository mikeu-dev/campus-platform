import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_LEARNING_API_URL, PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals }) => {
	const token = locals.token;
	let studentProfile = null;
	let deadlines: any[] = [];

	try {
		// Get student profile
		const profileRes = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/students/me`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		studentProfile = profileRes.data.data;

		if (studentProfile?.id) {
			// Get upcoming deadlines
			const deadlinesRes = await axios.get(
				`${PUBLIC_LEARNING_API_URL}/students/${studentProfile.id}/deadlines`,
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			deadlines = deadlinesRes.data.data || [];
		}
	} catch (error: any) {
		console.error('Calendar page error', error.response?.data || error.message);
	}

	return { studentProfile, deadlines };
};

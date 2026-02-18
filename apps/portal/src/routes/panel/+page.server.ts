import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals, parent }) => {
	await parent();
	const token = locals.token;
	let studentProfile = null;
	let enrollmentsCount = 0;
	const pendingAssignments = 0;
	let recentClasses: any[] = [];

	if (token) {
		try {
			// Fetch Student Profile
			const profileRes = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/students/me`, {
				headers: { Authorization: `Bearer ${token}` }
			});
			studentProfile = profileRes.data.data;

			// Fetch Enrollments
			const enrollRes = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/enrollments/my`, {
				headers: { Authorization: `Bearer ${token}` }
			});
			const enrollments = enrollRes.data.data || [];
			enrollmentsCount = enrollments.length;
			recentClasses = enrollments.slice(0, 3);

			// TODO: Fetch pending assignments count (requires new API or aggregation)
			// For now, we'll show a placeholder
		} catch (error: any) {
			console.error('Dashboard data fetch error', error.response?.data || error.message);
		}
	}

	return {
		studentProfile,
		enrollmentsCount,
		pendingAssignments,
		recentClasses
	};
};

import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL, PUBLIC_LEARNING_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals }) => {
	const token = locals.token;

	try {
		// Fetch enrollments with rich data (updated academic-service query)
		const res = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/enrollments/my`, {
			headers: { Authorization: `Bearer ${token}` }
		});

		const enrollments = res.data.data;

		// For each class, fetch stats from learning-service
		const enrollmentsWithStats = await Promise.all(
			enrollments.map(async (e: any) => {
				try {
					// Need student ID. Let's assume Profile is already available or fetch it once.
					// For now, let's fetch profile once here.
					const profileRes = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/students/me`, {
						headers: { Authorization: `Bearer ${token}` }
					});
					const studentId = profileRes.data.data.id;

					const statsRes = await axios.get(`${PUBLIC_LEARNING_API_URL}/students/${studentId}/stats`, {
						headers: { Authorization: `Bearer ${token}` }
					});
					return { ...e, stats: statsRes.data.data };
				} catch {
					return { ...e, stats: null };
				}
			})
		);

		return { enrollments: enrollmentsWithStats };
	} catch (error: any) {
		console.error('Fetch enrollments failed', error.message);
		return { enrollments: [] };
	}
};

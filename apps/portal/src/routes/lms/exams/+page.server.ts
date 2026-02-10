import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals }) => {
	const token = locals.token;

	try {
		const res = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/exams/my`, {
			headers: { Authorization: `Bearer ${token}` }
		});

		return {
			exams: res.data.data
		};
	} catch (error) {
		console.error('Error loading exams:', error);
		return {
			exams: []
		};
	}
};

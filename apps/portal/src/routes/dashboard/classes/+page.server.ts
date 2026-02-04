import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals }) => {
	const token = locals.token;
	let enrollments = [];

	try {
		const res = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/enrollments/my`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		enrollments = res.data.data;
	} catch (error: any) {
		console.error('Fetch enrollments failed', error.message);
	}

	return { enrollments };
};

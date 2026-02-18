import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals }) => {
	const token = locals.token;
	let researchHistory = [];

	try {
		const res = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/research/my`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		researchHistory = res.data.data || [];
	} catch (error: any) {
		console.error('Research History load error:', error.response?.data || error.message);
	}

	return { researchHistory };
};

import axios from 'axios';
import { PUBLIC_ADMISSION_API_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }: any) => {
	const token = locals.token;
	let stats = { summary: { total: 0, verified: 0, passed: 0, rejected: 0 }, byPeriod: [] };

	try {
		const res = await axios.get(`${PUBLIC_ADMISSION_API_URL}/admin/pmb/stats`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		stats = res.data.data;
	} catch (error: any) {
		console.error('PMB stats load error:', error.response?.data || error.message);
	}

	return {
		stats
	};
};

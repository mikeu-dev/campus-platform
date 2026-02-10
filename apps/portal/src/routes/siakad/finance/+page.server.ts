import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals }) => {
	const token = locals.token;
	let financeData = { bills: [], totalUnpaid: 0 };

	try {
		const res = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/finance/my-bill`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		financeData = res.data.data;
	} catch (error: any) {
		console.error('Finance load error:', error.response?.data || error.message);
	}

	return { financeData };
};

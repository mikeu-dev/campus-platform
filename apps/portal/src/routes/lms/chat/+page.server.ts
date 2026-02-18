import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_LEARNING_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals }) => {
	const token = locals.token;
	let conversations: any[] = [];

	try {
		const res = await axios.get(`${PUBLIC_LEARNING_API_URL}/messages/conversations`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		conversations = res.data.data || [];
	} catch (error: any) {
		console.error('Conversations fetch error', error.response?.data || error.message);
	}

	return { conversations };
};

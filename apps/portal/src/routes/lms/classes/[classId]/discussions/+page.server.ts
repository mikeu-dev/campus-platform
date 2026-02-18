import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_LEARNING_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals, params }) => {
	const token = locals.token;
	const { classId } = params;
	let discussions: any[] = [];

	try {
		const res = await axios.get(`${PUBLIC_LEARNING_API_URL}/classes/${classId}/discussions`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		discussions = res.data.data || [];
	} catch (error: any) {
		console.error('Discussions fetch error', error.response?.data || error.message);
	}

	return { discussions, classId };
};

export const actions = {
	post: async ({ request, locals, params }) => {
		const data = await request.formData();
		const content = data.get('content');
		const token = locals.token;
		const { classId } = params;

		if (!content || String(content).trim().length === 0) {
			return { error: 'Please enter a message' };
		}

		try {
			await axios.post(
				`${PUBLIC_LEARNING_API_URL}/classes/${classId}/discussions`,
				{ content },
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			return { success: true };
		} catch (error: any) {
			return { error: error.response?.data?.message || 'Failed to post' };
		}
	}
};

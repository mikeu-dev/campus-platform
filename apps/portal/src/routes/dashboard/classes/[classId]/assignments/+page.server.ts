import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import axios from 'axios';
import { PUBLIC_LEARNING_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals, params }) => {
	const token = locals.token;
	const { classId } = params;
	let assignments = [];

	try {
		const res = await axios.get(`${PUBLIC_LEARNING_API_URL}/classes/${classId}/assignments`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		assignments = res.data.data;
	} catch (error: any) {
		console.error('Fetch assignments failed', error.message);
	}

	return { assignments, classId };
};

export const actions = {
	create: async ({ request, locals, params }) => {
		const data = await request.formData();
		const title = data.get('title');
		const description = data.get('description');
		const deadline = data.get('deadline');
		const { classId } = params;
		const token = locals.token;

		if (!title || !deadline) return fail(400, { error: 'Title and Deadline are required' });

		try {
			await axios.post(
				`${PUBLIC_LEARNING_API_URL}/classes/${classId}/assignments`,
				{
					title,
					description,
					deadline: new Date(deadline.toString()).toISOString()
				},
				{
					headers: { Authorization: `Bearer ${token}` }
				}
			);
			return { success: true };
		} catch (error: any) {
			const message = error.response?.data?.message || 'Failed to create assignment';
			return fail(400, { error: message });
		}
	}
} satisfies Actions;

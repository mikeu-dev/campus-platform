import type { PageServerLoad, Actions } from './$types';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	const token = locals.token;
	let requestHistory = [];

	try {
		const res = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/certificates/my`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		requestHistory = res.data.data || [];
	} catch (error: any) {
		console.error('Certificates load error:', error.response?.data || error.message);
	}

	return { requestHistory };
};

export const actions: Actions = {
	request: async ({ request, locals }) => {
		const token = locals.token;
		const formData = await request.formData();
		const type = formData.get('type');
		const purpose = formData.get('purpose');
		const quantity = parseInt(formData.get('quantity') as string) || 1;
		const notes = formData.get('notes');

		if (!type) {
			return fail(400, { message: 'Type is required' });
		}

		try {
			await axios.post(
				`${PUBLIC_ACADEMIC_API_URL}/certificates`,
				{
					type,
					purpose,
					quantity,
					notes
				},
				{
					headers: { Authorization: `Bearer ${token}` }
				}
			);

			return { success: true };
		} catch (error: any) {
			console.error('Certificate request action error:', error.response?.data || error.message);
			return fail(500, { message: 'Failed to submit request' });
		}
	}
};

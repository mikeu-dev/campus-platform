import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals, url }) => {
	const token = locals.token;
	if (!locals.user?.roles.includes('admin')) {
		return { courses: [], meta: { page: 1, limit: 10, total: 0, totalPages: 1 }, isAdmin: false };
	}

	const page = Number(url.searchParams.get('page')) || 1;
	const limit = Number(url.searchParams.get('limit')) || 10;
	const search = url.searchParams.get('search') || '';

	let courses = [];
	let meta = { page, limit, total: 0, totalPages: 1 };

	try {
		const res = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/courses`, {
			headers: { Authorization: `Bearer ${token}` },
			params: { page, limit, search }
		});
		courses = res.data.data;
		if (res.data.meta) meta = res.data.meta;
	} catch (error: any) {
		console.error('Fetch courses failed', error.message);
	}

	return { courses, meta, isAdmin: true };
};

export const actions = {
	create: async ({ request, locals }) => {
		const data = await request.formData();
		const code = data.get('code');
		const name = data.get('name');
		const credits = parseInt(data.get('credits')?.toString() || '0');
		const token = locals.token;

		if (!code || !name || credits <= 0) {
			return fail(400, { error: 'Invalid fields' });
		}

		try {
			await axios.post(
				`${PUBLIC_ACADEMIC_API_URL}/courses`,
				{
					code,
					name,
					credits
				},
				{
					headers: { Authorization: `Bearer ${token}` }
				}
			);
			return { success: true };
		} catch (error: any) {
			const message = error.response?.data?.message || 'Failed to create course';
			return fail(400, { error: message });
		}
	}
} satisfies Actions;

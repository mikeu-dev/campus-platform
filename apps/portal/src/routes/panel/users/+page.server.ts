import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import axios from 'axios';
import { PUBLIC_IDENTITY_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals, url }) => {
	const token = locals.token;

	if (!locals.user?.roles.includes('admin')) {
		// Simple redirect or error handling needed in real app
		return { users: [], meta: { page: 1, limit: 10, total: 0, totalPages: 1 }, isAdmin: false };
	}

	const page = Number(url.searchParams.get('page')) || 1;
	const limit = Number(url.searchParams.get('limit')) || 10;
	const search = url.searchParams.get('search') || '';

	let users = [];
	let meta = { page, limit, total: 0, totalPages: 1 };

	try {
		const res = await axios.get(`${PUBLIC_IDENTITY_API_URL}/auth/users`, {
			headers: { Authorization: `Bearer ${token}` },
			params: { page, limit, search }
		});
		users = res.data.data;
		if (res.data.meta) meta = res.data.meta;
	} catch (error: any) {
		console.error('Fetch users failed', error.message);
	}

	return { users, meta, isAdmin: true };
};

export const actions = {
	create: async ({ request, locals }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
		const fullName = data.get('fullName');
		const roleName = data.get('roleName');
		const token = locals.token;

		if (!email || !password || !fullName || !roleName) {
			return fail(400, { error: 'All fields are required' });
		}

		try {
			await axios.post(
				`${PUBLIC_IDENTITY_API_URL}/auth/users`,
				{
					email,
					password,
					fullName,
					roleName
				},
				{
					headers: { Authorization: `Bearer ${token}` }
				}
			);
			return { success: true };
		} catch (error: any) {
			const message = error.response?.data?.message || 'Failed to create user';
			return fail(400, { error: message });
		}
	}
} satisfies Actions;

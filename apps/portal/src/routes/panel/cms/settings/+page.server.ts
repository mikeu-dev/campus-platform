import axios from 'axios';
import { fail } from '@sveltejs/kit';
import { PUBLIC_PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }: any) => {
	const token = locals.token;
	const tenantId = '00000000-0000-0000-0000-000000000000';
	let settings = {};

	try {
		const res = await axios.get(`${PUBLIC_PUBLIC_API_URL}/public/${tenantId}/settings`);
		settings = res.data.data;
	} catch (error: any) {
		console.error('Settings load error:', error.response?.data || error.message);
	}

	return {
		settings
	};
};

/** @type {import('./$types').Actions} */
export const actions = {
	save: async ({ request, locals }: any) => {
		const token = locals.token;
		const formData = await request.formData();
		const data = Object.fromEntries(formData);

		try {
			await axios.post(`${PUBLIC_PUBLIC_API_URL}/admin/settings`, data, {
				headers: { Authorization: `Bearer ${token}` }
			});
			return { success: true };
		} catch (error: any) {
			return fail(400, { message: error.response?.data?.message || 'Gagal menyimpan pengaturan' });
		}
	}
};

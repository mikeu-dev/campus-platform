import axios from 'axios';
import { fail } from '@sveltejs/kit';
import { PUBLIC_ADMISSION_API_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }: any) => {
	const token = locals.token;
	let periods = [];

	try {
		const res = await axios.get(`${PUBLIC_ADMISSION_API_URL}/admin/periods`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		periods = res.data.data;
	} catch (error: any) {
		console.error('Periods load error:', error.response?.data || error.message);
	}

	return {
		periods
	};
};

/** @type {import('./$types').Actions} */
export const actions = {
	create: async ({ request, locals }: any) => {
		const token = locals.token;
		const formData = await request.formData();
		const data = Object.fromEntries(formData);

		try {
			await axios.post(
				`${PUBLIC_ADMISSION_API_URL}/admin/periods`,
				{
					...data,
					is_active: data.is_active === 'on'
				},
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			return { success: true };
		} catch (error: any) {
			return fail(400, { message: error.response?.data?.message || 'Gagal menambahkan gelombang' });
		}
	},
	update: async ({ request, locals }: any) => {
		const token = locals.token;
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		const id = data.id;

		try {
			await axios.put(
				`${PUBLIC_ADMISSION_API_URL}/admin/pmb/periods/${id}`,
				{
					...data,
					is_active: data.is_active === 'on'
				},
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			return { success: true };
		} catch (error: any) {
			return fail(400, { message: error.response?.data?.message || 'Gagal memperbarui gelombang' });
		}
	},
	delete: async ({ request, locals }: any) => {
		const token = locals.token;
		const formData = await request.formData();
		const id = formData.get('id');

		try {
			await axios.delete(`${PUBLIC_ADMISSION_API_URL}/admin/pmb/periods/${id}`, {
				headers: { Authorization: `Bearer ${token}` }
			});
			return { success: true };
		} catch (error: any) {
			return fail(400, { message: error.response?.data?.message || 'Gagal menghapus gelombang' });
		}
	}
};

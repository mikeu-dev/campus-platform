import axios from 'axios';
import { fail } from '@sveltejs/kit';
import { PUBLIC_ADMISSION_API_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }: any) => {
	try {
		const res = await axios.get(`${PUBLIC_ADMISSION_API_URL}/admin/pmb/prodis`, {
			headers: { Authorization: `Bearer ${locals.token}` }
		});
		return { prodis: res.data.data };
	} catch (error: any) {
		console.error('Fetch prodis error:', error.response?.data || error.message);
		return { prodis: [] };
	}
};

/** @type {import('./$types').Actions} */
export const actions = {
	create: async ({ request, locals }: any) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const faculty = formData.get('faculty');

		try {
			await axios.post(
				`${PUBLIC_ADMISSION_API_URL}/admin/pmb/prodis`,
				{ name, faculty, is_active: true },
				{ headers: { Authorization: `Bearer ${locals.token}` } }
			);
			return { success: true };
		} catch (error: any) {
			return fail(400, { message: error.response?.data?.message || 'Gagal menambah prodi' });
		}
	},
	update: async ({ request, locals }: any) => {
		const formData = await request.formData();
		const id = formData.get('id');
		const name = formData.get('name');
		const faculty = formData.get('faculty');
		const is_active = formData.get('is_active') === 'on';

		try {
			await axios.put(
				`${PUBLIC_ADMISSION_API_URL}/admin/pmb/prodis/${id}`,
				{ name, faculty, is_active },
				{ headers: { Authorization: `Bearer ${locals.token}` } }
			);
			return { success: true };
		} catch (error: any) {
			return fail(400, { message: error.response?.data?.message || 'Gagal mengubah prodi' });
		}
	},
	delete: async ({ request, locals }: any) => {
		const formData = await request.formData();
		const id = formData.get('id');

		try {
			await axios.delete(`${PUBLIC_ADMISSION_API_URL}/admin/pmb/prodis/${id}`, {
				headers: { Authorization: `Bearer ${locals.token}` }
			});
			return { success: true };
		} catch (error: any) {
			return fail(400, { message: error.response?.data?.message || 'Gagal menghapus prodi' });
		}
	}
};

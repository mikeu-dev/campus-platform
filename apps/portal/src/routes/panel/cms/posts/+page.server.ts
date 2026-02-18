import axios from 'axios';
import { fail } from '@sveltejs/kit';
import { PUBLIC_PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }: any) => {
	const token = locals.token;
	let posts = [];

	try {
		const res = await axios.get(`${PUBLIC_PUBLIC_API_URL}/admin/posts`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		posts = res.data.data;
	} catch (error: any) {
		console.error('Posts load error:', error.response?.data || error.message);
	}

	return {
		posts
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
				`${PUBLIC_PUBLIC_API_URL}/admin/posts`,
				{
					...data,
					is_pinned: data.is_pinned === 'on',
					is_published: data.is_published === 'on'
				},
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			return { success: true };
		} catch (error: any) {
			return fail(400, { message: error.response?.data?.message || 'Gagal membuat postingan' });
		}
	},
	update: async ({ request, locals }: any) => {
		const token = locals.token;
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		const id = data.id;

		try {
			await axios.put(
				`${PUBLIC_PUBLIC_API_URL}/admin/posts/${id}`,
				{
					...data,
					is_pinned: data.is_pinned === 'on',
					is_published: data.is_published === 'on'
				},
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			return { success: true };
		} catch (error: any) {
			return fail(400, { message: error.response?.data?.message || 'Gagal memperbarui postingan' });
		}
	},
	delete: async ({ request, locals }: any) => {
		const token = locals.token;
		const formData = await request.formData();
		const id = formData.get('id');

		try {
			await axios.delete(`${PUBLIC_PUBLIC_API_URL}/admin/posts/${id}`, {
				headers: { Authorization: `Bearer ${token}` }
			});
			return { success: true };
		} catch (error: any) {
			return fail(400, { message: error.response?.data?.message || 'Gagal menghapus postingan' });
		}
	}
};

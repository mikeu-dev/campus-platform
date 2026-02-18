import axios from 'axios';
import { fail } from '@sveltejs/kit';
import { PUBLIC_PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }: any) => {
	const token = locals.token;
	let videos = [];

	try {
		const res = await axios.get(`${PUBLIC_PUBLIC_API_URL}/admin/public/videos`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		videos = res.data.data;
	} catch (error: any) {
		console.error('Videos load error:', error.response?.data || error.message);
	}

	return {
		videos
	};
};

const getYoutubeId = (url: string) => {
	const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
	const match = url.match(regExp);
	return match && match[2].length === 11 ? match[2] : null;
};

/** @type {import('./$types').Actions} */
export const actions = {
	create: async ({ request, locals }: any) => {
		const token = locals.token;
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		const url = data.url as string;
		const youtube_id = getYoutubeId(url);

		if (!youtube_id) {
			return fail(400, { message: 'URL YouTube tidak valid' });
		}

		try {
			await axios.post(
				`${PUBLIC_PUBLIC_API_URL}/admin/public/videos`,
				{
					...data,
					youtube_id,
					is_active: data.is_active === 'on'
				},
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			return { success: true };
		} catch (error: any) {
			return fail(400, { message: error.response?.data?.message || 'Gagal menambahkan video' });
		}
	},
	update: async ({ request, locals }: any) => {
		const token = locals.token;
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		const id = data.id;
		const url = data.url as string;
		const youtube_id = getYoutubeId(url);

		if (!youtube_id) {
			return fail(400, { message: 'URL YouTube tidak valid' });
		}

		try {
			await axios.put(
				`${PUBLIC_PUBLIC_API_URL}/admin/public/videos/${id}`,
				{
					...data,
					youtube_id,
					is_active: data.is_active === 'on'
				},
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			return { success: true };
		} catch (error: any) {
			return fail(400, { message: error.response?.data?.message || 'Gagal memperbarui video' });
		}
	},
	delete: async ({ request, locals }: any) => {
		const token = locals.token;
		const formData = await request.formData();
		const id = formData.get('id');

		try {
			await axios.delete(`${PUBLIC_PUBLIC_API_URL}/admin/public/videos/${id}`, {
				headers: { Authorization: `Bearer ${token}` }
			});
			return { success: true };
		} catch (error: any) {
			return fail(400, { message: error.response?.data?.message || 'Gagal menghapus video' });
		}
	}
};

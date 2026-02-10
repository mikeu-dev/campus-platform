import axios from 'axios';
import { fail } from '@sveltejs/kit';
import { PUBLIC_ADMISSION_API_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params, locals }: any) => {
	const token = locals.token;
	const { id } = params;

	let applicant = null;

	try {
		const res = await axios.get(`${PUBLIC_ADMISSION_API_URL}/admin/pmb/applicants/${id}`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		applicant = res.data.data;
	} catch (error: any) {
		console.error('Applicant detail load error:', error.response?.data || error.message);
	}

	return {
		applicant
	};
};

/** @type {import('./$types').Actions} */
export const actions = {
	updateStatus: async ({ request, params, locals }: any) => {
		const token = locals.token;
		const { id } = params;
		const formData = await request.formData();
		const status = formData.get('status');
		const score = formData.get('selection_score');

		try {
			await axios.put(
				`${PUBLIC_ADMISSION_API_URL}/admin/pmb/applicants/${id}/status`,
				{ status, selection_score: score ? parseFloat(score) : null },
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			return { success: true };
		} catch (error: any) {
			return fail(400, {
				message: error.response?.data?.message || 'Gagal memperbarui status pendaftar'
			});
		}
	},
	verifyDocument: async ({ request, locals }: any) => {
		const token = locals.token;
		const formData = await request.formData();
		const docId = formData.get('docId');
		const status = formData.get('status');
		const notes = formData.get('notes');

		try {
			await axios.put(
				`${PUBLIC_ADMISSION_API_URL}/admin/pmb/documents/${docId}/status`,
				{ status, notes },
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			return { success: true };
		} catch (error: any) {
			return fail(400, { message: error.response?.data?.message || 'Gagal memverifikasi dokumen' });
		}
	}
};

import axios from 'axios';
import { fail } from '@sveltejs/kit';
import { PUBLIC_ADMISSION_API_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url }: any) => {
	const registrationNumber = url.searchParams.get('reg');
	const email = url.searchParams.get('email');

	let applicant = null;

	if (registrationNumber) {
		try {
			const res = await axios.get(`${PUBLIC_ADMISSION_API_URL}/public/pmb/status`, {
				params: { registration_number: registrationNumber, email }
			});
			applicant = res.data.data;
		} catch (_error: any) {
			console.error('Status check error:', _error.response?.data || _error.message);
		}
	}

	return {
		applicant,
		searchParams: { reg: registrationNumber, email }
	};
};

/** @type {import('./$types').Actions} */
export const actions = {
	uploadDocument: async ({ request }: any) => {
		const formData = await request.formData();
		const applicantId = formData.get('applicant_id');
		const documentType = formData.get('document_type');
		// In a real app, you would handle file upload to S3/Cloudinary and get a URL
		const fileUrl = 'https://placehold.co/600x400/png?text=Simulated+Document';

		try {
			await axios.post(`${PUBLIC_ADMISSION_API_URL}/public/pmb/upload`, {
				applicant_id: applicantId,
				document_type: documentType,
				file_url: fileUrl
			});
			return { success: true };
		} catch (_error: any) {
			return fail(400, { message: 'Gagal mengunggah dokumen.' });
		}
	}
};

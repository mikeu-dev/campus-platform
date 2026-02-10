import axios from 'axios';
import { fail, redirect } from '@sveltejs/kit';
import { PUBLIC_ADMISSION_API_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	// Standard tenant ID
	const tenantId = '00000000-0000-0000-0000-000000000000';
	let periods = [];
	let prodis = [];

	try {
		const periodsRes = await axios.get(
			`${PUBLIC_ADMISSION_API_URL}/public/pmb/${tenantId}/periods`
		);
		periods = periodsRes.data.data.filter((p: any) => p.is_active);

		const prodisRes = await axios.get(`${PUBLIC_ADMISSION_API_URL}/public/pmb/${tenantId}/prodis`);
		prodis = prodisRes.data.data;
	} catch (error: any) {
		console.error('Registration data load error:', error.response?.data || error.message);
	}

	return {
		periods,
		prodis
	};
};

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }: any) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);

		// Map form choices
		const registrationData = {
			tenant_id: '00000000-0000-0000-0000-000000000000',
			period_id: data.period_id,
			full_name: data.full_name,
			email: data.email,
			phone_number: data.phone_number,
			identity_number: data.identity_number,
			birth_place: data.birth_place,
			birth_date: data.birth_date,
			gender: data.gender,
			address: data.address,
			previous_school: data.previous_school,
			graduation_year: parseInt(data.graduation_year as string),
			first_choice_prodi_id: data.prodi1,
			second_choice_prodi_id: data.prodi2
		};

		try {
			const res = await axios.post(
				`${PUBLIC_ADMISSION_API_URL}/public/pmb/register`,
				registrationData
			);
			const applicant = res.data.data;

			// Redirect to success/status page with registration number
			throw redirect(303, `/pmb/status?reg=${applicant.registration_number}`);
		} catch (error: any) {
			if (error.status === 303) throw error;
			console.error('Registration error:', error.response?.data || error.message);
			return fail(400, {
				message: error.response?.data?.message || 'Gagal mengirim pendaftaran. Silakan coba lagi.'
			});
		}
	}
};

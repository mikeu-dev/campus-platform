import axios from 'axios';
import { PUBLIC_ADMISSION_API_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	// Standard tenant ID
	const tenantId = '00000000-0000-0000-0000-000000000000';
	let periods = [];
	let prodis = [];

	try {
		const periodsRes = await axios.get(
			`${PUBLIC_ADMISSION_API_URL}/${tenantId}/periods`
		);
		periods = periodsRes.data.data;

		const prodisRes = await axios.get(`${PUBLIC_ADMISSION_API_URL}/${tenantId}/prodis`);
		prodis = prodisRes.data.data;
	} catch (error: any) {
		console.error('Guest PMB load error:', error.response?.data || error.message);
	}

	return {
		periods,
		prodis
	};
};

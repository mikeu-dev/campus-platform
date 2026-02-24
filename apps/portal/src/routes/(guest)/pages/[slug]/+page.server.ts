import axios from 'axios';
import { PUBLIC_PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params }: any) => {
	const { slug } = params;
	const tenantId = 'f0015426-1288-4617-be83-3bf153058f89'; // Default Seed Tenant

	let pageData = null;

	try {
		const res = await axios.get(`${PUBLIC_PUBLIC_API_URL}/${tenantId}/pages/${slug}`);
		pageData = res.data.data;
	} catch (error: any) {
		console.error('Page load error:', error.response?.data || error.message);
	}

	return {
		pageData
	};
};

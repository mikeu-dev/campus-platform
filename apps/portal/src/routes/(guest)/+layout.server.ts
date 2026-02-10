import axios from 'axios';
import { PUBLIC_PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').LayoutServerLoad} */
export const load = async () => {
	const tenantId = '00000000-0000-0000-0000-000000000000';

	let settings: any = {};
	let pages: any[] = [];
	let links: any[] = [];

	try {
		const [settingsRes, pagesRes, linksRes] = await Promise.all([
			axios.get(`${PUBLIC_PUBLIC_API_URL}/public/${tenantId}/settings`),
			axios.get(`${PUBLIC_PUBLIC_API_URL}/public/${tenantId}/pages`),
			axios.get(`${PUBLIC_PUBLIC_API_URL}/public/${tenantId}/links`)
		]);

		settings = settingsRes.data.data;
		pages = pagesRes.data.data;
		links = linksRes.data.data;
	} catch (error: any) {
		console.error('Guest layout load error:', error.response?.data || error.message);
	}

	return {
		settings,
		pages,
		links
	};
};

import axios from 'axios';
import { PUBLIC_PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').LayoutServerLoad} */
export const load = async () => {
	const tenantId = 'f0015426-1288-4617-be83-3bf153058f89';

	let settings: any = {};
	let pages: any[] = [];
	let links: any[] = [];

	try {
		const base = PUBLIC_PUBLIC_API_URL;
		const [settingsRes, pagesRes, linksRes] = await Promise.all([
			axios.get(`${base}/public/${tenantId}/settings`),
			axios.get(`${base}/public/${tenantId}/pages`),
			axios.get(`${base}/public/${tenantId}/links`)
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

import { PUBLIC_PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({ fetch }) => {
	const tenantId = 'f0015426-1288-4617-be83-3bf153058f89';

	let settings: any = {};
	let pages: any[] = [];
	let links: any[] = [];

	try {
		const res = await fetch(`${PUBLIC_PUBLIC_API_URL}/${tenantId}/shared`);
		if (res.ok) {
			const { data } = await res.json();
			settings = data.settings || {};
			pages = data.pages || [];
			links = data.links || [];
		}
	} catch (error: any) {
		console.error('Guest layout load error:', error.message);
	}

	return {
		settings,
		pages,
		links
	};
};

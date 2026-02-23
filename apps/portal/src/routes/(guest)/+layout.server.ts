import { PUBLIC_PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({ fetch }) => {
	const tenantId = 'f0015426-1288-4617-be83-3bf153058f89';

	let settings: any = {};
	let pages: any[] = [];
	let links: any[] = [];

	const fetchWithTimeout = async (url: string, timeoutMs = 3000) => {
		const controller = new AbortController();
		const id = setTimeout(() => controller.abort(), timeoutMs);

		try {
			const response = await fetch(url, { signal: controller.signal });
			clearTimeout(id);
			return response;
		} catch (e) {
			clearTimeout(id);
			throw e;
		}
	};

	try {
		const base = PUBLIC_PUBLIC_API_URL;
		const [settingsRes, pagesRes, linksRes] = await Promise.allSettled([
			fetchWithTimeout(`${base}/${tenantId}/settings`),
			fetchWithTimeout(`${base}/${tenantId}/pages`),
			fetchWithTimeout(`${base}/${tenantId}/links`)
		]);

		if (settingsRes.status === 'fulfilled' && settingsRes.value.ok) {
			const res = await settingsRes.value.json();
			settings = res.data;
		}

		if (pagesRes.status === 'fulfilled' && pagesRes.value.ok) {
			const res = await pagesRes.value.json();
			pages = res.data;
		}

		if (linksRes.status === 'fulfilled' && linksRes.value.ok) {
			const res = await linksRes.value.json();
			links = res.data;
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

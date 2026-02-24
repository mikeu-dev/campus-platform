import axios from 'axios';
import { PUBLIC_PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params }: any) => {
	const { slug } = params;
	const tenantId = 'f0015426-1288-4617-be83-3bf153058f89';

	let post = null;

	try {
		const res = await axios.get(`${PUBLIC_PUBLIC_API_URL}/${tenantId}/posts/${slug}`);
		post = res.data.data;
	} catch (error: any) {
		console.error('Post detail load error:', error.response?.data || error.message);
	}

	return {
		post
	};
};

import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_PUBLIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async () => {
	// For now, we'll use a placeholder tenant ID.
	// In a real scenario, this would be determined by the domain or a default setting.
	const tenantId = 'f0015426-1288-4617-be83-3bf153058f89'; // Default Seed Tenant

	let sliders = [];
	let settings = {};
	let posts = [];
	let agendas = [];
	let videos = [];

	try {
		const res = await axios.get(`${PUBLIC_PUBLIC_API_URL}/${tenantId}/landing`);
		const bulkData = res.data.data;

		sliders = bulkData.sliders || [];
		settings = bulkData.settings || {};
		posts = bulkData.posts || [];
		agendas = bulkData.agendas || [];
		videos = bulkData.videos || [];
	} catch (error: any) {
		console.error('Landing page load error:', error.response?.data || error.message);
	}

	return {
		sliders,
		settings,
		posts,
		agendas,
		videos
	};
};

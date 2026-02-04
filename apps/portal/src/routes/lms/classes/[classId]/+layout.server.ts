import type { LayoutServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

// We fetch basic class info here so it's available for all tabs (Materials, Assignments, People)
export const load: LayoutServerLoad = async ({ locals, params }) => {
	const token = locals.token;
	const { classId } = params;
	let classInfo = null;

	try {
		// We need an endpoint to get single class details from Academic Service
		// Currently we only have /classes (list) and /enrollments/my
		// Ideally Academic Service should have GET /classes/:id
		// For MVP, if we don't have it, we might filter from list or just display ID?
		// Let's assume we might need to add GET /classes/:id to Academic Service or rely on what we have.
		// Checking Academic Service routes... it has GET /classes (list).
		// Let's add GET /classes/:id to Academic Service quickly or use list filtering (inefficient but works for MVP).
		// Actually best to add the endpoint. But sticking to "Portal Integration Tasks".
		// Let's try to filter from the full list for now to avoid switching context unless necessary.

		const res = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/classes`, {
			headers: { Authorization: `Bearer ${token}` }
		});

		// This is inefficient, but fits "Portal Integration" scope without touching Backend if possible.
		// Wait, /classes returns all classes for the tenant.
		classInfo = res.data.data.find((c: any) => c.id === classId);
	} catch {
		console.error('Fetch class info failed');
	}

	return {
		classInfo,
		classId
	};
};

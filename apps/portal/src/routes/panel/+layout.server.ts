import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (!locals.user) {
		throw redirect(302, '/auth/login');
	}

	// Enforce admin role for /panel routes
	if (!locals.user.roles || !locals.user.roles.includes('admin')) {
		throw redirect(302, '/siakad'); // Redirect non-admins to student dashboard
	}

	return {
		user: locals.user,
		token: locals.token
	};
};

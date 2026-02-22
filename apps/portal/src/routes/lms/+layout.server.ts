import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (!locals.user) {
		throw redirect(302, '/auth/siakad/login');
	}

	// Restrict LMS to students and lecturers. Redirect admins to panel.
	const roles = locals.user.roles || [];
	if (roles.includes('admin') && !roles.includes('student') && !roles.includes('lecturer')) {
		throw redirect(302, '/panel');
	}

	if (!roles.includes('student') && !roles.includes('lecturer')) {
		throw redirect(302, '/gate');
	}

	return {
		user: locals.user,
		token: locals.token
	};
};

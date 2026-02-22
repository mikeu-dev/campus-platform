import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, url }) => {
	if (!locals.user) {
		throw redirect(302, '/auth/siakad/login');
	}

	const roles = locals.user.roles || [];

	// 1. Redirect admins away from student/lecturer area to panel (pure admins)
	if (roles.includes('admin') && !roles.includes('student') && !roles.includes('lecturer')) {
		throw redirect(302, '/panel');
	}

	// 2. Protect Student-only modules
	const studentRoutes = [
		'/siakad/enrollment',
		'/siakad/grades',
		'/siakad/krs',
		'/siakad/finance',
		'/siakad/certificates',
		'/siakad/exam-card'
	];
	const isStudentRoute = studentRoutes.some((route) => url.pathname.startsWith(route));

	if (isStudentRoute && !roles.includes('student')) {
		throw redirect(302, '/siakad'); // Redirect lecturers or others trying to access student pages
	}

	// 3. Teaching area is already protected by siakad/teaching/+layout.server.ts,
	// but we could add a secondary check here for consistency if needed.

	return {
		user: locals.user,
		token: locals.token
	};
};

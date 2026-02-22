import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	const user = locals.user;

	if (!user || !user.roles.includes('lecturer')) {
		throw redirect(302, '/siakad');
	}

	return {
		user
	};
};

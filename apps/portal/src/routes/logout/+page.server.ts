import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ cookies, locals }) => {
		const isAdmin = locals.user?.roles?.includes('admin');
		cookies.delete('jwt', { path: '/' });

		if (isAdmin) {
			throw redirect(302, '/auth/login');
		} else {
			throw redirect(302, '/');
		}
	}
} satisfies Actions;

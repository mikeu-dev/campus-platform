import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import axios from 'axios';
import { PUBLIC_IDENTITY_API_URL } from '$env/static/public';

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		if (!email || !password) {
			return fail(400, { error: 'Email and password are required' });
		}

		try {
			const response = await axios.post(`${PUBLIC_IDENTITY_API_URL}/auth/login`, {
				email,
				password
			});

			const { token } = response.data.data;

			// Decode token to check roles (same as hooks.server.ts)
			const base64Url = token.split('.')[1];
			const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
			const jsonPayload = decodeURIComponent(
				atob(base64)
					.split('')
					.map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
					.join('')
			);
			const user = JSON.parse(jsonPayload);

			// Store cookie
			cookies.set('jwt', token, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24 // 1 day
			});

			// If not admin, redirect to gate instead of panel
			if (!user.roles?.includes('admin')) {
				throw redirect(302, '/gate');
			}

			throw redirect(302, '/panel');
		} catch (error: any) {
			if (error.status === 302) throw error; // Re-throw redirect

			const message = error.response?.data?.message || 'Login failed';
			return fail(400, { error: message });
		}
	}
} satisfies Actions;

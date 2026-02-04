import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const token = event.cookies.get('jwt');

	if (token) {
		// In a real app, verify the token signature here or use an introspection endpoint.
		// For MVP, we trust the cookie existence but decode it to get user info.
		// Since we don't share JWT_SECRET with frontend, we just store it and pass it to API calls.
		// But for UI, we might need to decode it.
		// Let's assume we decode it purely for UI checking, but the Services will actually verify it.

		// Simple base64 decode for sub/role (NOT SECURE for auth, but okay for UI hints)
		try {
			const base64Url = token.split('.')[1];
			const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
			const jsonPayload = decodeURIComponent(
				atob(base64)
					.split('')
					.map(function (c) {
						return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
					})
					.join('')
			);

			const user = JSON.parse(jsonPayload);
			event.locals.user = user;
			event.locals.token = token;
		} catch {
			console.error('Invalid token format in cookie');
			event.cookies.delete('jwt', { path: '/' });
		}
	}

	const response = await resolve(event);
	return response;
};

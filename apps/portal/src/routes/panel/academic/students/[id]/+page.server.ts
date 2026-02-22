import { fail, redirect } from '@sveltejs/kit';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

export const load = async ({ locals, params, depends }) => {
	depends('app:student-profile');
	const token = locals.token;
	const studentId = params.id;

	try {
		const response = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/students/${studentId}/profile`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		return {
			profile: response.data.data
		};
	} catch (e: any) {
		if (e.response?.status === 401) {
			throw redirect(302, '/auth/login');
		}
		console.error('Failed to load student profile:', e.response?.data || e.message);
		return {
			profile: null,
			error: 'Failed to load profile'
		};
	}
};

export const actions = {
	uploadPhoto: async ({ request, locals, params }) => {
		const token = locals.token;
		const studentId = params.id;
		const formData = await request.formData();
		const photo = formData.get('photo') as File;

		if (!photo || photo.size === 0) {
			return fail(400, { missing: true });
		}

		try {
			// Save file to static/uploads
			const arrayBuffer = await photo.arrayBuffer();
			const buffer = Buffer.from(arrayBuffer);
			const fileName = `${Date.now()}-${photo.name.replace(/[^a-zA-Z0-9.]/g, '')}`;
			const uploadDir = 'static/uploads';
			const filePath = join(process.cwd(), uploadDir, fileName);

			await writeFile(filePath, buffer);

			const photoUrl = `/uploads/${fileName}`;

			// Update profile with photo_url
			await axios.put(
				`${PUBLIC_ACADEMIC_API_URL}/students/${studentId}/profile`,
				{ photo_url: photoUrl },
				{ headers: { Authorization: `Bearer ${token}` } }
			);

			return { success: true };
		} catch (err: any) {
			console.error('Upload error:', err);
			return fail(500, { message: 'Upload failed' });
		}
	},
	update: async ({ request, locals, params }) => {
		const token = locals.token;
		const studentId = params.id;
		const formData = await request.formData();
		const rawData = Object.fromEntries(formData);

		// Clean up empty strings to null/undefined
		const data: Record<string, any> = {};
		for (const [key, value] of Object.entries(rawData)) {
			if (value === '') {
				data[key] = null;
			} else {
				data[key] = value;
			}
		}

		try {
			await axios.put(`${PUBLIC_ACADEMIC_API_URL}/students/${studentId}/profile`, data, {
				headers: { Authorization: `Bearer ${token}` }
			});
			return { success: true };
		} catch (error: any) {
			console.error('Failed to update student profile:', error.response?.data || error.message);
			return fail(500, {
				error: 'Failed to update profile',
				details: error.response?.data?.message || error.message
			});
		}
	}
};

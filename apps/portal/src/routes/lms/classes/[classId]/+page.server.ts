import type { Actions } from './$types';
import axios from 'axios';
import { PUBLIC_LEARNING_API_URL } from '$env/static/public';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
	postComment: async ({ request, locals, params }) => {
		const token = locals.token;
		const { classId } = params;
		const formData = await request.formData();
		const content = formData.get('content');

		if (!content || String(content).trim().length === 0) {
			return fail(400, { message: 'Content is required' });
		}

		try {
			await axios.post(
				`${PUBLIC_LEARNING_API_URL}/classes/${classId}/discussions`,
				{ content },
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			return { success: true };
		} catch (error: any) {
			console.error('Post comment failed', error.response?.data || error.message);
			return fail(500, { message: 'Failed to post comment' });
		}
	},

	uploadAssignment: async ({ request, locals, params }) => {
		// Placeholder for assignment upload
		// In a real scenario, this would handle Multipart form data and MinIO upload
		return { success: true, message: 'Assignment submitted successfully' };
	},

	// Lecturer-only actions
	addMaterial: async ({ request, locals, params }) => {
		const user = locals.user;
		if (!user?.roles?.includes('lecturer') && !user?.roles?.includes('admin')) {
			return fail(403, { message: 'Unauthorized' });
		}

		const formData = await request.formData();
		const title = formData.get('title') as string;
		const content = formData.get('content') as string;
		const type = (formData.get('type') as string) || 'text';
		const meeting_number = parseInt(formData.get('meeting_number') as string) || 1;

		try {
			await axios.post(
				`${PUBLIC_LEARNING_API_URL}/classes/${params.classId}/materials`,
				{ title, content, type, meeting_number },
				{ headers: { Authorization: `Bearer ${locals.token}` } }
			);
			return { success: true, action: 'addMaterial' };
		} catch (error: any) {
			return fail(400, { message: error.response?.data?.message || 'Gagal menambah materi' });
		}
	},

	addAssignment: async ({ request, locals, params }) => {
		const user = locals.user;
		if (!user?.roles?.includes('lecturer') && !user?.roles?.includes('admin')) {
			return fail(403, { message: 'Unauthorized' });
		}

		const formData = await request.formData();
		const title = formData.get('title') as string;
		const description = formData.get('description') as string;
		const deadline = formData.get('deadline') as string;
		const meeting_number = parseInt(formData.get('meeting_number') as string) || 1;

		try {
			await axios.post(
				`${PUBLIC_LEARNING_API_URL}/classes/${params.classId}/assignments`,
				{ title, description, deadline, meeting_number },
				{ headers: { Authorization: `Bearer ${locals.token}` } }
			);
			return { success: true, action: 'addAssignment' };
		} catch (error: any) {
			return fail(400, { message: error.response?.data?.message || 'Gagal menambah tugas' });
		}
	}
};

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
    }
};

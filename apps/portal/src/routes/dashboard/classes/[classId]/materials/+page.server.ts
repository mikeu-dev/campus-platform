import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import axios from 'axios';
import { PUBLIC_LEARNING_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals, params }) => {
    const token = locals.token;
    const { classId } = params;
    let materials = [];

    try {
        const res = await axios.get(`${PUBLIC_LEARNING_API_URL}/classes/${classId}/materials`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        materials = res.data.data;
    } catch (error: any) {
        console.error("Fetch materials failed", error.message);
    }

    return { materials };
};

export const actions = {
    create: async ({ request, locals, params }) => {
        const data = await request.formData();
        const title = data.get('title');
        let content = data.get('content')?.toString() || '';
        let type = data.get('type')?.toString() || 'text';
        const file = data.get('file');
        const { classId } = params;
        const token = locals.token;

        // Handle File Upload
        if (file instanceof File && file.size > 0) {
            try {
                const uploadData = new FormData();
                uploadData.append('file', file);
                uploadData.append('bucket', 'materials');

                const uploadRes = await fetch(`${PUBLIC_LEARNING_API_URL}/upload`, {
                    method: 'POST',
                    headers: { 'Authorization': `Bearer ${token}` }, // fetch handles Content-Type for FormData
                    body: uploadData
                });

                if (!uploadRes.ok) throw new Error('File upload failed');
                const uploadJson = await uploadRes.json();
                content = uploadJson.data.url;
                if (type === 'text') type = 'file'; // Default to file if not specified
            } catch (e) {
                console.error(e);
                return fail(500, { error: 'File upload failed' });
            }
        }

        if (!title) return fail(400, { error: 'Title is required' });

        try {
            await axios.post(`${PUBLIC_LEARNING_API_URL}/classes/${classId}/materials`, {
                title, content, type
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return { success: true };
        } catch (error: any) {
            const message = error.response?.data?.message || 'Failed to create material';
            return fail(400, { error: message });
        }
    }
} satisfies Actions;

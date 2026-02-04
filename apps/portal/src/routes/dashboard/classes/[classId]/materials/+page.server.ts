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
        const content = data.get('content');
        const type = data.get('type') || 'text';
        const { classId } = params;
        const token = locals.token;

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

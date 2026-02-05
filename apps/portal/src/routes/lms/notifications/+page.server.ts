import type { PageServerLoad, Actions } from './$types';
import axios from 'axios';
import { PUBLIC_LEARNING_API_URL } from '$env/static/public';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
    const token = locals.token;
    let notifications = [];

    try {
        const res = await axios.get(`${PUBLIC_LEARNING_API_URL}/notifications`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        notifications = res.data.data || [];
    } catch (error: any) {
        console.error('Notifications load error:', error.response?.data || error.message);
    }

    return { notifications };
};

export const actions: Actions = {
    markRead: async ({ request, locals }) => {
        const token = locals.token;
        const data = await request.formData();
        const notificationId = data.get('notificationId');

        try {
            await axios.patch(`${PUBLIC_LEARNING_API_URL}/notifications/${notificationId}/read`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return { success: true };
        } catch (error: any) {
            return fail(500, { message: 'Failed to mark as read' });
        }
    }
};

import type { PageServerLoad, Actions } from './$types';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
    const token = locals.token;
    let profile = null;

    try {
        const res = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/students/me/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        profile = res.data.data;
    } catch (error: any) {
        console.error('Failed to load profile:', error.response?.data || error.message);
    }

    return {
        profile
    };
};

export const actions: Actions = {
    update: async ({ request, locals }) => {
        const token = locals.token;
        const formData = await request.formData();
        const rawData = Object.fromEntries(formData);

        // Clean up empty strings to null/undefined
        const data: Record<string, any> = {};
        for (const [key, value] of Object.entries(rawData)) {
            if (value === "") {
                data[key] = null;
            } else {
                data[key] = value;
            }
        }

        try {
            await axios.put(`${PUBLIC_ACADEMIC_API_URL}/students/me/profile`, data, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return { success: true };
        } catch (error: any) {
            console.error('Failed to update profile:', error.response?.data || error.message);
            return fail(500, {
                error: 'Failed to update profile',
                details: error.response?.data?.message || error.message
            });
        }
    }
};

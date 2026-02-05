import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals }) => {
    const token = locals.token;

    try {
        const res = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/schedules/my`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        return {
            schedules: res.data.data
        };
    } catch (error) {
        console.error('Error loading schedules:', error);
        return {
            schedules: []
        };
    }
};

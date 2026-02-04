import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_LEARNING_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals, params }) => {
    const token = locals.token;
    const { classId } = params;
    let assignments = [];

    try {
        const res = await axios.get(`${PUBLIC_LEARNING_API_URL}/classes/${classId}/assignments`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        assignments = res.data.data;
    } catch (error: any) {
        console.error("Fetch assignments failed", error.message);
    }

    return { assignments, classId };
};

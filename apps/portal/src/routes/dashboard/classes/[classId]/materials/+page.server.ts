import type { PageServerLoad } from './$types';
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

import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals, parent }) => {
    // wait for parent layout data
    await parent();

    const token = locals.token;
    let studentProfile = null;

    if (token) {
        try {
            const res = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/students/me`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            studentProfile = res.data.data;
        } catch (error: any) {
            console.error("Failed to fetch student profile", error.response?.data || error.message);
            // Don't fail the whole page, just show partial data
        }
    }

    return {
        studentProfile
    };
};

import axios from 'axios';
import { PUBLIC_PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }: any) => {
    const token = locals.token;
    let stats = { byRoute: [], daily: [] };

    try {
        const res = await axios.get(`${PUBLIC_PUBLIC_API_URL}/admin/stats`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        stats = res.data.data;
    } catch (error: any) {
        console.error('CMS stats load error:', error.response?.data || error.message);
    }

    return {
        stats
    };
};

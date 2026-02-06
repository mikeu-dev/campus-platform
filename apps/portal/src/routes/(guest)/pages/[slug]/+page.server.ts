import axios from 'axios';
import { PUBLIC_PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params }: any) => {
    const { slug } = params;
    const tenantId = '00000000-0000-0000-0000-000000000000';

    let pageData = null;

    try {
        const res = await axios.get(`${PUBLIC_PUBLIC_API_URL}/public/${tenantId}/pages/${slug}`);
        pageData = res.data.data;
    } catch (error: any) {
        console.error('Page load error:', error.response?.data || error.message);
    }

    return {
        pageData
    };
};

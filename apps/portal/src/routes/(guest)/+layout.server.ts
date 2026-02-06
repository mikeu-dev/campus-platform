import axios from 'axios';
import { PUBLIC_PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').LayoutServerLoad} */
export const load = async () => {
    const tenantId = '00000000-0000-0000-0000-000000000000';

    let settings: any = {};
    let pages: any[] = [];

    try {
        const [settingsRes, pagesRes] = await Promise.all([
            axios.get(`${PUBLIC_PUBLIC_API_URL}/public/${tenantId}/settings`),
            axios.get(`${PUBLIC_PUBLIC_API_URL}/public/${tenantId}/pages`)
        ]);

        settings = settingsRes.data.data;
        pages = pagesRes.data.data;
    } catch (error: any) {
        console.error('Guest layout load error:', error.response?.data || error.message);
    }

    return {
        settings,
        pages
    };
};

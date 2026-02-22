import axios from 'axios';
import { PUBLIC_PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
    const tenantId = 'f0015426-1288-4617-be83-3bf153058f89';

    let agendas: any[] = [];

    try {
        const res = await axios.get(`${PUBLIC_PUBLIC_API_URL}/public/${tenantId}/agendas`);
        agendas = res.data.data || [];
    } catch (error: any) {
        console.error('Agendas load error:', error.response?.data || error.message);
    }

    return {
        agendas
    };
};

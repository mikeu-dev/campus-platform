import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_PUBLIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async () => {
    // For now, we'll use a placeholder tenant ID. 
    // In a real scenario, this would be determined by the domain or a default setting.
    const tenantId = '00000000-0000-0000-0000-000000000000'; // Placeholder

    let sliders = [];
    let settings = {};
    let posts = [];
    let agendas = [];
    let videos = [];

    try {
        const [slidersRes, settingsRes, postsRes, agendasRes, videosRes] = await Promise.all([
            axios.get(`${PUBLIC_PUBLIC_API_URL}/public/${tenantId}/sliders`),
            axios.get(`${PUBLIC_PUBLIC_API_URL}/public/${tenantId}/settings`),
            axios.get(`${PUBLIC_PUBLIC_API_URL}/public/${tenantId}/posts?pinned=true&limit=4`),
            axios.get(`${PUBLIC_PUBLIC_API_URL}/public/${tenantId}/agendas?pinned=true&limit=4`),
            axios.get(`${PUBLIC_PUBLIC_API_URL}/public/${tenantId}/videos?limit=2`)
        ]);

        sliders = slidersRes.data.data;
        settings = settingsRes.data.data;
        posts = postsRes.data.data;
        agendas = agendasRes.data.data;
        videos = videosRes.data.data;
    } catch (error: any) {
        console.error('Landing page load error:', error.response?.data || error.message);
    }

    return {
        sliders,
        settings,
        posts,
        agendas,
        videos
    };
};

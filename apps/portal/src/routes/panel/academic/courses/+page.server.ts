import axios from 'axios';
import { fail } from '@sveltejs/kit';
import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals, url }: any) => {
    const page = url.searchParams.get('page') || '1';
    const search = url.searchParams.get('search') || '';

    try {
        const res = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/courses`, {
            params: { page, limit: 10, search },
            headers: { Authorization: `Bearer ${locals.token}` }
        });
        return {
            courses: res.data.data,
            meta: res.data.meta
        };
    } catch (error: any) {
        console.error('Fetch courses error:', error.response?.data || error.message);
        return { courses: [], meta: { totalPages: 0, page: 1 } };
    }
};

/** @type {import('./$types').Actions} */
export const actions = {
    create: async ({ request, locals }: any) => {
        const formData = await request.formData();
        const code = formData.get('code');
        const name = formData.get('name');
        const credits = parseInt(formData.get('credits') as string);

        try {
            await axios.post(`${PUBLIC_ACADEMIC_API_URL}/courses`,
                { code, name, credits },
                { headers: { Authorization: `Bearer ${locals.token}` } }
            );
            return { success: true };
        } catch (error: any) {
            return fail(400, { message: error.response?.data?.message || 'Gagal menambah mata kuliah' });
        }
    }
};

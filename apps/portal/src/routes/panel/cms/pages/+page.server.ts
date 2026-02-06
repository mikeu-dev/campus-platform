import axios from 'axios';
import { fail } from '@sveltejs/kit';
import { PUBLIC_PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }: any) => {
    const token = locals.token;
    let pages = [];

    try {
        const res = await axios.get(`${PUBLIC_PUBLIC_API_URL}/admin/pages`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        pages = res.data.data;
    } catch (error: any) {
        console.error('Pages load error:', error.response?.data || error.message);
    }

    return {
        pages
    };
};

/** @type {import('./$types').Actions} */
export const actions = {
    create: async ({ request, locals }: any) => {
        const token = locals.token;
        const formData = await request.formData();
        const data = Object.fromEntries(formData);

        try {
            await axios.post(`${PUBLIC_PUBLIC_API_URL}/admin/pages`,
                {
                    ...data,
                    is_active: data.is_active === 'on'
                },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            return { success: true };
        } catch (error: any) {
            return fail(400, { message: error.response?.data?.message || 'Gagal membuat halaman' });
        }
    },
    update: async ({ request, locals }: any) => {
        const token = locals.token;
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        const id = data.id;

        try {
            await axios.put(`${PUBLIC_PUBLIC_API_URL}/admin/pages/${id}`,
                {
                    ...data,
                    is_active: data.is_active === 'on'
                },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            return { success: true };
        } catch (error: any) {
            return fail(400, { message: error.response?.data?.message || 'Gagal memperbarui halaman' });
        }
    },
    delete: async ({ request, locals }: any) => {
        const token = locals.token;
        const formData = await request.formData();
        const id = formData.get('id');

        try {
            await axios.delete(`${PUBLIC_PUBLIC_API_URL}/admin/pages/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return { success: true };
        } catch (error: any) {
            return fail(400, { message: error.response?.data?.message || 'Gagal menghapus halaman' });
        }
    }
};

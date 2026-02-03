import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals }) => {
    const token = locals.token;
    let classes = [];

    try {
        const res = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/classes`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        classes = res.data.data;
    } catch (error: any) {
        console.error("Fetch classes failed", error.message);
    }

    // Also fetch my enrollments to disable button? For now just fetch all classes.

    return { classes };
};

export const actions = {
    enroll: async ({ request, locals }) => {
        const data = await request.formData();
        const class_id = data.get('class_id');
        const token = locals.token;

        // We need student_id. The API requires it.
        // We can fetch profile first, or let API handle it if it inferred from token (API currently requires explicit student_id in body based on schema).
        // Let's fetch profile first to get ID.
        let student_id;
        try {
            const profileRes = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/students/me`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            student_id = profileRes.data.data.id;
        } catch (e) {
            return fail(500, { error: "Could not find student profile" });
        }

        try {
            await axios.post(`${PUBLIC_ACADEMIC_API_URL}/enrollments`, {
                class_id,
                student_id
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return { success: true };
        } catch (error: any) {
            const message = error.response?.data?.message || 'Enrollment failed';
            return fail(400, { error: message });
        }
    }
} satisfies Actions;

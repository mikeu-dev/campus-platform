import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals }) => {
    const token = locals.token;

    try {
        const [profileRes, examsRes] = await Promise.all([
            axios.get(`${PUBLIC_ACADEMIC_API_URL}/students/me`, {
                headers: { Authorization: `Bearer ${token}` }
            }),
            axios.get(`${PUBLIC_ACADEMIC_API_URL}/exams/my`, {
                headers: { Authorization: `Bearer ${token}` }
            })
        ]);

        return {
            profile: profileRes.data.data,
            exams: examsRes.data.data
        };
    } catch (error) {
        console.error('Error loading permission data:', error);
        return {
            profile: null,
            exams: []
        };
    }
};

import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_LEARNING_API_URL, PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals }) => {
    const token = locals.token;
    let studentProfile = null;
    let grades: any[] = [];
    let stats = null;

    try {
        // Get student profile
        const profileRes = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/students/me`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        studentProfile = profileRes.data.data;

        if (studentProfile?.id) {
            // Get grades
            const gradesRes = await axios.get(
                `${PUBLIC_LEARNING_API_URL}/students/${studentProfile.id}/grades`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            grades = gradesRes.data.data || [];

            // Get stats
            const statsRes = await axios.get(
                `${PUBLIC_LEARNING_API_URL}/students/${studentProfile.id}/stats`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            stats = statsRes.data.data;
        }
    } catch (error: any) {
        console.error('Grades page error', error.response?.data || error.message);
    }

    return { studentProfile, grades, stats };
};

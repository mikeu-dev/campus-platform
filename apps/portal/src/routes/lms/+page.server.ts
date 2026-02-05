import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL, PUBLIC_LEARNING_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals }) => {
    const token = locals.token;
    const user = locals.user;

    try {
        const [announcementsRes, activityRes] = await Promise.all([
            axios.get(`${PUBLIC_ACADEMIC_API_URL}/announcements`, {
                headers: { Authorization: `Bearer ${token}` }
            }),
            axios.get(`${PUBLIC_ACADEMIC_API_URL}/students/me`, {
                headers: { Authorization: `Bearer ${token}` }
            }).then(async (profileRes) => {
                const studentId = profileRes.data.data.id;
                return Promise.all([
                    axios.get(`${PUBLIC_LEARNING_API_URL}/students/${studentId}/deadlines`, {
                        headers: { Authorization: `Bearer ${token}` }
                    }),
                    axios.get(`${PUBLIC_LEARNING_API_URL}/students/${studentId}/stats`, {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                ]);
            }).catch(() => [null, null])
        ]);

        const [deadlinesRes, statsRes] = activityRes as any[];

        return {
            announcements: announcementsRes.data.data,
            deadlines: deadlinesRes?.data?.data || [],
            stats: statsRes?.data?.data || {},
            user
        };
    } catch (error) {
        console.error('Error loading LMS Home data:', error);
        return {
            announcements: [],
            deadlines: [],
            stats: {},
            user
        };
    }
};

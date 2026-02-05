import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals }) => {
    const token = locals.token;
    let rawSchedules = [];

    try {
        const res = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/schedules/my`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        rawSchedules = res.data.data || [];
    } catch (error: any) {
        console.error('Schedule load error:', error.response?.data || error.message);
    }

    // Group by day
    const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
    const dayMap: Record<string, string> = {
        'Monday': 'Senin',
        'Tuesday': 'Selasa',
        'Wednesday': 'Rabu',
        'Thursday': 'Kamis',
        'Friday': 'Jumat',
        'Saturday': 'Sabtu',
        'Sunday': 'Minggu'
    };

    const schedule = days.map(dayName => {
        return {
            day: dayName,
            classes: rawSchedules
                .filter((s: any) => (dayMap[s.day] || s.day) === dayName)
                .map((s: any) => ({
                    time: `${s.start_time.substring(0, 5)} - ${s.end_time.substring(0, 5)}`,
                    course: s.course_name,
                    code: s.course_code,
                    room: s.room || '-',
                    lecturer: s.lecturer_name || '-',
                    type: 'Kuliah'
                }))
        };
    });

    return { schedule };
};

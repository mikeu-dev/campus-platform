import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals }) => {
    const token = locals.token;
    let student = null;
    let exams = [];

    try {
        const profileRes = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/students/me`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        student = profileRes.data.data;

        const examsRes = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/exams/my`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        exams = examsRes.data.data || [];
    } catch (error: any) {
        console.error('Exam Card load error:', error.response?.data || error.message);
    }

    return {
        examCard: {
            student: student ? {
                name: student.name,
                nim: student.platform_student_number || '-',
                program: student.program || '-',
                semester: student.semester || '-'
            } : null,
            exams: exams.map((ex: any, i: number) => ({
                id: ex.id,
                code: ex.course_code,
                name: ex.course_name,
                date: ex.date,
                time: `${ex.start_time.substring(0, 5)} - ${ex.end_time.substring(0, 5)}`,
                room: ex.room || '-'
            }))
        }
    };
};

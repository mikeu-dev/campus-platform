import axios from 'axios';
import { fail } from '@sveltejs/kit';
import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }: any) => {
	try {
		const [classesRes, enrollmentsRes, studentRes] = await Promise.all([
			axios.get(`${PUBLIC_ACADEMIC_API_URL}/classes`, {
				params: { limit: 100 },
				headers: { Authorization: `Bearer ${locals.token}` }
			}),
			axios.get(`${PUBLIC_ACADEMIC_API_URL}/enrollments/my`, {
				headers: { Authorization: `Bearer ${locals.token}` }
			}),
			axios.get(`${PUBLIC_ACADEMIC_API_URL}/students/me`, {
				headers: { Authorization: `Bearer ${locals.token}` }
			})
		]);

		return {
			availableClasses: classesRes.data.data,
			myEnrollments: enrollmentsRes.data.data,
			student: studentRes.data.data
		};
	} catch (error: any) {
		console.error('Fetch KRS data error:', error.response?.data || error.message);
		return { availableClasses: [], myEnrollments: [], student: null };
	}
};

/** @type {import('./$types').Actions} */
export const actions = {
	enroll: async ({ request, locals }: any) => {
		const formData = await request.formData();
		const class_id = formData.get('class_id');
		const student_id = formData.get('student_id');

		try {
			await axios.post(
				`${PUBLIC_ACADEMIC_API_URL}/enrollments`,
				{ class_id, student_id },
				{ headers: { Authorization: `Bearer ${locals.token}` } }
			);
			return { success: true };
		} catch (error: any) {
			return fail(400, { message: error.response?.data?.message || 'Gagal mengambil mata kuliah' });
		}
	}
};

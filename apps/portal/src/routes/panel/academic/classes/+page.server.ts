import axios from 'axios';
import { fail } from '@sveltejs/kit';
import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals, url }: any) => {
	const pageNum = url.searchParams.get('page') || '1';
	const search = url.searchParams.get('search') || '';

	try {
		const [classesRes, coursesRes, lecturersRes] = await Promise.all([
			axios.get(`${PUBLIC_ACADEMIC_API_URL}/classes`, {
				params: { page: pageNum, limit: 10, search },
				headers: { Authorization: `Bearer ${locals.token}` }
			}),
			axios.get(`${PUBLIC_ACADEMIC_API_URL}/courses`, {
				params: { limit: 100 },
				headers: { Authorization: `Bearer ${locals.token}` }
			}),
			axios.get(`${PUBLIC_ACADEMIC_API_URL}/lecturers`, {
				headers: { Authorization: `Bearer ${locals.token}` }
			})
		]);

		return {
			classes: classesRes.data.data,
			meta: classesRes.data.meta,
			courses: coursesRes.data.data,
			lecturers: lecturersRes.data.data
		};
	} catch (error: any) {
		console.error('Fetch classes data error:', error.response?.data || error.message);
		return { classes: [], meta: { page: 1, totalPages: 0 }, courses: [], lecturers: [] };
	}
};

/** @type {import('./$types').Actions} */
export const actions = {
	create: async ({ request, locals }: any) => {
		const formData = await request.formData();
		const course_id = formData.get('course_id');
		const lecturer_id = formData.get('lecturer_id');
		const semester = formData.get('semester');
		const year = parseInt(formData.get('year') as string);
		const capacity = parseInt(formData.get('capacity') as string);

		try {
			await axios.post(
				`${PUBLIC_ACADEMIC_API_URL}/classes`,
				{ course_id, lecturer_id: lecturer_id || null, semester, year, capacity },
				{ headers: { Authorization: `Bearer ${locals.token}` } }
			);
			return { success: true };
		} catch (error: any) {
			return fail(400, { message: error.response?.data?.message || 'Gagal menambah kelas' });
		}
	}
};

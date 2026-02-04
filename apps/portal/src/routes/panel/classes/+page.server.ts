import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals, url }) => {
	const token = locals.token;
	if (!locals.user?.roles.includes('admin')) {
		return { courses: [], lecturers: [], classes: [], meta: { page: 1, limit: 10, total: 0, totalPages: 1 }, isAdmin: false };
	}

	const page = Number(url.searchParams.get('page')) || 1;
	const limit = Number(url.searchParams.get('limit')) || 10;
	const search = url.searchParams.get('search') || '';

	let courses = [];
	let lecturers = [];
	let classes = [];
	let meta = { page, limit, total: 0, totalPages: 1 };

	try {
		const [coursesRes, lecturersRes, classesRes] = await Promise.all([
			axios.get(`${PUBLIC_ACADEMIC_API_URL}/courses`, {
				headers: { Authorization: `Bearer ${token}` },
				params: { limit: 1000 } // Fetch all courses for dropdown
			}),
			axios.get(`${PUBLIC_ACADEMIC_API_URL}/lecturers`, {
				headers: { Authorization: `Bearer ${token}` }
			}),
			axios.get(`${PUBLIC_ACADEMIC_API_URL}/classes`, {
				headers: { Authorization: `Bearer ${token}` },
				params: { page, limit, search }
			})
		]);

		courses = coursesRes.data.data;
		lecturers = lecturersRes.data.data;
		classes = classesRes.data.data;
		if (classesRes.data.meta) meta = classesRes.data.meta;
	} catch (error: any) {
		console.error('Fetch data failed', error.message);
	}

	return { courses, lecturers, classes, meta, isAdmin: true };
};

export const actions = {
	create: async ({ request, locals }) => {
		const data = await request.formData();
		const course_id = data.get('course_id');
		const lecturer_id = data.get('lecturer_id');
		const semester = data.get('semester');
		const year = parseInt(data.get('year')?.toString() || '0');
		const token = locals.token;

		if (!course_id || !semester || year <= 0) {
			return fail(400, { error: 'Invalid fields' });
		}

		try {
			await axios.post(
				`${PUBLIC_ACADEMIC_API_URL}/classes`,
				{
					course_id,
					lecturer_id: lecturer_id || null,
					semester,
					year
				},
				{
					headers: { Authorization: `Bearer ${token}` }
				}
			);
			return { success: true };
		} catch (error: any) {
			const message = error.response?.data?.message || 'Failed to open class';
			return fail(400, { error: message });
		}
	}
} satisfies Actions;

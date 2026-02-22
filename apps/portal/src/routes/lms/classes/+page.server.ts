import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL, PUBLIC_LEARNING_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals }) => {
	const token = locals.token;
	const roles = locals.user?.roles || [];
	const isLecturer = roles.includes('lecturer');

	try {
		if (isLecturer) {
			// Lecturer: fetch their classes directly
			const [profileRes, classesRes] = await Promise.all([
				axios.get(`${PUBLIC_ACADEMIC_API_URL}/lecturers/me`, {
					headers: { Authorization: `Bearer ${token}` }
				}),
				axios.get(`${PUBLIC_ACADEMIC_API_URL}/classes`, {
					headers: { Authorization: `Bearer ${token}` }
				})
			]);

			const lecturerProfile = profileRes.data.data;
			let classes = classesRes.data.data || [];

			// Filter classes for this lecturer
			if (lecturerProfile?.id) {
				classes = classes.filter((c: any) => c.lecturer_id === lecturerProfile.id);
			}

			return {
				enrollments: classes.map((c: any) => ({
					class_id: c.id,
					course_code: c.course_code,
					course_name: c.course_name,
					lecturer_name: lecturerProfile?.name || 'N/A',
					day: c.day,
					start_time: c.start_time,
					end_time: c.end_time,
					room: c.room,
					credits: c.credits,
					semester: c.semester,
					year: c.year,
					status: 'active',
					enrolled_count: c.enrolled_count || 0,
					stats: null
				})),
				isLecturer: true
			};
		}

		// Student: fetch enrollments with rich data
		const res = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/enrollments/my`, {
			headers: { Authorization: `Bearer ${token}` }
		});

		const enrollments = res.data.data;

		// For each class, fetch stats from learning-service
		const enrollmentsWithStats = await Promise.all(
			enrollments.map(async (e: any) => {
				try {
					const profileRes = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/students/me`, {
						headers: { Authorization: `Bearer ${token}` }
					});
					const studentId = profileRes.data.data.id;

					const statsRes = await axios.get(
						`${PUBLIC_LEARNING_API_URL}/students/${studentId}/stats`,
						{
							headers: { Authorization: `Bearer ${token}` }
						}
					);
					return { ...e, stats: statsRes.data.data };
				} catch {
					return { ...e, stats: null };
				}
			})
		);

		return { enrollments: enrollmentsWithStats, isLecturer: false };
	} catch (error: any) {
		console.error('Fetch enrollments failed', error.message);
		return { enrollments: [], isLecturer };
	}
};

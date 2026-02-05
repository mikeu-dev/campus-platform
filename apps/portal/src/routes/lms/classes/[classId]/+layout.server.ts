import type { LayoutServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL, PUBLIC_LEARNING_API_URL } from '$env/static/public';

export const load: LayoutServerLoad = async ({ locals, params }) => {
	const token = locals.token;
	const { classId } = params;

	try {
		const [
			classRes,
			profileRes,
			attendancesRes,
			materialsRes,
			assignmentsRes,
			attendanceSummaryRes,
			quizzesRes,
			discussionsRes
		] = await Promise.all([
			axios.get(`${PUBLIC_ACADEMIC_API_URL}/classes`, {
				headers: { Authorization: `Bearer ${token}` }
			}),
			axios.get(`${PUBLIC_ACADEMIC_API_URL}/students/me`, {
				headers: { Authorization: `Bearer ${token}` }
			}),
			axios.get(`${PUBLIC_ACADEMIC_API_URL}/attendance/${classId}/my`, {
				headers: { Authorization: `Bearer ${token}` }
			}),
			axios.get(`${PUBLIC_LEARNING_API_URL}/classes/${classId}/materials`, {
				headers: { Authorization: `Bearer ${token}` }
			}),
			axios.get(`${PUBLIC_LEARNING_API_URL}/classes/${classId}/assignments`, {
				headers: { Authorization: `Bearer ${token}` }
			}),
			axios.get(`${PUBLIC_ACADEMIC_API_URL}/attendance/${classId}/summary`, {
				headers: { Authorization: `Bearer ${token}` }
			}),
			axios.get(`${PUBLIC_LEARNING_API_URL}/classes/${classId}/quizzes`, {
				headers: { Authorization: `Bearer ${token}` }
			}),
			axios.get(`${PUBLIC_LEARNING_API_URL}/classes/${classId}/discussions`, {
				headers: { Authorization: `Bearer ${token}` }
			})
		]);

		const classInfo = classRes.data.data.find((c: any) => c.id === classId);
		const studentId = profileRes.data.data.id;

		return {
			classInfo,
			classId,
			studentId,
			user: locals.user,
			attendances: attendancesRes.data.data,
			materials: materialsRes.data.data,
			assignments: assignmentsRes.data.data,
			attendanceSummary: attendanceSummaryRes.data.data,
			quizzes: quizzesRes.data.data,
			discussions: discussionsRes.data.data
		};
	} catch (error) {
		console.error('Fetch class details failed', error);
		return {
			classInfo: null,
			classId,
			studentId: null,
			attendances: [],
			materials: [],
			assignments: [],
			attendanceSummary: { hadir: 0, alfa: 0, izin: 0, sakit: 0 }
		};
	}
};

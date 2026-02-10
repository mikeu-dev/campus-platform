import type { PageServerLoad } from './$types';
import axios from 'axios';
import {
	PUBLIC_ADMISSION_API_URL,
	PUBLIC_ACADEMIC_API_URL,
	PUBLIC_LEARNING_API_URL,
	PUBLIC_IDENTITY_API_URL
} from '$env/static/public';

export const load: PageServerLoad = async ({ locals }) => {
	const token = locals.token;

	let pmbStats = { total: 0, pending: 0, passed: 0, rejected: 0 };
	let academicStats = { totalStudents: 0, totalCourses: 0, totalClasses: 0 };
	let userStats = { totalUsers: 0, students: 0, lecturers: 0, admins: 0 };

	try {
		// Fetch PMB stats
		const pmbRes = await axios.get(`${PUBLIC_ADMISSION_API_URL}/applicants`, {
			params: { limit: 1000 },
			headers: { Authorization: `Bearer ${token}` }
		});
		const applicants = pmbRes.data.data || [];
		pmbStats = {
			total: applicants.length,
			pending: applicants.filter((a: any) => a.status === 'PENDING').length,
			passed: applicants.filter((a: any) => a.status === 'PASSED').length,
			rejected: applicants.filter((a: any) => a.status === 'REJECTED').length
		};

		// Fetch Academic stats
		const [studentsRes, coursesRes, classesRes] = await Promise.all([
			axios.get(`${PUBLIC_ACADEMIC_API_URL}/students`, {
				params: { limit: 1 },
				headers: { Authorization: `Bearer ${token}` }
			}),
			axios.get(`${PUBLIC_ACADEMIC_API_URL}/courses`, {
				params: { limit: 1 },
				headers: { Authorization: `Bearer ${token}` }
			}),
			axios.get(`${PUBLIC_ACADEMIC_API_URL}/classes`, {
				params: { limit: 1 },
				headers: { Authorization: `Bearer ${token}` }
			})
		]);

		academicStats = {
			totalStudents: studentsRes.data.meta?.total || studentsRes.data.data?.length || 0,
			totalCourses: coursesRes.data.meta?.total || coursesRes.data.data?.length || 0,
			totalClasses: classesRes.data.meta?.total || classesRes.data.data?.length || 0
		};

		// Fetch User stats
		const usersRes = await axios.get(`${PUBLIC_IDENTITY_API_URL}/auth/users`, {
			params: { limit: 1000 },
			headers: { Authorization: `Bearer ${token}` }
		});
		const users = usersRes.data.data || [];
		userStats = {
			totalUsers: users.length,
			students: users.filter((u: any) => u.roles?.includes('student')).length,
			lecturers: users.filter((u: any) => u.roles?.includes('lecturer')).length,
			admins: users.filter((u: any) => u.roles?.includes('admin')).length
		};
	} catch (error: any) {
		console.error('Analytics load error:', error.response?.data || error.message);
	}

	return {
		pmbStats,
		academicStats,
		userStats
	};
};

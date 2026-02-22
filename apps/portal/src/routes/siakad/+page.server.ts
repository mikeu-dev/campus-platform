import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals }) => {
	const token = locals.token;
	const user = locals.user;
	const roles = user?.roles || [];
	const isLecturer = roles.includes('lecturer');

	let userInfo = null;
	let finance = { bill: 0, status: 'Lunas' };
	let gpaData = { gpa: 0, totalCredits: 0 };
	let announcements: any[] = [];
	let schedules: any[] = [];
	let lecturerStats = { totalClasses: 0, totalStudents: 0 };

	try {
		// Common data: Announcements
		const announcementsRes = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/announcements`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		announcements = announcementsRes.data.data;

		if (isLecturer) {
			// Fetch lecturer profile
			const profileRes = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/lecturers/me`, {
				headers: { Authorization: `Bearer ${token}` }
			});
			userInfo = profileRes.data.data;

			// Fetch lecturer classes/teaching stats
			const classesRes = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/classes`, {
				headers: { Authorization: `Bearer ${token}` }
			});
			const myClasses = classesRes.data.data || [];
			schedules = myClasses; // Use classes as schedules for now
			lecturerStats = {
				totalClasses: myClasses.length,
				totalStudents: myClasses.reduce((acc: number, c: any) => acc + (c.capacity || 0), 0)
			};
		} else {
			// Fetch student profile
			const profileRes = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/students/me`, {
				headers: { Authorization: `Bearer ${token}` }
			});
			userInfo = profileRes.data.data;

			// Fetch financial status
			const financeRes = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/finance/my-bill`, {
				headers: { Authorization: `Bearer ${token}` }
			});
			finance = {
				bill: financeRes.data.data.totalUnpaid,
				status: financeRes.data.data.totalUnpaid > 0 ? 'Belum Lunas' : 'Lunas'
			};

			// Fetch GPA
			const gpaRes = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/gpa/my`, {
				headers: { Authorization: `Bearer ${token}` }
			});
			gpaData = gpaRes.data.data;

			// Fetch schedules
			const scheduleRes = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/schedules/my`, {
				headers: { Authorization: `Bearer ${token}` }
			});
			schedules = scheduleRes.data.data;
		}
	} catch (error: any) {
		console.error('SIAKAD Dashboard load error:', error.response?.data || error.message);
	}

	return {
		role: isLecturer ? 'lecturer' : 'student',
		userInfo,
		finance,
		gpaData,
		announcements,
		schedules,
		lecturerStats
	};
};

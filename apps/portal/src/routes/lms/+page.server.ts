import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL, PUBLIC_LEARNING_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals }) => {
	const token = locals.token;
	const user = locals.user;
	const roles = user?.roles || [];
	const isLecturer = roles.includes('lecturer');

	try {
		// Always fetch announcements
		const announcementsRes = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/announcements`, {
			headers: { Authorization: `Bearer ${token}` }
		});

		if (isLecturer) {
			// Lecturer-specific data
			let lecturerProfile = null;
			let classes: any[] = [];

			try {
				const [profileRes, classesRes] = await Promise.all([
					axios.get(`${PUBLIC_ACADEMIC_API_URL}/lecturers/me`, {
						headers: { Authorization: `Bearer ${token}` }
					}),
					axios.get(`${PUBLIC_ACADEMIC_API_URL}/classes`, {
						headers: { Authorization: `Bearer ${token}` }
					})
				]);
				lecturerProfile = profileRes.data.data;
				classes = classesRes.data.data || [];

				// Filter classes for this lecturer
				if (lecturerProfile?.id) {
					classes = classes.filter((c: any) => c.lecturer_id === lecturerProfile.id);
				}
			} catch {
				// ignore
			}

			return {
				announcements: announcementsRes.data.data,
				deadlines: [],
				stats: {},
				user,
				isLecturer: true,
				lecturerProfile,
				lecturerClasses: classes
			};
		}

		// Student-specific data
		const activityRes = await axios
			.get(`${PUBLIC_ACADEMIC_API_URL}/students/me`, {
				headers: { Authorization: `Bearer ${token}` }
			})
			.then(async (profileRes) => {
				const studentId = profileRes.data.data.id;
				return Promise.all([
					axios.get(`${PUBLIC_LEARNING_API_URL}/students/${studentId}/deadlines`, {
						headers: { Authorization: `Bearer ${token}` }
					}),
					axios.get(`${PUBLIC_LEARNING_API_URL}/students/${studentId}/stats`, {
						headers: { Authorization: `Bearer ${token}` }
					})
				]);
			})
			.catch(() => [null, null]);

		const [deadlinesRes, statsRes] = activityRes as any[];

		return {
			announcements: announcementsRes.data.data,
			deadlines: deadlinesRes?.data?.data || [],
			stats: statsRes?.data?.data || {},
			user,
			isLecturer: false,
			lecturerProfile: null,
			lecturerClasses: []
		};
	} catch (error) {
		console.error('Error loading LMS Home data:', error);
		return {
			announcements: [],
			deadlines: [],
			stats: {},
			user,
			isLecturer,
			lecturerProfile: null,
			lecturerClasses: []
		};
	}
};

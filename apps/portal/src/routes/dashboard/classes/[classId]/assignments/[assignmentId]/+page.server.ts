import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import axios from 'axios';
import { PUBLIC_LEARNING_API_URL, PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals, params }) => {
	const token = locals.token;
	const { assignmentId } = params;
	let assignment = null;
	let submission = null;
	let studentId = null;
	let submissions = [];
	const isLecturer = locals.user?.roles?.includes('lecturer');

	try {
		if (isLecturer) {
			// Fetch ALL submissions
			const subsRes = await axios.get(
				`${PUBLIC_LEARNING_API_URL}/assignments/${assignmentId}/submissions`,
				{
					headers: { Authorization: `Bearer ${token}` }
				}
			);
			submissions = subsRes.data.data;
		} else {
			// Student Logic
			const profileRes = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/students/me`, {
				headers: { Authorization: `Bearer ${token}` }
			});
			studentId = profileRes.data.data.id;
		}

		// 2. Fetch Assignment Details
		const { classId } = params;
		const listRes = await axios.get(`${PUBLIC_LEARNING_API_URL}/classes/${classId}/assignments`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		assignment = listRes.data.data.find((a: any) => a.id === assignmentId);

		// 3. Fetch My Submission
		if (studentId && assignment) {
			const subRes = await axios.get(
				`${PUBLIC_LEARNING_API_URL}/assignments/${assignmentId}/my-submission?studentId=${studentId}`,
				{
					headers: { Authorization: `Bearer ${token}` }
				}
			);
			submission = subRes.data.data;
		}
	} catch (error: any) {
		console.error('Fetch assignment details failed', error.message);
	}

	return { assignment, submission, submissions, isLecturer };
};

export const actions = {
	submit: async ({ request, locals, params }) => {
		const data = await request.formData();
		let content = data.get('content')?.toString() || '';
		const file = data.get('file');
		const token = locals.token;
		const { assignmentId } = params;

		if (file instanceof File && file.size > 0) {
			try {
				const uploadData = new FormData();
				uploadData.append('file', file);
				uploadData.append('bucket', 'submissions'); // Different bucket for submissions

				const uploadRes = await fetch(`${PUBLIC_LEARNING_API_URL}/upload`, {
					method: 'POST',
					headers: { Authorization: `Bearer ${token}` },
					body: uploadData
				});

				if (!uploadRes.ok) throw new Error('File upload failed');
				const uploadJson = await uploadRes.json();

				// If content exists, append URL, otherwise just URL
				const fileLink = `[Attached File](${uploadJson.data.url})`;
				content = content ? `${content}\n\n${fileLink}` : fileLink;
			} catch (e) {
				console.error(e);
				return fail(500, { error: 'File upload failed' });
			}
		}

		if (!content) return fail(400, { error: 'Content is required' });

		try {
			// 1. Get Student ID
			const profileRes = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/students/me`, {
				headers: { Authorization: `Bearer ${token}` }
			});
			const student_id = profileRes.data.data.id;

			// 2. Submit
			await axios.post(
				`${PUBLIC_LEARNING_API_URL}/assignments/${assignmentId}/submit`,
				{
					student_id,
					content
				},
				{
					headers: { Authorization: `Bearer ${token}` }
				}
			);

			return { success: true };
		} catch (error: any) {
			console.error('Submission failed', error.response?.data || error.message);
			return fail(500, { error: 'Submission failed' });
		}
	},
	grade: async ({ request, locals }) => {
		const data = await request.formData();
		const score = parseFloat(data.get('score')?.toString() || '0');
		const feedback = data.get('feedback');
		const submissionId = data.get('submissionId');
		const token = locals.token;

		try {
			await axios.post(
				`${PUBLIC_LEARNING_API_URL}/submissions/${submissionId}/grade`,
				{
					score,
					feedback
				},
				{
					headers: { Authorization: `Bearer ${token}` }
				}
			);
			return { success: true };
		} catch {
			return fail(500, { error: 'Grading failed' });
		}
	}
} satisfies Actions;

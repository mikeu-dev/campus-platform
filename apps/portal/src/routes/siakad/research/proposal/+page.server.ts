import type { PageServerLoad, Actions } from './$types';
import axios from 'axios';
import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	const token = locals.token;
	let studentProfile = null;

	try {
		const res = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/students/me`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		studentProfile = res.data.data;
	} catch (error: any) {
		console.error('Research Proposal profile load error:', error.response?.data || error.message);
	}

	// Mock eligibility for now (backend should eventually provide this)
	const eligibility = {
		totalSks: studentProfile?.total_credits || 110,
		requiredSks: 100,
		isEligible: (studentProfile?.total_credits || 110) >= 100
	};

	return { studentProfile, eligibility };
};

export const actions: Actions = {
	submit: async ({ request, locals }) => {
		const token = locals.token;
		const formData = await request.formData();
		const title = formData.get('title');
		const type = formData.get('type');
		const description = formData.get('description');
		const supervisor_preferred = formData.get('supervisor');

		if (!title || !type) {
			return fail(400, { message: 'Title and Type are required' });
		}

		try {
			await axios.post(
				`${PUBLIC_ACADEMIC_API_URL}/research`,
				{
					title,
					type,
					description,
					supervisor_preferred
				},
				{
					headers: { Authorization: `Bearer ${token}` }
				}
			);

			return { success: true };
		} catch (error: any) {
			console.error('Research proposal submit error:', error.response?.data || error.message);
			return fail(500, { message: 'Failed to submit proposal' });
		}
	}
};

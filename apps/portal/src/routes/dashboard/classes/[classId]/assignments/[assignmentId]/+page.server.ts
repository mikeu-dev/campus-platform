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

    try {
        // 1. Fetch Student Profile to get ID (needed for submission check)
        const profileRes = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/students/me`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        studentId = profileRes.data.data.id;

        // 2. Fetch Assignment Details (We reused getAssignments list endpoint in plan, but let's see if we need single)
        // Learning Service only has getAssignments (list). 
        // We can fetch list and filter? Or add single endpoint?
        // Let's fetch list for now (MVP trade-off). 
        // Note: Ideally Backend should have GET /assignments/:id
        // Wait, I can't filter easily if I don't know classId here? 
        // params has classId!
        const { classId } = params;
        const listRes = await axios.get(`${PUBLIC_LEARNING_API_URL}/classes/${classId}/assignments`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        assignment = listRes.data.data.find((a: any) => a.id === assignmentId);

        // 3. Fetch My Submission
        if (studentId && assignment) {
            const subRes = await axios.get(`${PUBLIC_LEARNING_API_URL}/assignments/${assignmentId}/my-submission?studentId=${studentId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            submission = subRes.data.data;
        }

    } catch (error: any) {
        console.error("Fetch assignment details failed", error.message);
    }

    return { assignment, submission };
};

export const actions = {
    default: async ({ request, locals, params }) => {
        const data = await request.formData();
        const content = data.get('content');
        const token = locals.token;
        const { assignmentId } = params;

        if (!content) return fail(400, { error: "Content is required" });

        try {
            // 1. Get Student ID
            const profileRes = await axios.get(`${PUBLIC_ACADEMIC_API_URL}/students/me`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const student_id = profileRes.data.data.id;

            // 2. Submit
            await axios.post(`${PUBLIC_LEARNING_API_URL}/assignments/${assignmentId}/submit`, {
                student_id,
                content
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            return { success: true };

        } catch (error: any) {
            console.error("Submission failed", error.response?.data || error.message);
            return fail(500, { error: "Submission failed" });
        }
    }
} satisfies Actions;

import axios from 'axios';
import { PUBLIC_ADMISSION_API_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url, locals }: any) => {
    const token = locals.token;
    const periodId = url.searchParams.get('period_id');
    const status = url.searchParams.get('status');

    let applicants = [];
    let periods = [];

    try {
        // Fetch applicants with filters
        const applicantsRes = await axios.get(`${PUBLIC_ADMISSION_API_URL}/admin/pmb/applicants`, {
            params: { period_id: periodId, status },
            headers: { Authorization: `Bearer ${token}` }
        });
        applicants = applicantsRes.data.data;

        // Fetch periods for filter dropdown
        const periodsRes = await axios.get(`${PUBLIC_ADMISSION_API_URL}/admin/pmb/periods`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        periods = periodsRes.data.data;
    } catch (error: any) {
        console.error('Applicants load error:', error.response?.data || error.message);
    }

    return {
        applicants,
        periods
    };
};

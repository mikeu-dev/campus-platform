import {
	PUBLIC_IDENTITY_API_URL,
	PUBLIC_ACADEMIC_API_URL,
	PUBLIC_LEARNING_API_URL,
	PUBLIC_PUBLIC_API_URL,
	PUBLIC_ADMISSION_API_URL
} from '$env/static/public';

export interface ServiceHealth {
	name: string;
	url: string;
	status: 'loading' | 'up' | 'down';
	message?: string;
}

export const services = [
	{ name: 'Identity Service', url: PUBLIC_IDENTITY_API_URL },
	{ name: 'Academic Service', url: PUBLIC_ACADEMIC_API_URL },
	{ name: 'Learning Service', url: PUBLIC_LEARNING_API_URL },
	{ name: 'Public Service', url: PUBLIC_PUBLIC_API_URL },
	{ name: 'Admission Service', url: PUBLIC_ADMISSION_API_URL }
];

export async function checkHealth(
	url: string
): Promise<{ status: 'up' | 'down'; message: string; details?: any }> {
	try {
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

		const cleanUrl = url.endsWith('/') ? url.slice(0, -1) : url;
		const rootUrl = cleanUrl.replace(/\/api\/v1$/, '');
		const response = await fetch(`${rootUrl}/health`, {
			signal: controller.signal,
			headers: { Accept: 'application/json' }
		});

		clearTimeout(timeoutId);
		const data = await response.json().catch(() => ({}));

		if (response.ok) {
			return {
				status: 'up',
				message: data.status || 'OK',
				details: data
			};
		}
		return {
			status: 'down',
			message: `HTTP ${response.status}: ${response.statusText}`,
			details: data
		};
	} catch (error: any) {
		if (error.name === 'AbortError') {
			return { status: 'down', message: 'Timeout: Layanan tidak merespon dalam 10 detik' };
		}
		return { status: 'down', message: error.message || 'Gagal terhubung ke layanan' };
	}
}

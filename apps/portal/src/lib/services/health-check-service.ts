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

export async function checkHealth(url: string): Promise<{ status: 'up' | 'down'; message: string }> {
    try {
        // Use a 5 second timeout for health checks
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const response = await fetch(`${url}/health`, {
            signal: controller.signal,
            headers: { 'Accept': 'application/json' }
        });

        clearTimeout(timeoutId);

        if (response.ok) {
            const data = await response.json();
            return { status: 'up', message: data.status || 'OK' };
        }
        return { status: 'down', message: `Status ${response.status}` };
    } catch (error: any) {
        return { status: 'down', message: error.message || 'Connection Failed' };
    }
}

// Export shared types here
// Example:
// export interface User {
//   id: string;
//   email: string;
//   role: 'admin' | 'student' | 'lecturer';
// }

export type ApiResponse<T> = {
    success: boolean;
    data?: T;
    error?: string;
};

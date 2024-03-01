// utils/addBaseUrl.ts

export const addBaseURL = (path: string): string => {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000'; // Replace with your actual base URL
    return `${baseURL}${path}`;
   };
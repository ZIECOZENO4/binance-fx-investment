
// hooks/useUserInfo.ts
import { useSuspenseQuery, UseSuspenseQueryResult } from '@tanstack/react-query';
import { User } from '@prisma/client';
import { addBaseURL } from '@/utils/addBaseUrl';

async function fetchUserInfo() {

    const url = addBaseURL('api/userInfo');
    const res = await fetch(url);
    if (!res.ok) {
        const errorData = await res.json();
        console.log("error:", errorData);
        throw new Error(errorData);
    }
    const newUser: User = await res.json();
    if (!newUser) throw new Error("user is not found");
    return newUser;

}

export function useUserInfo() {
    return useSuspenseQuery({
        queryKey: ['userInfo'],
        queryFn: fetchUserInfo,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });
}
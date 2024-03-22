import { useSuspenseQuery, UseSuspenseQueryResult } from '@tanstack/react-query';
import { User } from '@prisma/client';
import { addBaseURL } from '@/utils/addBaseUrl';

async function fetchUserInvest() {

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

export function useUserInvest() {
    return useSuspenseQuery({
        queryKey: ['userInvest'],
        queryFn: fetchUserInvest,
        staleTime: 1000 * 60 * 60 * 24, 
    });
}


// // hooks/useUserInfo.ts
// import { useSuspenseQuery, UseSuspenseQueryResult } from '@tanstack/react-query';
// import { addBaseURL } from '../addBaseUrl';
// import { User } from '@prisma/client';

// // Define the User interface based on your Prisma model


// async function fetchUserInfo(): Promise<User | null> {
//     const url = addBaseURL('api/userInfo');
//     const res = await fetch(url);
//     if (!res.ok) {
//         const errorData = await res.json();
//         // throw new Error(errorData.error || 'An error occurred while fetching user info');
//         console.log("error:", errorData);
//         return null;
//     }
//     return res.json();
// }

// export function useUserInfo(): UseSuspenseQueryResult<User, null> {
//     return useSuspenseQuery({
//         queryKey: ['userInfo'],
//         queryFn: fetchUserInfo,
//         staleTime: 1000 * 60 * 60 * 24, // 24 hours
//     });
// }


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

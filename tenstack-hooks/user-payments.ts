import { useSuspenseQuery } from '@tanstack/react-query';
import { Payment } from '@prisma/client';
import { addBaseURL } from '@/utils/addBaseUrl';

async function fetchUserPayments() {
    const url = addBaseURL('api/userPayments');
    const res = await fetch(url);
    if (!res.ok) {
        const errorData = await res.json();
        console.log("error:", errorData);
        throw new Error(errorData);
    }
    const payments: Payment[] | null = await res.json();
    return payments || []; // Return an empty array if payments is null
}

export function useUserPayments() {
    return useSuspenseQuery({
        queryKey: ['userPayments'],
        queryFn: fetchUserPayments,
        staleTime: 1000 * 60 * 60 * 24, 
    });
}

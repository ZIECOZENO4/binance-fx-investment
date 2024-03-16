
import { useQuery } from '@tanstack/react-query';


async function fetchUserBalances(userId: string) {
 const response = await fetch(`/api/userInfo`);
 if (!response.ok) {
    throw new Error('Network response was not ok');
 }
 return response.json();
}


export function useUserBalances(userId: string) {
 return useQuery({
    queryKey: ['userBalances', userId],
    queryFn: () => fetchUserBalances(userId),
 });
}
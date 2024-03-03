// hooks/useUserBalances.ts
import { useQuery } from '@tanstack/react-query';

async function fetchUserBalances() {
 const response = await fetch('/api/userBalances');
 if (!response.ok) {
    throw new Error('Network response was not ok');
 }
 return response.json();
}

export function useUserBalances() {
 return useQuery({
    queryKey: ['userBalances'],
    queryFn: fetchUserBalances,
 });
}

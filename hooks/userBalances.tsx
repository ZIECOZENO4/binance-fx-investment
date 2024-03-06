// // hooks/useUserBalances.ts
// import { useQuery } from '@tanstack/react-query';
<<<<<<< HEAD

// async function fetchUserBalances(userId: string) {
//  const response = await fetch(`/api/balance`);
//  if (!response.ok) {
//     throw new Error('Network response was not ok');
//  }
//  return response.json();
// }

// export function useUserBalances(userId: string) {
//  return useQuery({
//     queryKey: ['userBalances', userId],
//     queryFn: () => fetchUserBalances(userId),
//  });
// }

// hooks/useUserBalances.ts
import { useQuery } from '@tanstack/react-query';
// // hooks/useUserBalances.ts
// import { useQuery } from '@tanstack/react-query';

async function fetchUserBalances(userId: string) {
 const response = await fetch(`/api/balance`);
 if (!response.ok) {
    throw new Error('Network response was not ok');
 }
 return response.json();
}
=======

>>>>>>> c45e6e773f58bb64d9bcf080b739e8dee477bd9e
// async function fetchUserBalances(userId: string) {
//  const response = await fetch(`/api/balance`);
//  if (!response.ok) {
//     throw new Error('Network response was not ok');
//  }
//  return response.json();
// }

<<<<<<< HEAD
export function useUserBalances(userId: string) {
 return useQuery({
    queryKey: ['userBalances', userId],
    queryFn: () => fetchUserBalances(userId),
 });
}
=======
>>>>>>> c45e6e773f58bb64d9bcf080b739e8dee477bd9e
// export function useUserBalances(userId: string) {
//  return useQuery({
//     queryKey: ['userBalances', userId],
//     queryFn: () => fetchUserBalances(userId),
//  });
<<<<<<< HEAD
// }
=======
// }
>>>>>>> c45e6e773f58bb64d9bcf080b739e8dee477bd9e


"use client";
import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { PuffLoader } from 'react-spinners';
import { MdCheckCircle, MdCancel } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { addBaseURL } from '../../utils/addBaseUrl';
import AutoSignOut from './autosignout';

const SyncUser = () => {
    const router = useRouter();


    const { mutateAsync: syncUser, isPending, isError, isSuccess } = useMutation({
        mutationKey: ['sync-user'],
        mutationFn: async () => {
            const response = await fetch(addBaseURL('api/syncUser'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to sync user');
            }

            return response.json();
        },
        onSuccess: () => {
            router.push('/dashboard');
        },
    });

    useEffect(() => {
        syncUser();
    }, []);

    return (
        <div className="flex justify-center items-center bg-black h-screen">
            {isPending && <PuffLoader color="#36D7B7" size={150} />}
            {isError && <AutoSignOut />}
            {isSuccess && <MdCheckCircle className="text-green-500" size="150" />}
        </div>
    );
};

export default SyncUser;
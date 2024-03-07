"use client"
import Loading from '@/app/loading';
import Wallet from '@/components/wallet/wallet'
import React from 'react'
import { Suspense, useEffect } from 'react';
import { useUser } from "@clerk/clerk-react";
const WalletPage= () => {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded) {
      return null;
    }
 return (
    <div>
        <Suspense fallback={<div><Loading /></div>}>
        <Wallet  />
        </Suspense>
   
    </div>
 );
};

export default WalletPage;

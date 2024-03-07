"use client"
import Loading from '@/app/loading';
import Wallet from '@/components/wallet/wallet'
import React from 'react'
import { Suspense, useEffect } from 'react';
const WalletPage= () => {
 return (
    <div>
        <Suspense fallback={<div><Loading /></div>}>
        <Wallet  />
        </Suspense>
   
    </div>
 );
};

export default WalletPage;

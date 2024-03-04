"use client"
import { useUser } from '@clerk/clerk-react';
import Wallet from '@/components/wallet/wallet'
import React from 'react'

const WalletPage= () => {
  const { user } = useUser();

  // Provide a fallback value for userId
  const userId = user ? user.id : 'defaultUserId'; // Replace 'defaultUserId' with an appropriate fallback
 
 return (
    <div>
      <Wallet userId={userId} />
    </div>
 );
};

export default WalletPage;

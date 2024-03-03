import { useUser } from '@clerk/clerk-react';
import Wallet from '@/components/wallet/wallet'
import React from 'react'

const WalletPage= () => {
 const { user } = useUser();

 // user.id will give you the user's ID
 return (
    <div>
      <Wallet userId={user.id} />
    </div>
 );
};

export default WalletPage;



// "use client"
// import React, { useState, useEffect } from 'react';
// import { useUserBalances } from '../../hooks/userBalances'; 
// import Eye from './eye';
// import Noeye from './noeye';

// type ViewType = 'account' | 'investment';

// interface UserBalanceProps {
//  userId: string;
// }

// const BalanceShow: React.FC<UserBalanceProps> = () => {
//  const [currentView, setCurrentView] = useState<ViewType>('account');
//  const [investmentIndex, setInvestmentIndex] = useState(0);
//  const [isBalanceHidden, setIsBalanceHidden] = useState(false);
//  const [balance, setBalance] = useState<number | null>(null); // Define balance state
//  const { isLoaded, isSignedIn, user } = useUser();
//  const userId = user?.id; // Assuming the user object has an 'id' property

//  // Use the useUserBalances hook, passing the user's ID
//  const { data: userBalances, isLoading, error } = useUserBalances(userId);

//  const investments = [
//     { balance: '0.000', symbol: 'ETH' },
//     { balance: '0.000', symbol: 'BTC' },
//     { balance: '0.000', symbol: 'LTC' },
//  ];

//  useEffect(() => {
//     let timer: NodeJS.Timeout | undefined;

//     if (!isLoaded || isLoading) {
//       return <div>Loading...</div>; // Show a loading indicator while data is being fetched
//    }
  
//    if (error) {
//       return <div>Error: {error.message}</div>; // Show an error message if there's an error
//    }
  
//    // Assuming userBalances.balance contains the user's balance
//    const userBalance = userBalances?.balance;

//     if (currentView === 'investment') {
//       timer = setInterval(() => {
//         setInvestmentIndex((prevIndex) => (prevIndex + 1) % investments.length);
//       }, 3000); // Change every 3 seconds
//     }

//     return () => {
//       if (timer) clearInterval(timer); // Clean up on component unmount
//     };
//  }, [currentView, investments.length, userId]); // Correctly placed dependency array

//  const toggleBalanceVisibility = () => {
//     setIsBalanceHidden(!isBalanceHidden);
//  };

//  return (
//     <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-sky-200 rounded-2xl flex flex-col justify-start align-middle items-start gap-5 p-4 h-40 md:px-3 px-10">
//       {currentView === 'account' && (
//         <div className="w-full transition-transform duration-500 ease-in-out transform">
//           <div className="flex flex-row justify-between ">
//             <div className="flex flex-col justify-start gap-5 md:gap-10">
//               <p className="font-bold md:text-2xl text-xl sm:text-md font-sono gap-3">ACCOUNT BALANCE</p>
//               <p className="font-bold md:text-4xl text-3xl font-serif gap-3">
//                 {isBalanceHidden ? '*****' : balance !== null ? `$${userBalance.toFixed(2)}` : '0.00'}
//               </p>
//             </div>
//             <div onClick={toggleBalanceVisibility}>
//               {isBalanceHidden ? <Eye /> : <Noeye />}
//             </div>
//           </div>
//           <button
//             className="text-white font-bold py-2 px-4 underline text=bold"
//             onClick={() => setCurrentView('investment')}
//           >
//             Show Investment
//           </button>
//         </div>
//       )}
//       {currentView === 'investment' && (
//         <div className="w-full transition-transform duration-500 ease-in-out transform">
//           <div className="flex flex-row justify-between ">
//             <div className="flex flex-col justify-start gap-8">
//               <p className="font-bold md:text-2xl sm:text-md text-xl font-sono gap-3">INVESTMENT BALANCE</p>
//               <p className="font-bold md:text-4xl text-3xl font-serif gap-3">
//                 {isBalanceHidden ? '*****' : `${investments[investmentIndex].balance} ${investments[investmentIndex].symbol}`}
//               </p>
//             </div>
//             <div onClick={toggleBalanceVisibility}>
//               {isBalanceHidden ? <Eye /> : <Noeye />}
//             </div>
//           </div>
//           <button
//             className="text-white font-bold py-2 px-4 underline text=bold"
//             onClick={() => setCurrentView('account')}
//           >
//             Show Account
//           </button>
//         </div>
//       )}
//       <div className="flex justify-center mt-4">
//         {/* ... */}
//       </div>
//     </div>
//  );
// };

// export default BalanceShow;
"use client"

"use client"
import React, { useState, useEffect } from 'react';
import { useUserBalances } from '../../hooks/userBalances'; 
import Eye from './eye';
import Noeye from './noeye';

type ViewType = 'account' | 'investment';

interface UserBalanceProps {
 userId: string;
}

interface Investment {
 balance: string;
 symbol: string;
}

const BalanceShow: React.FC<UserBalanceProps> = ({ userId }) => {
 const [currentView, setCurrentView] = useState<ViewType>('account');
 const [investmentIndex, setInvestmentIndex] = useState(0);
 const [isBalanceHidden, setIsBalanceHidden] = useState(false);
 const [balance, setBalance] = useState<number | null>(null); // Define balance state

 // Assuming useUserBalances returns an object with a balance property
 const { data: userBalances, isLoading, error } = useUserBalances(userId);

 const investments: Investment[] = [
    { balance: '0.000', symbol: 'ETH' },
    { balance: '0.000', symbol: 'BTC' },
    { balance: '0.000', symbol: 'LTC' },
 ];

 useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (currentView === 'investment') {
      timer = setInterval(() => {
        setInvestmentIndex((prevIndex) => (prevIndex + 1) % investments.length);
      }, 3000); // Change every 3 seconds
    }

    return () => {
      if (timer) clearInterval(timer); // Clean up on component unmount
    };
 }, [currentView, investments.length]); // Correctly placed dependency array

 const toggleBalanceVisibility = () => {
    setIsBalanceHidden(!isBalanceHidden);
 };

 // Check if data is still loading or if there was an error
 if (isLoading) {
    return <div>Loading...</div>;
 }

 if (error) {
    return <div>Error found</div>;
 }

 // Assuming userBalances.balance contains the user's balance
 const userBalance = userBalances?.balance;

 return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-sky-200 rounded-2xl flex flex-col justify-start align-middle items-start gap-5 p-4 h-40 md:px-3 px-10">
      {currentView === 'account' && (
        <div className="w-full transition-transform duration-500 ease-in-out transform">
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col justify-start gap-5 md:gap-10">
              <p className="font-bold md:text-2xl text-xl sm:text-md font-sono gap-3">ACCOUNT BALANCE</p>
              <p className="font-bold md:text-4xl text-3xl font-serif gap-3">
                {isBalanceHidden ? '*****' : balance !== null ? `$${balance.toFixed(2)}` : '0.00'}
              </p>
            </div>
            <div onClick={toggleBalanceVisibility}>
              {isBalanceHidden ? <Eye /> : <Noeye />}
            </div>
          </div>
          <button
            className="text-white font-bold py-2 px-4 underline text=bold"
            onClick={() => setCurrentView('investment')}
          >
            Show Investment
          </button>
        </div>
      )}
      {currentView === 'investment' && (
        <div className="w-full transition-transform duration-500 ease-in-out transform">
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col justify-start gap-8">
              <p className="font-bold md:text-2xl sm:text-md text-xl font-sono gap-3">INVESTMENT BALANCE</p>
              <p className="font-bold md:text-4xl text-3xl font-serif gap-3">
                {isBalanceHidden ? '*****' : `${investments[investmentIndex].balance} ${investments[investmentIndex].symbol}`}
              </p>
            </div>
            <div onClick={toggleBalanceVisibility}>
              {isBalanceHidden ? <Eye /> : <Noeye />}
            </div>
          </div>
          <button
            className="text-white font-bold py-2 px-4 underline text=bold"
            onClick={() => setCurrentView('account')}
          >
            Show Account
          </button>
        </div>
      )}
      <div className="flex justify-center mt-4">
        {/* ... */}
      </div>
    </div>
 );
};

export default BalanceShow;

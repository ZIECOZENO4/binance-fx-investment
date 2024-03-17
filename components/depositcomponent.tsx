"use client"
import React from 'react';
import { useState } from 'react';
import { useUser } from "@clerk/clerk-react";
import {Button} from "@nextui-org/react";
import { useUserInfo } from '@/tenstack-hooks/user-info';
import Link from 'next/link';
const DepositPage = () => {
        const [showWalletInfo, setShowWalletInfo] = useState(false);
        const [walletAddress, setWalletAddress] = useState('');
        const [transactionId, setTransactionId] = useState('');
        const { data: userInfo } = useUserInfo();
        const { isLoaded, isSignedIn, user } = useUser();
        const toggleWalletInfo = () => {
          setShowWalletInfo(!showWalletInfo);
        };
        const userId =
        user && user.id
          ? user.id
          : "ID: ---";
        const deposit = async () => {
          // Validate the inputs
          if (!walletAddress || !transactionId) {
             alert('Please provide both wallet address and transaction ID.');
             return;
          }
         
          // Check if the user is signed in
          if (!isSignedIn) {
             alert('You must be signed in to make a deposit.');
             return;
          }
         
          // Prepare the data payload
          const data = {
             transactionId,
             walletAddress,
             time: new Date().toISOString(),
             userId, 
             user,
          };
         
          try {
             const response = await fetch('/api/pendingDeposit', {
               method: 'POST',
               headers: {
                 'Content-Type': 'application/json',
               },
               body: JSON.stringify(data),
             });
         
             if (!response.ok) {
               throw new Error('Network response was not ok');
             }
         
             const responseData = await response.json();
             console.log(responseData);
             // Handle the response as needed, e.g., show a success message
             alert('Deposit confirmed successfully!');
          } catch (error) {
             console.error('Error sending data to admin:', error);
             // Handle the error, e.g., show an error message
             alert('An error occurred while confirming the deposit. Please try again.');
          }
         };
         
      
      if (!isLoaded) {
        return null;
      }

  return (
    <div className=" flex flex-col justify-center align-middle items-center py-4">
<h1 className="text-3xl text-white font-bold font-serif uppercase py-3">DEPOSIT</h1>

<div className="w-[100vw] bg-gray-900">
              <div className="flex  ">
              
              <div className="h-full text-left px-4 py-4 bg-gray-800 w-full justify-end border-t-2 border-gray-900">
                <div className="flex items-center flex-wrap">
                  <img alt="testimonial" className="inline-block object-cover object-center w-16 h-16 mb-4 bg-gray-100 rounded" src="/images/d3.jpeg" /> <span className="flex flex-col flex-grow pl-4">
                    <span className="font-bold text-lg text-gray-100 -mt-4">Wallet:Trust Wallet </span>
                    <span className="text-sm text-gray-500 uppercase font-bold"> 0x1b9E45C744<br />c0E2728e5D2418f58d4 <br />B924ADb875F</span>
                  </span>
                </div>
                <div className="flex items-center flex-wrap ">
                <button onClick={(e) => {
      e.preventDefault(); 
      navigator.clipboard.writeText('0x1b9E45C744c0E2728e5D2418f58d4B924ADb875F')
        .then(() => {
          console.log('Address copied to clipboard');
    
        })
        .catch(err => {
          console.error('Failed to copy address: ', err);
        });
    }} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 px-2 py-1 border-2 border-indigo-500 rounded-full text-sm">Copy Address
    </button>
        <span className="text-gray-800 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 px-2 bg-yellow-500 rounded-full">
          New 
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          24 hours
        </span>
        
      </div>
              </div>
            
              </div>
              <div className="flex  ">
              
              <div className="h-full text-left px-4 py-4 bg-gray-800 w-full justify-end border-t-2 border-gray-900">
                <a href='/' className="flex items-center flex-wrap">
                  <img alt="testimonial" className="inline-block object-cover object-center w-16 h-16 mb-4 bg-gray-100 rounded" src="/images/d2.jpeg" /> <span className="flex flex-col flex-grow pl-4">
                    <span className="font-bold text-lg text-gray-100 -mt-4">Wallet: Binance</span>
                    <span className="text-sm text-gray-500 uppercase font-bold">Wallet Address</span>
                  </span>
                </a>
                <div className="flex items-center flex-wrap ">
        <a href="/" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 px-2 py-1 border-2 border-indigo-500 rounded-full text-sm">Copy Address
        </a>
        <span className="text-gray-800 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 px-2 bg-yellow-500 rounded-full">
          New 
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          24 hours
        </span>
        
      </div>
              </div>
            
              </div>

              <div className="flex  ">
              
              <div className="h-full text-left px-4 py-4 bg-gray-800 w-full justify-end border-t-2 border-gray-900">
                <a href='/' className="flex items-center flex-wrap">
                  <img alt="testimonial" className="inline-block object-cover object-center w-16 h-16 mb-4 bg-gray-100 rounded" src="/images/d4.jpeg" /> <span className="flex flex-col flex-grow pl-4">
                    <span className="font-bold text-lg text-gray-100 -mt-4">Wallet: Coinbase  </span>
                    <span className="text-sm text-gray-500 uppercase font-bold">Wallet Address</span>
                  </span>
                </a>
                <div className="flex items-center flex-wrap ">
        <Link href="/" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 px-2 py-1 border-2 border-indigo-500 rounded-full text-sm">Copy Address
        </Link>
        <span className="text-gray-800 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 px-2 bg-yellow-500 rounded-full">
          New 
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          24 hours
        </span>
        
      </div>
              </div>
            
              </div>
        
              </div>
              <div className="flex  w-full">
              
              <div className="h-full text-left px-4 py-4 bg-gray-800 w-full justify-end border-t-2 border-gray-900">
                <Link href='/' className="flex items-center flex-wrap">
                  <img alt="testimonial" className="inline-block object-cover object-center w-16 h-16 mb-4 bg-gray-100 rounded" src="/images/d5.jpeg" /> <span className="flex flex-col flex-grow pl-4">
                    <span className="font-bold text-lg text-gray-100 -mt-4">Wallet: Meta Mask  </span>
                    <span className="text-sm text-gray-500 uppercase font-bold">Wallet Address</span>
                  </span>
                </Link>
                <div className="flex items-center flex-wrap ">
        <Link href="/" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 px-2 py-1 border-2 border-indigo-500 rounded-full text-sm">Copy Address
        </Link>
        <span className="text-gray-800 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 px-2 bg-yellow-500 rounded-full">
          New 
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          24 hours
        </span>
        
      </div>
              </div>
            
              </div>
        
              <div className="flex w-full ">
              
              <div className="h-full text-left px-4 py-4 bg-gray-800 w-full justify-end border-t-2 border-gray-900">
                <Link href='/' className="flex items-center flex-wrap">
                  <img alt="testimonial" className="inline-block object-cover object-center w-16 h-16 mb-4 bg-gray-100 rounded" src="/images/d1.jpeg" /> <span className="flex flex-col flex-grow pl-4">
                    <span className="font-bold text-lg text-gray-100 -mt-4">Bank: PayPal</span>
                    <span className="text-sm text-gray-500 uppercase font-bold">Wallet Address</span>
                  </span>
                </Link>
                <div className="flex items-center flex-wrap ">
        <Link href="/" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 px-2 py-1 border-2 border-indigo-500 rounded-full text-sm">Copy Address
        </Link>
        <span className="text-gray-800 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 px-2 bg-yellow-500 rounded-full">
          New 
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          24 hours
        </span>
        
      </div>
              </div>
            
              </div>
        <div>





 
        <section className="grid h-auto place-content-center py-5  bg-slate-900 text-slate-300">
      <div className="mb-10 text-center text-blue-400">
        <h1 className="text-3xl font-bold tracking-widest">Confirm Deposit</h1>
        <p><span className="font-bold">Please Provide YourWallet Address</span> and <span className="font-bold">Transaction ID</span>.</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-6">
        {showWalletInfo && (
          <>
            <input
              type="text"
              id="walletAddress"
              name="walletAddress"
              placeholder="Wallet Address"
              className="w-80 appearance-none rounded-full border-0 bg-slate-800/50 p-2 px-4 focus:bg-slate-800 focus:ring-2 focus:ring-orange-500"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
            />
            <input
              type="text"
              id="transactionId"
              name="transactionId"
              placeholder="Transaction ID"
              className="w-80 appearance-none rounded-full border-0 bg-slate-800/50 p-2 px-4 focus:bg-slate-800 focus:ring-2 focus:ring-orange-500"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
            />
          </>
        )}
     <button
      type="button" // Specify the type attribute
      id="toggleWalletInfo"
      className="rounded-full bg-indigo-500 p-2 px-4 text-white hover:bg-orange-500"
      onClick={toggleWalletInfo}
    >
      <span>{showWalletInfo ? 'Hide' : 'Show'}</span> Wallet Information
    </button>
    <Button
      type="button" // Specify the type attribute
      onClick={deposit}
      disableRipple
      className="relative flex flex-col m-2 py-4 w-auto h-auto align-middle overflow-visible rounded-full hover:-translate-y-1 px-6 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="lg"
    >
      <p className="font-bold text-xl text-white">Confirm</p>  
    </Button>
      </div>
    </section>


        </div>
            </div> 

  )
}

export default DepositPage
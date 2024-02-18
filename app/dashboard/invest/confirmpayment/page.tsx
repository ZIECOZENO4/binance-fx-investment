'use client'
import React from 'react'
import { useState } from 'react';

const Page = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [transactionId, setTransactionId] = useState('');

  const handleWalletAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(event.target.value);
  };

  const handleTransactionIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTransactionId(event.target.value);
  };

  return (
  
<div className="container">
      <div className="mt-5">
        <div className="w-1/2 mx-auto bg-slate-600 bg-opacity-50 rounded-md">
      
          <div className="flex flex-col justify-center items-center">
            <h6 className="text-black font-medium my-4">Please Confirm Your Payment</h6>
            <div
              className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
            >
              <p className="text-gray-400 ml-4">Subtotal</p>
              <p className="text-black mr-4">$2,650</p>
            </div>
            <div
              className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
            >
              <p className="text-gray-400 ml-4">Shipping</p>
              <p className="text-black mr-4">$15</p>
            </div>
            <div
              className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
            >
              <p className="text-gray-400 ml-4">VAT(included)</p>
              <p className="text-black mr-4">20%</p>
            </div>
            <div
              className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
            >
              <p className="text-gray-400 ml-4">Total</p>
              <p className="text-indigo-600 mr-4">$2,665</p>
            </div>

            <div
              className="
                flex flex-col
                justify-between
                items-center
                px-3
                py-5
                w-full
              "
            >
              <div className="mb-5 flex flex-col min-w-full">
              <div className="p-4">
      <label htmlFor="walletAddress" className="font-medium text-black">Your Wallet Address</label>
      <input
        type="text"
        id="walletAddress"
        className="w-full py-2 border mt-3 border-gray-300 rounded-md"
        value={walletAddress}
        onChange={handleWalletAddressChange}
      />
      <label htmlFor="transactionId" className="font-medium text-black mt-4">Transaction ID</label>
      <input
        type="text"
        id="transactionId"
        className="w-full py-2 border mt-3 border-gray-300 rounded-md"
        value={transactionId}
        onChange={handleTransactionIdChange}
      />
    </div>
              </div>
              <button
                className="w-full bg-indigo-600 text-white px-2 py-2 rounded-md"
              >
                Apply code
              </button>
            </div>
            <div className="px-3 py-5 border-b-2 border-gray-200">
              <button
                className="
                  min-w-full
                  bg-gray-400
                  font-semibold
                  text-white
                  px-2
                  py-2
                  rounded-md
                "
              >
                Checkout
              </button>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Page 
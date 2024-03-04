"use client"
import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { User, Link } from "@nextui-org/react";
export default function Referral() {
  return (
    <div className="bg-blue-500 min-h-screen p-4">
      <div className="flex justify-between items-center text-white">
        <ArrowLeftIcon className="text-2xl" />
        <Link href="/dashboard/wallet" className="text-xl font-bold">My Wallet</Link>
        <Button className="bg-blue-500 text-white">Activity Rules</Button>
      </div>
      <div className="flex items-center justify-between bg-white p-4 rounded-md shadow mt-4">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage alt="Zieco Zeno" src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="font-bold text-lg">Zieco Zeno</span>
        </div>
        <BellIcon className="text-blue-500" />
      </div>
      <div className="bg-white p-4 rounded-md shadow mt-4">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold">Referral History</h2>
          <Button className="text-blue-500">View Details</Button>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>
            <div className="text-sm text-gray-500">Available Amount:</div>
            <div className="text-lg font-bold">$0</div>
          </div>
          <Button className="bg-blue-500 text-white">Withdraw</Button>
        </div>
        <div className="flex justify-between items-center border-t mt-4 pt-4">
          <div>
            <div className="text-sm text-gray-500">Received Amount:</div>
            <div className="text-lg font-bold">$0</div>
          </div>
          <div className="border-l pl-4">
            <div className="text-sm text-gray-500">Pending Verification Amount:</div>
            <div className="text-lg font-bold">$0</div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-md shadow mt-4">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold">My Invitations Information</h2>
          <h2 className="text-lg font-bold">My Referral</h2>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>
            <div className="text-sm text-gray-500">My Referral Code</div>
            <div className="text-lg font-bold">-----</div>
          </div>
          <div className="flex space-x-2">
            <ClipboardIcon className="text-blue-500" />
            <SquareIcon className="text-blue-500" />
          </div>
        </div>
        <div className="flex justify-between items-center border-t mt-4 pt-4">
          <div>
            <div className="text-sm text-gray-500">Invitation Link</div>
            <div className="text-lg font-bold">........</div>
          </div>
          <ClipboardIcon className="text-blue-500" />
        </div>
        <Button className="bg-blue-500 text-white w-full mt-4">Share Invitations</Button>
      </div>
    </div>
  )
}

function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function SquareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  )
}
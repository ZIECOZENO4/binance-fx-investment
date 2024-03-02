"use client"
import React from 'react'
import { Progress } from "@nextui-org/react";
export default function Upgrade() {
  return (
    <div className="flex flex-col items-center space-y-4 w-full">
      <ShieldCheckIcon className="h-10 w-10" />
      <div className="flex flex-col items-center space-y-2 text-center">
        <h2 className="text-lg font-semibold">Verification in progress</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Please wait for our team to confirm and verify your credentials.
        </p>
      </div>
      <div className="flex flex-col items-center space-x-2">
        <div className="h-4 w-4" />
        <span className="text-sm font-medium">Verifying</span>
      </div>
      <Progress
      size="md"
      isIndeterminate
      aria-label="verifying..."
      className="max-w-md"
    />
    </div>
  )
}

function ShieldCheckIcon(props) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
"use client"
import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Introduction() {
  return (
    <div className="bg-[#6c5ce7] min-h-screen flex flex-col items-center justify-center text-white">
 
      <main className="flex flex-col items-center justify-center p-10 text-center">
        <h1 className="text-4xl font-bold mb-3">Tier  2</h1>
        <h2 className="text-2xl font-semibold mb-6">Binance FX Pro</h2>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua erat volutpat.
        </p>
        <Button className="bg-[#fdcb6e] hover:bg-[#e2a365] text-[#6c5ce7] py-2 px-6 rounded">Get Started</Button>
      </main>
      <img
        alt="Bitcoin Mining Illustration"
        className="mt-10"
        height="300"
        src="/placeholder.svg"
        style={{
          aspectRatio: "500/300",
          objectFit: "cover",
        }}
        width="500"
      />
    </div>
  )
}

function CircleIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}
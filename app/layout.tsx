import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import SmNavbar from "@/components/Sm NavBar";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from "./loading";
import { Providers } from "./providers";
import { ToastContainer } from 'react-toastify';
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Binance  FX",
  description: "Invest and trade on Binance FX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics/>
      <body className={`${inter.className} overflow-x-hidden md:hidden`}>  
     
      <Providers>
            <div className=" w-[100vw] bg-black ">
              <div className='w-[100vw] z-30 sticky'>
            
                <NavBar />
                <SmNavbar />
              </div>
              <ToastContainer autoClose={10000} />
              <Suspense fallback={<Loading />}>
                {children}
              </Suspense>
             
            </div>
         
     
        </Providers>
        </body>
    </html>
  );
}

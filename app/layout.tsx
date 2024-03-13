import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import SmNavbar from "@/components/Sm NavBar";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from "./loading";
import { Providers as TenstackProviders } from "./tenstack-provider";
import { Providers } from "./providers";

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
      <body className={`${inter.className} overflow-x-hidden`}>  
      <Providers>
        <TenstackProviders>
     
            <div className=" w-[100vw] bg-black ">
              <div className='w-[100vw] z-30 sticky'>
                <NavBar />
                <SmNavbar />
              </div>
              <Suspense fallback={<Loading />}>
                {children}
              </Suspense>
            </div>
         
        </TenstackProviders>
        </Providers>
        </body>

    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
<<<<<<< HEAD
import { Providers as TenstackProviders } from "./tenstack-provider";
import { Providers } from "./providers";
=======
>>>>>>> c45e6e773f58bb64d9bcf080b739e8dee477bd9e
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
<<<<<<< HEAD
      <TenstackProviders>
=======
        <TenstackProviders>
>>>>>>> c45e6e773f58bb64d9bcf080b739e8dee477bd9e
          <Providers>
            <div className=" w-[100vw] bg-black ">
              <div className='w-[100vw] z-30 sticky'>
                <NavBar />
                <SmNavbar />
              </div>
<<<<<<< HEAD
=======

>>>>>>> c45e6e773f58bb64d9bcf080b739e8dee477bd9e
              <Suspense fallback={<Loading />}>
                {children}
              </Suspense>
            </div>
          </Providers>
        </TenstackProviders>
<<<<<<< HEAD
 
        </body>
=======
      </body>
>>>>>>> c45e6e773f58bb64d9bcf080b739e8dee477bd9e
    </html>
  );
}

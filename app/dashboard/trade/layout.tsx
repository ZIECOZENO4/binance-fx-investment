'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CryptoContext from "../../../CryptoContext";

import { Providers as TenstackProviders } from "../../tenstack-provider";
import Topbar from "@/components/dashboard/shared/Topbar";
import LeftSidebar from "@/components/dashboard/shared/Leftsidebar";
import Promos from "@/components/dashboard/shared/Rightsidebar";
import Bottombar from "@/components/dashboard/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });


const activeChain = "ethereum";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <CryptoContext>
      <div className={inter.className}>
      <Topbar />

<main className='flex flex-row'>
  <LeftSidebar />
  <section className='main-container'>
    <div className='w-[100vw] max-w-4xl'>{children}</div>
  
  </section>
   <Promos />
</main>
<div className="h-[100px] w-full bg-black md:hidden"/>
<Bottombar />
        </div>
        </CryptoContext>
  );
}

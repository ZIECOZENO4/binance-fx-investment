'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
  trustWallet,
 } from "@thirdweb-dev/react";
import Topbar from "../../components/dashboard/shared/Topbar";
import LeftSidebar from "../../components/dashboard/shared/Leftsidebar";
import { Providers as TenstackProviders } from "../tenstack-provider";
import Bottombar from "../../components/dashboard/shared/Bottombar";
import Promos from "@/components/dashboard/shared/Rightsidebar";
const inter = Inter({ subsets: ["latin"] });


const activeChain = "ethereum";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TenstackProviders>

      <div className={inter.className}>
      <Topbar />

<main className='flex flex-row'>
  <LeftSidebar />
  <section className='main-container'>
    <div className='w-[100vw] md:w-[50vw]'>{children}</div>
  
  </section>
  
</main>
<div className="h-[100px] w-full bg-black md:hidden"/>
<Bottombar />
        </div>
            </TenstackProviders>
  );
}

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

import Bottombar from "../../components/dashboard/shared/Bottombar";
const inter = Inter({ subsets: ["latin"] });


const activeChain = "ethereum";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThirdwebProvider
    activeChain="ethereum"
    clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}

    supportedWallets={[
      metamaskWallet(),
      coinbaseWallet({ recommended: true }),
      walletConnect(),
      localWallet(),
      embeddedWallet({
      }),
      trustWallet(),
    ]}

    >
      <div className={inter.className}>
      <Topbar />

<main className='flex flex-row'>
  <LeftSidebar />
  <section className='main-container'>
    <div className='w-full max-w-4xl'>{children}</div>
  
  </section>
   
</main>

<Bottombar />
        </div>
            </ThirdwebProvider>
  );
}

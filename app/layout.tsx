import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import {Providers} from "./providers";
import SmNavbar from "@/components/Sm NavBar";
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
      <body className={inter.className}>
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
      <Providers>
        <div className=" w-[100vw] bg-black ">
        <div className='w-[100vw] z-30 sticky'>
       <NavBar />   
       <SmNavbar /> 
        </div>
       
        {children}
        </div>
        </Providers>
        </ThirdwebProvider>
        </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import {Providers} from "./providers";
import SmNavbar from "@/components/Sm NavBar";

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

      <Providers>
        <div className=" w-[100vw] bg-black ">
        <div className='w-[100vw] z-30 sticky'>
       <NavBar />   
       <SmNavbar /> 
        </div>
       
        {children}
        </div>
        </Providers>
        </body>
    </html>
  );
}

'use client';
import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import ConnectButton from "./connectbutton";
import InvestDrop from './InvestDrop'; 
import NftsDrop from './NftsDrop';
import TradeDrop from './TradeDrop';
import BuyDrop from './BuyDrop';
import SellDrop from './SellDrop';
import CommunityDrop from './CommunityDrop';
import FeaturesDrop from './FeaturesDrop';
import MoreDrop from './MoreDrop';
import NewsDrop from './NewsDrop';
import SupportDrop from './SupportDrop';
import RegisterDrop from './RegisterDrop';
import LogoutDrop from './LogoutDrop';
import WalletDrop  from "./WalletDrop"
export default function SmNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "INVEST",  component: <InvestDrop />, path: "/dashboard/invest" },
    { name: "Trade",  component: <TradeDrop />, path: "/dashboard/trade" },
    { name: "NFTs",  component: <NftsDrop />, path: "/dashboard" },
    { name: "BUY",  component:  <BuyDrop />, path: "/dashboard/buy" },
    { name: "SELL",  component:   <SellDrop />, path: "/dashboard/sell" },
    { name: "COMMUNITY",  component: <CommunityDrop />, path: "/community" },
    { name: "FEATURES",  component:  <FeaturesDrop />, path: "/features" },
    { name: "WALLET",  component: <WalletDrop />, path: "/dashboard/wallet" },
    { name: "MORE",  component:   <MoreDrop />, path: "/more" },
    { name: "NEWS",  component:   <NewsDrop />, path: "/news" },
    { name: "SUPPORT",  component: <SupportDrop />, path: "/support" },
    { name: "REGISTER",  component:   <RegisterDrop />, path: "/" },
    { name: "LOG OUT",  component:  <LogoutDrop />, path: "/" },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="md:hidden bg-slate-700 bg-opacity-5 overflow-x-hidden"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className='text-slate-200' />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <img src="/images/bf.png" alt="Binance FX Logo" className='h-10 w-10 object-cover' />
          <Link href='/' className="font-bold text-inherit text-white"> BINANCE FX</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <img src="/images/bf.png" alt="Binance FX Logo" className='h-10 w-10 object-cover' />
          <p className="font-bold text-inherit text-white"> BINANCE FX</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button color="success" variant="flat">
            <ConnectButton />
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-slate-800">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link href={item.path} className="w-full">
              {item.component}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

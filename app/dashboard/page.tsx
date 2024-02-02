'use client'

import {
   useAddress,
   useUser,
   useLogin,
   useLogout,
   ConnectEmbed,
   useShowConnectEmbed,
 } from "@thirdweb-dev/react";
 import type { NextPage } from "next";
 import { useState } from "react";
 import Promos  from "../../components/dashboard/shared/Rightsidebar";
import  BalanceChart from  "../../components/dashboard/BalanceChart"
 const Home: NextPage = () => {
   const address = useAddress();
   const { login } = useLogin();
   const { logout } = useLogout();
   const { user, isLoggedIn } = useUser();
   const [secret, setSecret] = useState();
 
   const getSecret = async () => {
     const res = await fetch("/api/auth/secret");
     const data = await res.json();
     setSecret(data.message);
   };
 const showConnectedEmbed = useShowConnectEmbed ();
   return (
     <div>
 {
   showConnectedEmbed ? 
   (
    <div className=' flex w-full justify-center align-middle items-center p-8'>
    <ConnectEmbed />
    </div>
  
   ): (
      <div>
  <div className=' flex flex-row w-full'>
  <BalanceChart  />
  <div className=' w-[18vw] flex justify-end '>
  <Promos /> 
  </div>
  
  </div>
      </div>
   )
 }
     </div>
   );
 };
 
 export default Home;
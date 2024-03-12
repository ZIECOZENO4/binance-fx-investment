"use client"
import React from 'react'
import AdminPageVerification from '../../components/admin/verification'
import Link from 'next/link'
import {Button} from "@nextui-org/react";
const Page = () => {
  return (
    <div className=' text-white bg-black h-[100vh] align-middle items-center flex flex-row justify-center gap-8'>
        {/* <AdminPageVerification /> */}
        <h1 className=' text-white'>just for now no authentication till we are done with the site and is now needed.... so you are authorized to access bro.</h1>
    <Link href="/Notallowedbyclients/admins">
    <Button color="danger">
       Privacy
      </Button>  
    </Link>
    </div>
  )
}

export default Page
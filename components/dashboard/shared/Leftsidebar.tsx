'use client'

import Image from 'next/image'
import {sidebarLinks} from '../../../app/constants/index'
import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter} from 'next/navigation';
function LeftSidebar() {
const router = useRouter();
const pathname = usePathname();


  return (
    <section  className='  sticky left-0 top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto border-r border-r-dark-4 bg-dark-2 pb-5 pt-6 max-md:hidden'>
      <div className=' flex w-full flex-1 flex-col gap-4 px-6'>
      {
        sidebarLinks.map ((link) =>{
        const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;

        
        return(
         <Link href={link.route} key={link.label} className={`relative flex justify-start gap-4 rounded-lg p-4 ${isActive && ' bg-[#FFD700]'}`}>
          <Image src={link.imgURL} alt={link.label} width={28} height={28}/>
          <p className=' text-light-1 font-bold  max-lg:first-letter:hidden'>{link.label}</p>
         </Link> 
        )
        } )
      }
    </div>   
    <div className=' mt-10 px-6'>
   
    </div>
    </section>
 
  )
}

export default LeftSidebar

















'use client'
import Image from 'next/image'
import {bottomLinks} from '../../../app/constants/index'
import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter} from 'next/navigation';

function Bottombar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
     <section className='fixed bottom-0 z-10 w-full rounded-t-3xl bg-glassmorphism p-4 backdrop-blur-lg xs:px-7 md:hidden bg-gradient-to-t from-slate-600 to-slate-950'>
        <div className='flex items-center justify-between gap-3 xs:gap-5'>
         {
           bottomLinks.map((link) => {
             // Check if the current pathname exactly matches the link's route
             const isActive = pathname === link.route;
 
             return (
               <Link href={link.route} key={link.label} className={`relative flex flex-col items-center gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-1 ${isActive ? ' text-blue-700' : ''}`}>
                 <Image src={link.imgURL} alt={link.label} width={20} height={20}/>
                 <p className={`text-blue-700 text-light-1 max-sm:text-[20px] ${isActive ? ' text-black' : ''}`}>{link.label.split(/\s+/)[0]}</p>
               </Link>
             );
           })
         }
       </div>   
     </section>
  )
 }
 
 export default Bottombar;
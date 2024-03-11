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
    <div className='fixed bottom-0 z-10 w-full bg-glassmorphism p-2 backdrop-blur-lg xs:px-4 md:hidden'>
   <hr className=" bg-blue-600"/>
     <section className=' bg-gradient-to-t from-slate-600 to-slate-950'>
        <div className='flex items-center justify-between gap-3 xs:gap-3'>
         {
           bottomLinks.map((link) => {
        
             const isActive = pathname === link.route;
 
             return (
              <Link href={link.route} key={link.label} className={`relative flex flex-col items-center gap-2 rounded-lg ${isActive ? 'bg-blue-700 text-white' : 'bg-white text-black'}`}>
                 <Image src={link.imgURL} alt={link.label} width={30} height={30} className={`${isActive ? 'filter-invert' : ''}`} />
                 <p className={`${isActive ? 'text-white' : 'text-black'}`}>{link.label.split(/\s+/)[0]}</p>
              </Link>
             );
           })
         }
       </div>   
     </section>
    </div>
 
  )
 }
 
 export default Bottombar;
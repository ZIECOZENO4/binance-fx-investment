'use client';
import { motion } from "framer-motion";
import styles from '../../../app/constants/styles';
import { navVariants } from '../../../utils/motion';
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className=" absolute w-[50%] inset-0 gradient-01  " />
      <div className={`${styles.innerWidth} flex justify-between font-bold md:mx-auto md:flex md:justify-between md:gap-8`}>
        <h2 className=" text-sm md:font-extrabold md:text-[30px] md:leading-[34px] text-black"> BITCOIN  AND CRYPTO CAMP</h2>
<Link href='/sidebar'>
<UserButton  afterSignOutUrl="/siginup"/>
              <Image
                src="/framer public/menu.svg"
                alt="menu"
                className="md:w-[24px] md:h-[24px] h-5 w-5 object-contain text-black bg-blue-900 md:ml-72 hover:text-green-500 hover:bg-green-700 hover:transition"
                width={60}
                height={10}
              />

   </Link>
      </div>
    </motion.nav>
  );
}

export default Navbar;

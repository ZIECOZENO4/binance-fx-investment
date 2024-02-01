'use client';
import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion.js";
import Link from "next/link";
import Image from "next/image";

const Bonus = () => (
  <motion.footer
  variants={footerVariants}
  initial='hidden'
  whileInView='show'
  className={`sm:p-16 xs:p-8 px-6 md:py-12 md:pt-3 md:pb-16 relative pb-4  bg-sky-600 bg-opacity-50 `}
  >
  <div className="footer-gradient" />
  <div className=" md:w-[100%] 2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8 md:-mb-5 ">
  <div className="flex items-center justify-between flex-wrap gap-5">
  <h4 className=" font-bold md:text-[44px] text-[20px] text-slate-300">NEW USER CLAIMS</h4>
 
  <Link href='https://x-bit.vercel.app/communities'>
   <button className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-12">
  <Image
  src="/images/bf.png"
  alt="clams"
  className="w-[24px] h-[24px] object-contain"
  height={24}
  width={24}
  />
    <span className="font-bold md:text-[16px] text-[12px] text-green-400">10 USDT
  </span>
  </button>
  </Link>

  </div>
  </div>
  </motion.footer>
);

export default Bonus;
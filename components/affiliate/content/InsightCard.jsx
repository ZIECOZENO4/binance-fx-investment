'use client';
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";
const InsightCard = ({ imgUrl, title, subtitle, index}) => (
  <motion.div
  variants={fadeIn('up', 'spring', index * 0.5, 1)}
  className="flex md:w-[90vw] flex-col md:flex-row gap-4 mb-9"
  >
<Image
src={imgUrl}
alt="crypto insights"
className="md:w-[270px] w-full h-[150px] md:h-[270px] rounded-[32px] object-cover "
height={150}
width={270}
/>
<div className="w-full flex justify-center  items-center">
<div className=" flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
<h3 className="font-normal text-[24px] md:text-[32px]">{title}</h3>
<p className="mt-[16px] font-normal text-[18px] md:text-[20px] text-secondary-white">{subtitle}</p>
</div>
<div className=" md:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
<Image
src="/framer public/arrow.svg"
alt="arrow"
className="w-[40%] h-[40%] object-contain"
height={40}
width={40}
/>
</div>
</div>


  </motion.div>
);

export default InsightCard;

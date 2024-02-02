'use client';
import { motion } from "framer-motion";
import { TitleText, TypingText } from '@/app/components/framer motion';
import {staggerContainer, fadeIn} from '../../utils/motion';
import Image from "next/image";
const World = () => (
  <section className={`px-6 relative z-10 mt-[20px] pt-11`}>
<motion.div
variants={staggerContainer}
initial='hidden'
whileInView='show'
className={`2xl:max-w-[1280px] w-full md:h-[500px] h-[50px] lg:w-[80%]  md:mb-5 mx-auto flex flex-col gap-8 md:-mt-10`}
>
<TypingText
title='CURRENT TRADER AROUND THE WORLD'
className='md:flex md:ml-[10px]'
/>
<TitleText 
title={(
  <p>Track Your Fellow Traders Around The World And Expand Your Partnership </p>
)}
  textStyles='text-center' 
/>
<motion.div
variants={fadeIn('up', 'tween', 0.3, 1)}
className="relative mt-[68px] flex w-full  "
>


<div className=" absolute w-[100vw] h-[100vh] flex flex-auto">
<div className="  rounded-full bg-[#5d6680] flex-center p-[200px] ">
<Image
src="/framer public/people-01.png"
alt="people"
height={100}
width={100}
/>
</div>

<div className=" rounded-full bg-[#5d6680]  h-[10px] min-h-[10px]">
<Image
src="/framer public/people-02.png"
alt="people"
height={100}
width={100}
/>
</div>

<div className="  rounded-full bg-[#5d6680] ">
<Image
src="/framer public/people-03.png"
alt="people"
className="  align-bottom  flex justify-end"
height={100}
width={100}
/>
</div>

</div>
<Image
src="/framer public/map.png"
alt="trade map"
className="w-full h-full object-cover mt-8"
height={1000}
width={1000}
/>


</motion.div>

</motion.div>
  </section>
);

export default World;

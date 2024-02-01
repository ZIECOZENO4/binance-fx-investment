'use client';
import { motion } from "framer-motion";
import styles from '../../app/index';
import { NewFeatures, TitleText, TypingText } from '@/app/components/framer motion';
import {staggerContainer, fadeIn, planetVariants} from '../../utils/motion';
import { newFeatures } from "@/constants";
import Image from "next/image";

const GetStarted = () => (
  <section className={`px-6 relative z-10 mt-[20px] pt-11 mb-10 pb-10 `}>
<motion.div
variants={staggerContainer}
initial='hidden'
whileInView='show'
className={`${styles.innerWidth} mx-auto flex md:flex-row flex-col gap-8  md:-mt-10`}
>

<motion.div
variants={fadeIn('right', 'tween', 0.2, 0.1)}
className=" flex-[0.75] flex justify-center flex-col mb-9 pb-9 md:mb-20 md:pb-[20%]"
>
<TypingText
title="see the latest updates in the crypto world and most especially from the coins we trade here"
className='uppercase mt-[20px]'
/>
<TitleText 
title={<p className=" md:text-[28px] md:mb-5 flex justify-center">CHECKOUT THE LATEST NEWS IN CRYPTO</p>} />
<div className=" mt-[38px] flex flex-wrap  justify-between gap-[24px] md:gap-[5px]">
{newFeatures.map((feature) => (
  <NewFeatures
  key={feature.title}
{...feature} />
))}
</div>
</motion.div>
<motion.div
variants={planetVariants("right")}
className={`flex-1 ${styles.flexCenter}`}
>
<Image 
src="/framer public/new.png"
alt="let's get started"
className=" w-[90%] h-[90%]  object-contain mb-9"
height={700}
width={700}
/>
</motion.div>
</motion.div>
  </section>
);

export default GetStarted;

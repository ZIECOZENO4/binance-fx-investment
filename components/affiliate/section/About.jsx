'use client';
import { motion } from "framer-motion";
import styles from '../../../app/constants/styles';
import { fadeIn, staggerContainer} from '../../../utils/motion';

import { TypingText } from "../content";

const About = () => (
  <section className=" {`${styles.paddings}relative z-10}">
<div className=" hidden  md:gradient-02 z-10"/>
<motion.div
variants={staggerContainer}
initial='hidden'
whileInView='show'
viewport={{once: false, amount:0.25}}
className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
>
<TypingText 
title="| ALL YOU NEED TO KNOW ABOUT CRYPTO AND ABOUT OUR BITCOIN CRYPTO CAMP"
textStyles='text-center'
/>
<motion.p
variants={fadeIn('up','tween', 0.2, 1)}
className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white mx-4"
>
The first thing to know about this webite, is that is a crypto website, where people buy and sell their coins, which they either bought or mined. Here also you can also buy and mine coins here, those avilable at the options below for now, because with time we will add more coins, and increase your chance of making more progress in the  crypto world. 
So let&apos;s get to work.
</motion.p>
<motion.img 
variants={fadeIn('up', 'tween', 0.3, 1)}
src='framer public/arrow-down.svg'
alt="arrow down"
className="w-[18px] h-[28] object-contain mt-[32px] "
/>


</motion.div>

  </section>
);

export default About;
 
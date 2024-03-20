'use client';
import { motion } from "framer-motion";
import styles from './index';
import { fadeIn, staggerContainer} from '../../utils/motion'
import { TypingText } from "../../components/affiliate/content/CustomTexts";

const Note = () => (
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
title="| BINANCE FX THE ULTIMATE CRYPTO INVESTMENT PLATFORM"
textStyles='text-center'
/>

<motion.img 
variants={fadeIn('up', 'tween', 0.3, 1)}
src='/assets/arrow-down.svg'
alt="arrow down"
className="w-[18px] h-[28] object-contain mt-[32px] "
/>


</motion.div>

  </section>
);

export default Note;
 
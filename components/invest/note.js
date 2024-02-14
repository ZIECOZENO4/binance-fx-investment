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
title="| BINANCE FX THE ULTIMATE CRYPTO INVESTMENT APP"
textStyles='text-center'
/>
<motion.p
variants={fadeIn('up','tween', 0.2, 1)}
className="mt-[8px] font-normal sm:text-[10px] md:text-[20px]  text-[15px] text-center text-secondary-white mx-4"
>
Betting and gambling in sports, particularly in predicting game outcomes, is a complex process that involves understanding odds, assessing teams or players, and making informed decisions based on various factors. It&#39;s important to note that while there are several methods and tools available to aid in making predictions, no system is infallible and outcomes can never be guaranteed.Betting sites often offer tips and insights to help bettors make informed decisions. These can range from detailed previews of events, insights into betting strategies, and comments from other bettors olbg.com.

In conclusion, betting and gambling in sports and predicting game outcomes involve a combination of understanding the sport, using data-driven tools and insights, and making informed decisions based on a variety of factors. It&#39;s important to gamble responsibly and only bet what you can afford to lose olbg.com.
</motion.p>
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
 
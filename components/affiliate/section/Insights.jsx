'use client';
import { motion } from "framer-motion";
import styles from '../../app/index';
import { InsightCard,  TitleText, TypingText } from '@/app/components/framer motion';
import {staggerContainer} from '../../utils/motion';
import { insights} from "@/constants";

const Insights = () => (
  <section className={`px-6 relative z-10 mt-[20px] pt-11`}>
<motion.div
variants={staggerContainer}
initial='hidden'
whileInView='show'
className={`${styles.innerWidth} mx-auto flex flex-col gap-8 md:-mt-10`}
>
<TypingText 
title=' AVAILABLE INSIGHTS'
textStyles='text-center'
/>
<TitleText 
title='Insights On The Crypto World'
textStyles='text-center'
/>
<div className=" mt-[50px] flex  flex-col gap-[30px]">
{insights.map((insight, index) => (
<InsightCard 
key={`insight-${index}` }
{...insight} 
index={index + 1}
/>
))}
</div>


</motion.div>
  </section>
);

export default Insights;

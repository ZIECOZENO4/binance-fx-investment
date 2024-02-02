'use client';
import { useState} from 'react';
import { motion } from "framer-motion";
import styles from '../../../app/contants/styles';
import { ExploreCard, TitleText, TypingText } from '../content';
import {staggerContainer} from '../../../utils/motion';
import {exploreWorlds} from '../../constants/index'
const Explore = () =>{ 
  const [active, setActive] = useState('world-2')
  return(
  <section className={`${styles.paddings}`} id='explore'>
  <motion.div
  variants={staggerContainer}
  initial='hidden'
  whileInView='show'
  viewport={{once: false, amount:0.25}}
  className={`${styles.innerWidth} mx-auto flex flex-col`}
  
  >
  <TypingText
  title='CRYPTO COINS AVAILABLE HERE'
  textStyles='text-center'
  />
  <TitleText 
  title={<p>BUY AND TRADE YOUR COIN <span className=' md:block hidden text-center align-middle'>WITH US</span></p>}
  textStyles='text-center'
  />
<div className=' mt-[50px] flex md:flex-row flex-col min-h-[70vh] md:min-h-[50vh] gap-5'>
{exploreWorlds.map((world, index) => (
  <ExploreCard 
  key={world.id}
  {...world}
  index={index} 
  active={active}
  handleClick={setActive}
  
  />
))}
</div>



  </motion.div>
  </section>
  )};

export default Explore;

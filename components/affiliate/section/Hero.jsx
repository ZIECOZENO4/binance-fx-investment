'use client';
import { motion } from "framer-motion";
import styles from '../../app/index';
import { slideIn, staggerContainer, textVariant} from '../../utils/motion';
import Image from "next/image";
const Hero = () => (
  <section className={`${styles. yPaddings} `}>
<motion.div 
variants={staggerContainer}
initial="hidden"
whileInView='show'
viewport={{once: false, amount:0.25}}
className={`${styles.innerWidth} mx-auto flex flex-col`}
>
<div className=" flex justify-center items-center flex-col relative z-10">
<motion.h1 
variants={textVariant(1.1)}
className={styles.heroHeading}
>
CRYPTO COIN
</motion.h1>
<motion.div 
variants={textVariant(1.2)}
className=" flex flex-row justify-center items-center"
>
<h1 className={styles.heroHeading}>
ca
</h1>
<h1 className={styles.heroHeading}>M</h1>
<h1 className={styles.heroHeading}>p</h1>
</motion.div>
</div>
<motion.div
variants={slideIn('left', 'tween', 0.2, 1)} 
className=" relative  md:-mt-[20px] -mt-[12px] h"
>
<div className="w-full absolute h-[300px] hero-gradient rounded--[140px] z-[0] -top-[30px]"/>
<Image 
src='/framer public/top.png'

alt="cover image"
className=" object-cover w-full sm:[500px] h-[350px] rounded-tl-[140px] z-10 relative md:w-[300px] "
width={600}
height={500}
/>
<a href="#explore">
<div className=" w-full  justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-20 hidden">
<Image
src='/framer public/stamp.png'
alt="stamp"
className=" sm:w-[155px] w-[100px] sm:h-[155px} h-[100px] object-contain "
height={50}
width={50}
/>
</div>
</a>

</motion.div>
</motion.div>
  </section>



);

export default Hero;

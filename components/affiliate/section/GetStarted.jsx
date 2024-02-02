'use client';
import { motion } from "framer-motion";
import styles from '../../app/index';
import { StartSteps, TitleText, TypingText } from '@/app/components/framer motion';
import { staggerContainer, fadeIn, planetVariants } from '../../utils/motion';
import { startingFeatures } from '../../constants/index'
import Image from "next/image";

const GetStarted = () => (
  <section className={`px-6 relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      className={`${styles.innerWidth} mx-auto flex md:flex-row flex-col gap-8 md:-mt-10`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image
          src="/framer public/started.jpg"
          alt="let's get started"
          className=" w-[100%] h-[100%]  object-contain"
          height={600}
          width={600}
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 0.1)}
        className=" flex-[0.75] flex justify-center flex-col"
      >
        <TypingText
          title="let's start trading our crypto coins with a few steps."
          className='uppercase'
        />
        <TitleText
          title={<p className=" md:text-[20px]">HOW TO GET STARTED ON OUR CRYPTO CAMP</p>} />
        <div className=" mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={index + 1}
              text={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;

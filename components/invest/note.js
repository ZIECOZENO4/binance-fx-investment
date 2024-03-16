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
Binance FX is a compelling investment platform that allows users to invest in various cryptocurrencies, including USDT, with the added benefit of integrating multiple wallets for fast transactions. This platform not only offers the convenience of investing in a wide range of cryptocurrencies but also provides users with the opportunity to enjoy bonuses, such as the 3 USDT bonus within the Binance Pay section. This bonus is designed to enhance the user experience and promote the adoption of Binance Pay's seamless payment solutions. The integration of multiple wallets and the provision of bonuses like the 3 USDT bonus make Binance FX an attractive option for both new and experienced investors looking to diversify their crypto investments.

<ul>
 <li>Create an Account: First, you need to sign up on the Binance FX platform. This involves providing your personal details and verifying your identity.</li>
 <li>Deposit Funds: Once your account is set up, you can deposit your USDT or any other supported cryptocurrency into your Binance FX wallet. This can be done through various methods, including bank transfers, credit/debit cards, or other cryptocurrencies.</li>
 <li>Choose Your Investment: Binance FX offers a variety of investment options. You can explore different cryptocurrencies and select the ones you wish to invest in.</li>
 <li>Invest: After selecting your investment, follow the on-screen instructions to complete the investment process. This may involve setting your investment amount and confirming the transaction.</li>
 <li>Track Your Investment: Once your investment is made, you can track its performance through the Binance FX dashboard. This allows you to monitor the value of your investments and make informed decisions about future investments.</li>
</ul>

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
 
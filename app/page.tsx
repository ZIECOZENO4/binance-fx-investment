"use client"
import Hero1  from "../components/Hero1"
import { HowToTrade } from "@/components/Trade1";
import { HowToInvest } from "@/components/invest1";
import NewToCrypto from "@/components/Newtocrypto";
import GettingStarted from "@/components/gettingstarted";
import PlayStore from "@/components/playstore"
import Banner from "@/components/baner"
import Bonus from "@/components/bonus"
import Newsletter from "@/components/newsletter"
import Properties from "@/components/properties";
import Plan from "@/components/plans";
import Payment from "../components/payment";
import Trending from "@/components/trending table";
import  FAQ  from "@/components/FAQ";
import Footer from "../components/Footer/Footer"
import WhatIsBinance from "@/components/whatisbinancefx";
import Certification from "@/components/certification";
import Register from "@/components/register";
import TradingViewWidget from "../components/Chart";
import Statistic from "@/components/statistics";
import Rate3 from "@/components/rate3";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { Testimonial } from "@/components/component/testimonial";
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
export default function Home() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  return (
    <motion.section
    style={{
      backgroundImage,
    }}
    className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
  >
<div className=" m-0 p-0 overflow-x-hidden">
<Hero1 /> 
<Properties />
<Register />
<Trending />
<Plan  />
<HowToTrade />
<HowToInvest />
<NewToCrypto />
<TradingViewWidget />
<GettingStarted />
<WhatIsBinance />
<Certification />
<Testimonial />
<FAQ />
<Newsletter />
<PlayStore />
<Banner />
<Bonus />
<Payment />
<Footer />
</div>
      <div className="absolute inset-0 z-0">
      <Canvas>
        <Stars radius={50} count={2500} factor={4} fade speed={2} />
      </Canvas>
    </div>
  </motion.section>
  );
}

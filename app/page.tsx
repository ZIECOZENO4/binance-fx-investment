
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
import FAQ from "@/components/FAQ";
import Footer from "../components/Footer/Footer"
import WhatIsBinance from "@/components/whatisbinancefx";
import Certification from "@/components/certification";
import Register from "@/components/register";
import TradingViewWidget from "@/components/chart";
export default function Home() {
  return (
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
<FAQ />
<Newsletter />
<PlayStore />
<Banner />
<Bonus />
<Payment />
<Footer />
</div>
  );
}

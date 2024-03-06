import {

bs,fx,  One,  zenoweb,   aba, AccountImage,  
  
} from "../../public/assets/index";


       
          

        
const experiences = [
    {
      title: "OPEN AN ACCOUNT",
      company_name: "Help Team",
      icon: AccountImage,
      iconBg: "#383E56",
      date: "Step 1",
      points: [
        "To open an account on Binance FX.",
        "simply click on the “Invest or Register” button on the main page after providing your email.",
        "The next page is the registration form that you need to fill out.",
        "This shouldn’t take more than a few minutes.",
        "Once you’ve done that, you’ll receive an email from us, and you’re done.",
        "You are now an official member of Binance FX.",
        "Subcribe to our news letter to get vital market informations from Binance FX.",
      ],
    },
    {
      title: "LOGIN TO INVESTOR'S AREA",
      company_name: "Help Team",
      icon: zenoweb,
      iconBg: "#E6DEDD",
      date: "Step 2",
      points: [
        "Once you’ve opened an account,  ",
        "The next thing would be to familiarize yourself with how different sections of your account works. ",
        "To start, go to the login page and enter your registration username and chosen password.",
        "After you are logged in, you can explore your account and get a feel of how everything works, such as making investing, trading, our NFTs, deposits, requesting withdrawals, etc..",
      ],
    },
    {
      title: "MAKE YOUR FIRST DEPOSIT",
      company_name: "Help Team",
      icon: bs,
      iconBg: "#383E56",
      date: "Step 3",
      points: [
        "To start growing your Capital, you need to make a deposit.",
        "You can do this from the deposit section of your account or by just connecting your wallet.",
        " There are 4 investment plans ranging from 2% - 30% Steady and Stable return on your investment.",
        "The minimum deposit amount is $1, and you are allowed to make as many deposits as you want.",
        "However, every deposit is treated as a separate investment.",
      ],
    },
    {
      title: "WATCH YOUR CAPITAL GROW",
      company_name: "Help Team",
      icon:aba,
      iconBg: "#E6DEDD",
      date: "Step 4",
      points: [
        "After you have made a deposit.  ",
        "there is nothing else to do except watch your earnings grow in your account hourly or daily or monthly.",
        "This can be fun, because it means you can be anywhere you want to be in the world, and your funds will still be growing in your account every day, even without you doing anything!",
        "Our team will be updating you on your investment standings.",
      ],
    },
    {
      title: "REQUEST WITHDRAWALS",
      company_name: "Help Team",
      icon: fx,
      iconBg: "#E6DEDD",
      date: "Step 5",
      points: [
        "Solving Complex computer Issues and teaching others how to do so too.",
        "It only takes a few seconds to initiate your withdrawals and have your earnings paid to you. All of our withdrawals are instant, and your withdrawal will be sent to the Wallet address you provided during registration.",
        "Don't authorize anyone to place withdrawal for you.",
        "Security threats nay lead to account suspension.",
      ],
    },
    {
      title: "REFER ANYONE",
      company_name: "Help Team",
      icon: One,
      iconBg: "#E6DEDD",
      date: "Step 6",
      points: [
        "You don’t need an active deposit to take advantage of our referral program.",
        "As long as you are a registered member, you only need to use your personal affiliate link from your member's area and share it with your friends. ",
        " You will get rewarded as soon as they join and make their first deposit!",
        "Don't forget to claim your free 1o USDT as a new member on Binance FX.",
      ],
    },
  ];
  export {experiences};

  export const sidebarLinks = [
    {
      imgURL: "/assets/asset.svg",
      route: "/dashboard",
      label: "ASSETS",
    },
    {
      imgURL: "/assets/invest.svg",
      route: "/dashboard/invest",
      label: "INVEST",
    },
    {
      imgURL: "/assets/trade.svg",
      route: "/dashboard/trade",
      label: "TRADE",
    },
    {
      imgURL: "/assets/earn2.svg",
      route: "/earn",
      label: "EARNS",
    },
    {
      imgURL: "/assets/wallet.svg",
      route: "/dashboard/wallet",
      label: "WALLET",
    },
    {
      imgURL: "/assets/notification.svg",
      route: "/dashboard/notifications",
      label: "Notifications",
    },
    {
      imgURL: "/assets/setting.svg",
      route: "/dashboard/invite",
      label: "invite",
    },
  ];
  
  
  export const bottomLinks = [
    {
      imgURL: "/assets/asset.svg",
      route: "/dashboard",
      label: "ASSETS",
    },
    {
      imgURL: "/assets/invest.svg",
      route: "/dashboard/invest",
      label: "INVEST",
    },
    {
      imgURL: "/assets/trade.svg",
      route: "/dashboard/trade",
      label: "TRADE",
    },
    {
      imgURL: "/assets/wallet.svg",
      route: "/dashboard/wallet",
      label: "WALLET",
    },
  ];
  
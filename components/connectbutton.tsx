'use client'
import {
    ThirdwebProvider,
    ConnectWallet,
    metamaskWallet,
    coinbaseWallet,
    walletConnect,
    localWallet,
    embeddedWallet,
    trustWallet,
  } from "@thirdweb-dev/react";
  
  export default function ConnectButton() {
    return (
      <ThirdwebProvider
        activeChain="ethereum"
        clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
  
        supportedWallets={[
          metamaskWallet(),
          coinbaseWallet({ recommended: true }),
          walletConnect(),
          localWallet(),
          embeddedWallet({
            auth: {
              options: [
                "email",
                "google",
                "apple",
                "facebook",
              ],
            },
          }),
          trustWallet(),
        ]}
  
      >
        <ConnectWallet
          theme={"dark"}
          modalTitle={
            "Connect Your Wallet to use Binance FX"
          }
          auth={{ loginOptional: false }}
          modalSize={"wide"}
          welcomeScreen={{
            title:
              "Welcome to the world of Crypto Trading and investment",
            subtitle:
              "Connect your wallet to Binance FX to get started ",
            img: {
              src: "https://th.bing.com/th/id/OIP.cwT6hQVMsCACBKmfZJqusAHaE8?pid=ImgDet&w=179&h=119&c=7",
              width: 200,
              height: 150,
            },
          }}
          modalTitleIconUrl={
            "https://th.bing.com/th/id/R.df7060b4ce718121e30f4d9287982796?rik=NgAdDtzhiI37IA&pid=ImgRaw&r=0https://th.bing.com/th/id/R.df7060b4ce718121e30f4d9287982796?rik=NgAdDtzhiI37IA&pid=ImgRaw&r=0https://th.bing.com/th/id/R.df7060b4ce718121e30f4d9287982796?rik=NgAdDtzhiI37IA&pid=ImgRaw&r=0https://th.bing.com/th/id/R.df7060b4ce718121e30f4d9287982796?rik=NgAdDtzhiI37IA&pid=ImgRaw&r=0https://th.bing.com/th/id/R.df7060b4ce718121e30f4d9287982796?rik=NgAdDtzhiI37IA&pid=ImgRaw&r=0"
          }
          termsOfServiceUrl={""}
          privacyPolicyUrl={""}
        />
      </ThirdwebProvider>
    );
  }
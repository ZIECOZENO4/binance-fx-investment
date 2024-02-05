
'use client'
import {NextUIProvider} from '@nextui-org/react'
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

 import { ClerkProvider } from "@clerk/nextjs";
 import { dark } from "@clerk/themes";

 
export function Providers({children}: { children: React.ReactNode }) {
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
      }),
      trustWallet(),
    ]}

    >
          <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
    <NextUIProvider>
      
      {children}
    </NextUIProvider>
    </ClerkProvider>
    </ThirdwebProvider>
  )
}
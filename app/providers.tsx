
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

 import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <ClerkProvider   publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    appearance={{
      baseTheme: dark,
    }}
  >
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
 
    <NextUIProvider>
    <QueryClientProvider client={queryClient}>
    {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    
    </NextUIProvider>

    </ThirdwebProvider>
    </ClerkProvider>
  )
}
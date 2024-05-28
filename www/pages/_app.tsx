import "../styles/globals.css";
import "@interchain-ui/react/styles";
import "@interchain-ui/react/globalStyles";

// import { assetLists, chains } from "@chain-registry/v2";
import { MainWalletBase } from "@cosmos-kit/core";
import { wallets as cosmostationWallets } from "@cosmos-kit/cosmostation";
import { wallets as keplrWallets } from "@cosmos-kit/keplr";
import { wallets as leapWallets } from "@cosmos-kit/leap";
// import { ChainProvider } from "@cosmos-kit/react";
import { ThemeProvider, useTheme } from "@interchain-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";

const defaultWallets: MainWalletBase[] = [
  ...keplrWallets,
  ...leapWallets,
  ...cosmostationWallets,
];

function ChainRegistryApp({ Component, pageProps }: AppProps) {
  const { themeClass } = useTheme();
  // const [wallets, setWallets] = useState<MainWalletBase[]>(defaultWallets);
  // const [loadingWallets, setLoadingWallet] = useState<boolean>(true);

  // useEffect(() => {
  //   setLoadingWallet(false);
  //   setWallets(defaultWallets);
  // }, []);

  return (
    <>
      <Head>
        <title>Chain Registry</title>
        <meta name="description" content="Your Gateway to the Interchain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider>
        <div className={themeClass}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
      {/* <ChainProvider
        chains={chains}
        assetLists={assetLists}
        wallets={defaultWallets}
        subscribeConnectEvents={true}
        defaultNameService={"stargaze"}
        endpointOptions={{
          isLazy: true,
          endpoints: {
            cosmoshub: {
              rpc: [
                {
                  url: "https://rpc.cosmos.directory/cosmoshub",
                  headers: {},
                },
              ],
            },
          },
        }}
      >
        
      </ChainProvider> */}
    </>
  );
}

export default ChainRegistryApp;

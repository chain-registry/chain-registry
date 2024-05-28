import { chains } from "@chain-registry/v2/mainnet";
import { assetLists } from "@chain-registry/v2/mainnet";
import type { AssetList } from "@chain-registry/v2-types";
import { Box, Container, Text, useTheme } from "@interchain-ui/react";
import * as React from "react";

import { Layout } from "@/components";
import {
  ChainRegistryGraphic,
  ChainRegistryGraphicDark,
} from "@/components/icons";
import { ChainList } from "@/components/registry";

export default function RegistryPage() {
  const { theme } = useTheme();
  const assetListMap = React.useMemo(() => {
    let result: Record<string, AssetList> = {};

    for (const chain of chains) {
      if (result[chain.chainName]) {
        continue;
      }

      const found = assetLists.find((a) => a.chainName === chain.chainName);

      if (found) {
        result[chain.chainName] = found;
      }
    }

    return result;
  }, []);

  return (
    <Layout>
      <Container maxWidth="$containerMd">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="$8"
          p="$10"
        >
          <Text
            as="h1"
            color="$text"
            textAlign="center"
            fontSize={{
              mobile: "$6xl",
              tablet: "$8xl",
            }}
          >
            Integrate 150+ networks with the Interchain Registry
          </Text>

          <Box fontSize="300px">
            {theme === "light" ? (
              <ChainRegistryGraphic />
            ) : (
              <ChainRegistryGraphicDark />
            )}
          </Box>

          <Text
            as="p"
            color="$textSecondary"
            textAlign="center"
            fontSize={{
              mobile: "$sm",
              tablet: "$md",
            }}
            attributes={{
              maxWidth: "70%",
            }}
          >
            Find information such as active RPCs, chain ID, symbol, block
            explorers and testnet faucets about any Cosmos chains. Add any
            custom networks to your Cosmos wallet in one click.
          </Text>
        </Box>

        {/* Section chain list */}
        <Box as="section">
          <ChainList chains={chains} assetListMap={assetListMap} />
        </Box>
      </Container>
    </Layout>
  );
}

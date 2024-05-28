import { AssetList, Chain } from "@chain-registry/v2-types";
import {
  Avatar,
  Box,
  Button,
  Stack,
  Text,
  useColorModeValue,
} from "@interchain-ui/react";

export interface ChainCardProps {
  chain: Chain;
  assetList: AssetList;
  onConnect?: (chain: Chain) => void;
}

const ChainDataItem = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Box
      p="$6"
      width="120px"
      borderRadius="$lg"
      backgroundColor={useColorModeValue("$cardBg", "$gray900")}
      textAlign="center"
    >
      {children}
    </Box>
  );
};

export const ChainCard = (props: ChainCardProps) => {
  return (
    <Box
      p={{
        mobile: "$6",
        tablet: "$10",
      }}
      height="120px"
      borderRadius="$lg"
      backgroundColor={useColorModeValue("$white", "$gray800")}
      display="flex"
      flexWrap={{
        mobile: "wrap",
        tablet: "nowrap",
      }}
      justifyContent="space-between"
      alignItems="center"
      borderWidth="1px"
      borderStyle="solid"
      borderColor={{
        base: useColorModeValue("$gray100", "transparent"),
        hover: useColorModeValue("$gray900", "$gray400"),
      }}
      transition="all 0.2s"
    >
      <Stack
        space="$4"
        attributes={{
          flexShrink: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          name={props.chain.prettyName ?? ""}
          size="md"
          src={props.chain.logoURIs?.png ? props.chain.logoURIs.png : ""}
        />

        <Text fontSize="$lg" fontWeight="$semibold">
          {props.chain.prettyName}
        </Text>
      </Stack>

      {/* Chain info + action */}
      <Stack
        space="$10"
        attributes={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack space="$4">
          <ChainDataItem>
            <Text fontSize="$xs" color="$textSecondary">
              Chain ID
            </Text>
            <Text fontSize="$xs" color="$text" fontWeight="$medium">
              {props.chain.chainId}
            </Text>
          </ChainDataItem>

          <ChainDataItem>
            <Text fontSize="$xs" color="$textSecondary">
              Currency
            </Text>

            {props.assetList ? (
              <Text fontSize="$xs" color="$text" fontWeight="$medium">
                {props.assetList.assets[0].symbol}
              </Text>
            ) : null}
          </ChainDataItem>
        </Stack>

        <Button
          variant="solid"
          intent="tertiary"
          size="sm"
          onClick={() => props.onConnect?.(props.chain)}
        >
          Add chain
        </Button>
      </Stack>
    </Box>
  );
};

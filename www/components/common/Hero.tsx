import {
  Box,
  Button,
  Container,
  Text,
  useColorModeValue,
} from "@interchain-ui/react";
import Link from "next/link";

import Connect from "./Connect";

export function Hero() {
  return (
    <Container maxWidth="$containerMd">
      <Box
        display="flex"
        pt={{
          mobile: "$10",
          tablet: "$14",
        }}
        my={{
          mobile: "$8",
          tablet: "$14",
        }}
      >
        <Box>
          <Text
            as="h1"
            color={useColorModeValue("$purple400", "$purple50")}
            fontSize={{
              mobile: "$md",
              tablet: "$lg",
            }}
            fontWeight="$medium"
          >
            The Essential Hub for Cosmos Developers
          </Text>

          <Text
            as="h2"
            fontSize={{
              mobile: "$6xl",
              tablet: "$10xl",
              desktop: "64px",
            }}
            fontWeight="$medium"
            attributes={{
              my: {
                mobile: "$4",
                tablet: "$10",
              },
            }}
          >
            Your Gateway to the Interchain
          </Text>
          <Text
            color="$gray500"
            fontSize="$sm"
            lineHeight="$tall"
            attributes={{
              display: "block",
              marginTop: "$7",
            }}
          >
            The Chain Registry is a comprehensive and organized resource
            offering detailed information on Cosmos blockchains, assets, and IBC
            channels. Designed with community input, it standardizes data to
            enhance your development experience across diverse projects.
          </Text>
          <Link href="/registry" style={{ display: "inline-block" }}>
            <Button intent="tertiary" attributes={{ mt: "$10" }}>
              Explore the Registry
            </Button>
          </Link>
        </Box>

        <Box
          display={{ mobile: "none", tablet: "block" }}
          maxWidth="250px"
          flexShrink={0}
        >
          <Connect />
        </Box>
      </Box>
    </Container>
  );
}

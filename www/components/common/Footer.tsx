import { Box, Container, Text, useColorModeValue } from "@interchain-ui/react";
import Link from "next/link";

import { CosmologyNameIcon } from "@/components/icons";

export function Footer() {
  return (
    <Container maxWidth="$containerMd">
      <Box
        height="100px"
        gap="$6"
        pt="$10"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderTopWidth="1px"
        borderTopColor={useColorModeValue("$gray100", "$divider")}
        borderTopStyle="solid"
      >
        <Text color="$text" fontSize="$xs">
          Built with
        </Text>

        <Link
          href="https://cosmology.zone/"
          target="_blank"
          aria-label="Cosmology"
        >
          <Text as="span" fontSize="100px" color="$text">
            <CosmologyNameIcon />
          </Text>
        </Link>
      </Box>
    </Container>
  );
}

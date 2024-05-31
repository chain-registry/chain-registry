import {
  Box,
  Button,
  Icon,
  Text,
  useColorModeValue,
} from "@interchain-ui/react";
import Link from "next/link";
import { useState } from "react";

import { ThemeSwitcher } from "@/components/common/ThemeSwitcher";

import { Drawer, Footer, Header } from ".";

export function Layout({ children }: { children?: React.ReactNode }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Box
        as="main"
        minHeight="100dvh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        backgroundColor={useColorModeValue("$white", "$cardBg")}
      >
        <Header onMenuButtonClick={() => setShow(true)} />

        <Box flex={1}>{children}</Box>

        <Footer />
      </Box>

      <Drawer show={show} onClose={() => setShow(false)}>
        <DrawerContent onClose={() => setShow(false)} />
      </Drawer>
    </>
  );
}

function DrawerContent({ onClose = () => {} }) {
  return (
    <>
      <Box
        p="$9"
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("$gray100", "$divider")}
        borderBottomStyle="solid"
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Link href="/">
            <Text as="span" fontSize="$lg" color="$text">
              Chain registry
            </Text>
          </Link>

          <Box
            flex="1"
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            color="$text"
          >
            <ThemeSwitcher />

            <Button
              size="sm"
              variant="ghost"
              intent="secondary"
              onClick={onClose}
            >
              <Icon name="close" />
            </Button>
          </Box>
        </Box>
      </Box>

      <Box px="$9">
        <Link href="/components" style={{ display: "block" }}>
          <Text fontSize="$lg" fontWeight="$semibold" attributes={{ py: "$8" }}>
            Components
          </Text>
        </Link>
      </Box>
    </>
  );
}

import {
  Box,
  Button,
  Container,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@interchain-ui/react";
import Link from "next/link";

import { ThemeSwitcher } from "@/components/common/ThemeSwitcher";
import { ChainRegistryIcon } from "@/components/icons";

export type HeaderProps = {
  onMenuButtonClick?: () => void;
};

export function Header({ onMenuButtonClick = () => {} }: HeaderProps) {
  return (
    <Container maxWidth="$containerMd">
      <Box
        display="flex"
        alignItems="center"
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("$gray100", "$divider")}
        borderBottomStyle="solid"
      >
        <Box flex="1">
          <Link href="/" aria-label="Chain registry">
            <Text
              as="span"
              fontSize="150px"
              color="$text"
              attributes={{
                display: "flex",
                height: {
                  mobile: "$17",
                  tablet: "$20",
                },
              }}
            >
              <ChainRegistryIcon />
            </Text>
          </Link>
        </Box>

        <Box display={{ mobile: "none", desktop: "block" }}>
          <Stack
            space="$4"
            attributes={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href="/registry">
              <Text
                fontWeight="$medium"
                color={useColorModeValue("$purple400", "$purple50")}
              >
                Registry
              </Text>
            </Link>

            <ThemeSwitcher />
          </Stack>
        </Box>

        <Box display={{ mobile: "block", desktop: "none" }}>
          <Button
            variant="ghost"
            intent="secondary"
            size="sm"
            onClick={onMenuButtonClick}
          >
            <Text as="span" fontSize="$lg">
              <Icon name="verticalMore" />
            </Text>
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

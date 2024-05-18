import {
  Box,
  Button,
  Icon,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
  useTheme,
} from "@interchain-ui/react";
import Link from "next/link";

import { ChainRegistryIcon } from "@/components/icons";

export type HeaderProps = {
  onMenuButtonClick?: () => void;
};

export function Header({ onMenuButtonClick = () => {} }: HeaderProps) {
  const { theme, setTheme } = useTheme();

  return (
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
              display: "inline-block",
              height: "$20",
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

          <Button
            variant="ghost"
            intent="secondary"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "light" ? (
              <Icon name="moonLine" />
            ) : (
              <Icon name="sunLine" />
            )}
          </Button>
        </Stack>
      </Box>

      <Box display={{ mobile: "block", desktop: "none" }}>
        <IconButton
          icon="verticalMore"
          variant="ghost"
          intent="secondary"
          onClick={onMenuButtonClick}
        />
      </Box>
    </Box>
  );
}

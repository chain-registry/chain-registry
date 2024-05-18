import "../styles/globals.css";
import "@interchain-ui/react/styles";
import "@interchain-ui/react/globalStyles";

import { Box, ThemeProvider, useColorModeValue } from "@interchain-ui/react";
import type { AppProps } from "next/app";

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Box
        minHeight="100dvh"
        backgroundColor={useColorModeValue("$white", "$cardBg")}
      >
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}

export default CreateCosmosApp;

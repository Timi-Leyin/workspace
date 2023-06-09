import theme from "@/config/theme";
import "@/styles/globals.css";
import "../styles/font.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component theme={theme} {...pageProps} />
    </ChakraProvider>
  );
}

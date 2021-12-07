import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import Header from "components/Header"
import theme from "theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp

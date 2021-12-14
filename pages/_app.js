import { appWithTranslation } from 'next-i18next'
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import Header from "components/Header";
import Footer from "components/Footer";
import theme from "theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);

import { appWithTranslation } from 'next-i18next'
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import Header from "components/Header";
import Footer from "components/Footer";
import ThemeProvider from "theme/ThemeProvider"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ChakraProvider>
      <div className="flex flex-col h-screen">
      <Header />
        <div className="flex-1">
          <Component {...pageProps} />
        </div>
      <Footer />
      </div>
    </ChakraProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);

import { appWithTranslation } from 'next-i18next'
import "../styles/globals.css";
import Header from "components/Header";
import Footer from "components/Footer";
import ThemeProvider from "theme/ThemeProvider"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen overflow-auto">
      <Header />
        <div className="flex-1">
          <Component {...pageProps} />
        </div>
      <Footer />
      </div>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);

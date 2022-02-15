import React from "react";
// import App from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "theme";
import { AuthProvider } from "contexts/auth/auth.provider";
import { StickyProvider } from "contexts/app/app.provider";
import { SearchProvider } from "contexts/search/search.provider";
import { HeaderProvider } from "contexts/header/header.provider";
import { LanguageProvider } from "contexts/language/language.provider";

import AppLayout from "containers/LayoutContainer/AppLayout";
import { useDeviceType } from "helper/useDeviceType";
import { CartProvider } from "contexts/cart/use-cart";
// Language translation files
import localEn from "data/translation/en.json";
import localAr from "data/translation/ar.json";
import localEs from "data/translation/es.json";
import localDe from "data/translation/de.json";
import localCn from "data/translation/zh.json";
import localIl from "data/translation/he.json";

// External CSS import here
import "rc-drawer/assets/index.css";
import "rc-table/assets/index.css";
import "rc-collapse/assets/index.css";
import "react-multi-carousel/lib/styles.css";
import "components/MultiCarousel/MultiCarousel.style.css";
import "@redq/reuse-modal/lib/index.css";
import { GlobalStyle } from "styled/global.style";
import { parseCookies } from "helper/parse-cookies";
import HomePage from "./grocery";
import { useLocation } from "react-router-dom";

// Language translation Config
const messages = {
  en: localEn,
  ar: localAr,
  es: localEs,
  de: localDe,
  zh: localCn,
  he: localIl
};
// need to provide types
export default function ExtendedApp() {
  const appContext = {};
  const appProps = {};
  const location = useLocation();
  const query = location.search;
  const req = location.search;
  // console.log("kitu", response.headers);
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  const { locale } = parseCookies(req);
  const deviceType = "Mobile";
  // const deviceType = useDeviceType(userAgent);
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider messages={messages} initLocale={locale}>
        <CartProvider>
          <SearchProvider query={query}>
            <HeaderProvider>
              <StickyProvider>
                <AuthProvider>
                  <>
                    <AppLayout deviceType={deviceType}>
                      <HomePage deviceType={deviceType} />
                      {/* <Component {...pageProps} deviceType={deviceType} /> */}
                    </AppLayout>
                    <GlobalStyle />
                  </>
                </AuthProvider>
              </StickyProvider>
            </HeaderProvider>
          </SearchProvider>
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

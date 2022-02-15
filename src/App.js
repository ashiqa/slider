import React from "react";

import { ThemeProvider as OriginalThemeProvider } from "styled-components";
import { useDarkMode } from "./utils/useDarkMode";
import { GlobalStyle } from "./styles/global-styles";
import { lightTheme, darkTheme } from "./styles/theme";
import { Switch, Route, useLocation } from "react-router-dom";
import "./styles.css";
import Home from "./containers/Home";

import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
import PublicRoutes from "./publicRoutes";
import StoreRoutes from "./storeRoutes";
import ProductPage from "pages/product/[slug]";

import { useDeviceType } from "helper/useDeviceType";
import { CartProvider } from "contexts/cart/use-cart";
import { AuthProvider } from "contexts/auth/auth.provider";
import { StickyProvider } from "contexts/app/app.provider";
import { SearchProvider } from "contexts/search/search.provider";
import { HeaderProvider } from "contexts/header/header.provider";
import { LanguageProvider } from "contexts/language/language.provider";

import AppLayout from "containers/LayoutContainer/AppLayout";

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

import { parseCookies } from "helper/parse-cookies";

// Language translation Config
const messages = {
  en: localEn,
  ar: localAr,
  es: localEs,
  de: localDe,
  zh: localCn,
  he: localIl
};

export default function App() {
  let location = useLocation();
  const userAgent = navigator.userAgent;
  const deviceType = useDeviceType(userAgent);

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div />;
  }
  const req = localStorage.getItem("req") ? localStorage.getItem("req") : "";
  const query = location.search ? "" : location.search;
  const { locale } = parseCookies(req);

  return (
    <OriginalThemeProvider theme={themeMode}>
      <LanguageProvider messages={messages} initLocale={locale}>
        <CartProvider>
          <SearchProvider query={query}>
            <HeaderProvider>
              <StickyProvider>
                <AuthProvider>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/app">
                      <TopNav theme={theme} toggleTheme={toggleTheme} />
                      <PublicRoutes />
                      <BottomNav />
                    </Route>
                    <Route path="/store">
                      <AppLayout deviceType={deviceType}>
                        <StoreRoutes deviceType={deviceType} />
                      </AppLayout>
                    </Route>
                    <Route path="/product/:slug">
                      <AppLayout deviceType={deviceType}>
                        <ProductPage deviceType={deviceType} />
                      </AppLayout>
                    </Route>

                    {/* <Route path="/store" component={StoreRoutes} /> */}
                  </Switch>
                </AuthProvider>
              </StickyProvider>
            </HeaderProvider>
          </SearchProvider>
        </CartProvider>
      </LanguageProvider>
      <GlobalStyle />
    </OriginalThemeProvider>
  );
}

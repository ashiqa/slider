import React from "react";
import { useLocation } from "react-router-dom";
import Sticky from "react-stickynode";
import Header from "./Header/Header";
import { useStickyState } from "contexts/app/app.provider";
import { LayoutWrapper } from "./Layout.style";
import { isCategoryPage } from "./is-home-page";
import MobileHeader from './Header/MobileHeader'

// const MobileHeader = (() => import("./Header/MobileHeader"),
// {
//   ssr: false
// });

const Layout = ({
  className,
  children,
  deviceType: { mobile, tablet, desktop },
  token
}) => {
  const isSticky = useStickyState("isSticky");
  const location = useLocation();
  const pathname = location.pathname;

  // const isHomePage = true;
  const isHomePage = isCategoryPage(pathname);
  console.log("ya sticky", isSticky)
  console.log("ya homepage", isHomePage)
  return (
    <LayoutWrapper className={`layoutWrapper ${className}`}>
      {(mobile || tablet) && (
        <Sticky enabled={isSticky} innerZ={1001}>
          <MobileHeader
            className={`${isSticky ? 'sticky' : 'unSticky'} ${
              isHomePage ? 'home' : ''
            }`}
            pathname={pathname}
          />
        </Sticky>
      )}

      {desktop && (
        <Sticky enabled={isSticky} innerZ={1001}>
          <MobileHeader
            className={`${isSticky ? 'sticky' : 'unSticky'} ${
              isHomePage ? 'home' : ''
            } desktop`}
            pathname={pathname}
          />
          <Header
            className={`${isSticky ? 'sticky' : 'unSticky'} ${
              isHomePage ? 'home' : ''
            }`}
            token={token}
            pathname={pathname}
          />
        </Sticky>
      )}
      {children}
    </LayoutWrapper>
  );
};

export default Layout;

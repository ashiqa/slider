import React from "react";
import { useLocation } from "react-router-dom";
import { Modal } from "@redq/reuse-modal";
import { withApollo } from "helper/apollo";
import { SEO } from "components/seo";
import StoreNav from "components/StoreNav/StoreNav";
import Carousel from "components/Carousel/Carousel";
import Banner from "containers/Banner/Banner";
import Sidebar from "containers/Sidebar/Sidebar";
import Products from "containers/Products/Products";
import CartPopUp from "containers/Cart/CartPopUp";
import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  OfferSection,
  MobileCarouselDropdown
} from "styled/pages.styled";
// Static Data Import Here
import OFFERS from "data/offers";
import BannerImg from "image/grocery.png";
import storeType from "constants/storeType";

const PAGE_TYPE = "grocery";

function HomePage({ deviceType }) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const targetRef = React.useRef(null);
  React.useEffect(() => {
    if ((query.get("text") || query.get("category")) && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop - 110,
        behavior: "smooth"
      });
    }
  }, [query]);

  return (
    <>
      <SEO title='Grocery - KiuStore' description='Grocery Details' />
      <Modal>
        <Banner
          intlTitleId='groceriesTitle'
          intlDescriptionId='groceriesSubTitle'
          imageUrl={BannerImg}
        />
        {deviceType.desktop ? (
          <>
            <MobileCarouselDropdown>
              <StoreNav items={storeType} />
              <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
            </MobileCarouselDropdown>
            <OfferSection>
              <div style={{ margin: '0 -10px' }}>
                <Carousel deviceType={deviceType} data={OFFERS} />
              </div>
            </OfferSection>
            <MainContentArea>
              <SidebarSection>
                <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
              </SidebarSection>
              <ContentSection>
                <div ref={targetRef}>
                  <Products
                    type={PAGE_TYPE}
                    deviceType={deviceType}
                    fetchLimit={16}
                  />
                </div>
              </ContentSection>
            </MainContentArea>
          </>
        ) : (
          <MainContentArea>
            <StoreNav items={storeType} />
            <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
            <OfferSection>
              <div style={{ margin: '0 -10px' }}>
                <Carousel deviceType={deviceType} data={OFFERS} />
              </div>
            </OfferSection>
            <ContentSection style={{ width: '100%' }}>
              <Products
                type={PAGE_TYPE}
                deviceType={deviceType}
                fetchLimit={16}
              />
            </ContentSection>
          </MainContentArea>
        )}
        
        <CartPopUp deviceType={deviceType} />
      </Modal>
    </>
  );
}

export default withApollo(HomePage);
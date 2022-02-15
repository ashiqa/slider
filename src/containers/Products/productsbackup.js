import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import gql from "graphql-tag";
import _ from "lodash"
import { openModal, closeModal } from "@redq/reuse-modal";
import ProductCard from "components/ProductCard/ProductCard";
import {
  ProductsRow,
  ProductsCol,
  ButtonWrapper,
  LoaderWrapper,
  LoaderItem,
  ProductCardWrapper
} from "./Products.style";
import { CURRENCY } from "helper/constant";
import { useQuery } from "@apollo/react-hooks";
import Button from "components/Button/Button";
import Loader from "components/Loader/Loader";
import Placeholder from "components/Placeholder/Placeholder";
import Fade from "react-reveal/Fade";
import NoResultFound from "components/NoResult/NoResult";
import { AllProducts } from "data/Samples/product.samples";

const QuickView = () => import("../QuickView/QuickView");

// const GET_PRODUCTS = gql`
//   query getProducts(
//     $type: String
//     $text: String
//     $category: String
//     $offset: Int
//     $limit: Int
//   ) {
//     products(
//       type: $type
//       text: $text
//       category: $category
//       offset: $offset
//       limit: $limit
//     ) {
//       items {
//         id
//         title
//         slug
//         unit
//         price
//         salePrice
//         description
//         discountInPercent
//         type
//         image
//         gallery {
//           url
//         }
//         categories {
//           id
//           title
//           slug
//         }
//       }
//       hasMore
//     }
//   }
// `;

export const Products = ({
  deviceType,
  type,
  fetchLimit = 8,
  loadMore = true
}) => {
  const history = useHistory();
  const location = useLocation();

  const query = location.search;
  const [loadingMore, toggleLoading] = useState(false);
  // const { data, error, loading, fetchMore } = useQuery(GET_PRODUCTS, {
  //   variables: {
  //     type: type,
  //     text: query.text,
  //     category: query.category,
  //     offset: 0,
  //     limit: fetchLimit
  //   }
  // });
  const data = _.take(AllProducts,20);
  const error = false;
  const loading = false;
  const fetchMore = false;
  // Quick View Modal
  const handleModalClose = () => {
    const as = location.pathname;
    history.push(as, as, { shallow: true });
    closeModal();
  };

  const handleQuickViewModal = (modalProps, deviceType, onModalClose) => {
    if (location.pathname === "/product/[slug]") {
      const as = `/product/${modalProps.slug}`;
      history.push(location.pathname, as);
      return;
    }
    openModal({
      show: true,
      overlayClassName: "quick-view-overlay",
      closeOnClickOutside: false,
      component: QuickView,
      componentProps: { modalProps, deviceType, onModalClose },
      closeComponent: "div",
      config: {
        enableResizing: false,
        disableDragging: true,
        className: "quick-view-modal",
        width: 900,
        y: 30,
        height: "auto",
        transition: {
          mass: 1,
          tension: 0,
          friction: 0
        }
      }
    });
    const href = location.pathname;
    const as = `/product/${modalProps.slug}`;
    history.push(href, as, { shallow: true });
  };

  if (loading) {
    return (
      <LoaderWrapper>
        <LoaderItem>
          <Placeholder />
        </LoaderItem>
        <LoaderItem>
          <Placeholder />
        </LoaderItem>
        <LoaderItem>
          <Placeholder />
        </LoaderItem>
      </LoaderWrapper>
    );
  }

  if (error) return <div>{error.message}</div>;
  if (!data || !data || data.length === 0) {
    return <NoResultFound />;
  }
  const handleLoadMore = () => {
    toggleLoading(true);
    fetchMore({
      variables: {
        offset: Number(data.length),
        limit: fetchLimit
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        toggleLoading(false);
        if (!fetchMoreResult) {
          return prev;
        }
        return {
          products: {
            __typename: prev.products.__typename,
            items: [...prev.products.items, ...fetchMoreResult.products.items],
            hasMore: fetchMoreResult.products.hasMore
          }
        };
      }
    });
  };
  console.log("th daataadad :",data)

  return (
    <>
      <ProductsRow>
        {data.map((item, index) => (
          <ProductsCol key={index}>
            <ProductCardWrapper>
              <Fade
                duration={800}
                delay={index * 10}
                style={{ height: "100%" }}
              >
                <ProductCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  weight={item.unit}
                  currency={CURRENCY}
                  price={item.price}
                  salePrice={item.salePrice}
                  discountInPercent={item.discountInPercent}
                  data={item}
                  deviceType={deviceType}
                  onClick={() =>
                    handleQuickViewModal(item, deviceType, handleModalClose)
                  }
                />
              </Fade>
            </ProductCardWrapper>
          </ProductsCol>
        ))}
      </ProductsRow>
      {loadMore && (
        <ButtonWrapper>
          <Button
            onClick={handleLoadMore}
            title="Load More"
            intlButtonId="loadMoreBtn"
            size="small"
            isLoading={loadingMore}
            loader={<Loader color="#6c3a1f" />}
            style={{
              minWidth: 135,
              backgroundColor: "#ffffff",
              border: "1px solid #f1f1f1",
              color: "#6c3a1f"
            }}
          />
        </ButtonWrapper>
      )}
    </>
  );
};
export default Products;

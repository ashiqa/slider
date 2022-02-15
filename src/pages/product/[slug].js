import React from "react";
import { SEO } from "components/seo";
import { useQuery } from "@apollo/react-hooks";
import ProductDetails from "containers/ProductDetails/ProductDetails";
import ProductDetailsBook from "containers/ProductDetailsBook/ProductDetailsBook";
import { Modal } from "@redq/reuse-modal";
import ProductSingleWrapper, {
  ProductSingleContainer
} from "styled/product-single.style";
import CartPopUp from "containers/Cart/CartPopUp";
import { withApollo } from "helper/apollo";
import { GET_PRODUCT_DETAILS } from "graphql/query/product.query";
import { useLocation } from "react-router-dom";

const ProductPage = ({ deviceType }) => {
  const location = useLocation()
  const search = location.search
  const {
    query: { slug }
  } = search

  const { data, error, loading } = useQuery(GET_PRODUCT_DETAILS, {
    variables: { slug }
  });

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) return <div>Error: {error.message}</div>;

  let content;
  switch (data.product.type) {
    case "BOOK": {
      content = (
        <ProductDetailsBook product={data.product} deviceType={deviceType} />
      );
      break;
    }
    default: {
      content = (
        <ProductDetails product={data.product} deviceType={deviceType} />
      );
    }
  }

  return (
    <>
      <SEO
        title={`${data.product.title} - KiuStore`}
        description={`${data.product.title} Details`}
      />

      <Modal>
        <ProductSingleWrapper>
          <ProductSingleContainer>
            {content}
            <CartPopUp deviceType={deviceType} />
          </ProductSingleContainer>
        </ProductSingleWrapper>
      </Modal>
    </>
  );
};
export default withApollo(ProductPage);

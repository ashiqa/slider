import React from "react";
import ImageWrapper from "components/Image/Image";
import {
  BookCardWrapper,
  BookImageWrapper,
  BookInfo,
  ProductName,
  DiscountPercent,
  ProductCardWrapper,
  ProductImageWrapper,
  ProductInfo,
  SaleTag
} from "./ProductCard.style";
import { Img } from "react-image";

const ProductCard = ({ title, image, discountInPercent, onClick }) => {
  return (
    <ProductCardWrapper onClick={onClick} className="furniture-card">
      <ProductImageWrapper>
        <ImageWrapper
          url={image}
          className="product-image"
          style={{ position: "relative" }}
          alt={title}
        />
        {discountInPercent ? (
          <>
            <DiscountPercent>{discountInPercent}%</DiscountPercent>
          </>
        ) : (
          ""
        )}
      </ProductImageWrapper>
      <ProductInfo>
        <ProductName>{title}</ProductName>
      </ProductInfo>
    </ProductCardWrapper>
  );
};

export default ProductCard;

import React from "react";
import { FormattedMessage } from "react-intl";
import ImageWrapper from "components/Image/Image";
import {
  BookCardWrapper,
  BookImageWrapper,
  BookInfo,
  ProductName,
  AuthorInfo,
  DiscountPercent
} from "./ProductCard.style";

const ProductCard = ({
  title,
  image,
  name,
  discountInPercent,
  onChange,
  increment,
  decrement,
  data,
  deviceType,
  onClick,
  ...props
}) => {
  return (
    <BookCardWrapper onClick={onClick} className="book-card">
      <BookImageWrapper>
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
      </BookImageWrapper>
      <BookInfo>
        <ProductName>{title}</ProductName>
        <AuthorInfo>
          <FormattedMessage id="intlTextBy" defaultMessage="by" /> {name}
        </AuthorInfo>
      </BookInfo>
    </BookCardWrapper>
  );
};

export default ProductCard;

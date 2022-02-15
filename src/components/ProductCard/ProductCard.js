import React from "react";
import {Img} from 'react-image'
import ImageWrapper from "components/Image/Image";
import Button from "../Button/Button";
import { CartIcon } from "../AllSvgIcon";
import {
  ProductCardWrapper,
  ProductImageWrapper,
  ProductInfo,
  SaleTag,
  DiscountPercent
} from "./ProductCard.style";
import { useCart } from "contexts/cart/use-cart";
import { Counter } from "components/Counter/Counter";
import { cartAnimation } from "helper/cart-animation";
import SampleImage from "components/Image/product-placeholder.png"

const ProductCard = ({
  title,
  image,
  weight,
  price,
  salePrice,
  discountInPercent,
  cartProducts,
  addToCart,
  updateCart,
  value,
  currency,
  onChange,
  increment,
  decrement,
  data,
  deviceType,
  onClick,
}) => {
  const { addItem, removeItem, getItem, isInCart, items } = useCart();
  const handleAddClick = e => {
    e.stopPropagation();
    addItem(data);
    if (!isInCart(data.id)) {
      cartAnimation(e);
    }
  };
  const handleRemoveClick = e => {
    e.stopPropagation();
    removeItem(data);
  };

  return (
    <ProductCardWrapper onClick={onClick} className="product-card">
      <ProductImageWrapper>
        {/* <ImageWrapper
          url={image}
          className="product-image"
          style={{ position: 'relative' }}
          alt={title}
        /> */}
        <Img src={image} className="product-image" style={{ position: 'relative' }}
          alt={title}/>
        {discountInPercent ? (
          <>
            <DiscountPercent>{discountInPercent}%</DiscountPercent>
          </>
        ) : (
          ''
        )}
      </ProductImageWrapper>
      <ProductInfo>
        <h3 className="product-title">{title}</h3>
        <span className="product-weight">{weight}</span>
        <div className="product-meta">
          <div className="productPriceWrapper">
            {discountInPercent ? (
              <span className="discountedPrice">
                {currency}
                {price}
              </span>
            ) : (
              ''
            )}

            <span className="product-price">
              {currency}
              {salePrice ? salePrice : price}
            </span>
          </div>

          {!isInCart(data.id) ? (
            <Button
              title="Cart"
              intlButtonId="addCartButton"
              iconPosition="left"
              colors="primary"
              size="small"
              variant="outlined"
              className="cart-button"
              icon={<CartIcon />}
              onClick={handleAddClick}
            />
          ) : (
            <Counter
              value={getItem(data.id).quantity}
              onDecrement={handleRemoveClick}
              onIncrement={handleAddClick}
            />
          )}
        </div>
      </ProductInfo>
    </ProductCardWrapper>
  );
};

export default ProductCard;

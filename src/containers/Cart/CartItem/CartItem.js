import React from "react";
import { Counter } from "components/Counter/Counter";
import { CURRENCY } from "helper/constant";
import { CloseIcon } from "assets/icons/close";
import {
  ItemBox,
  Image,
  Information,
  Name,
  Price,
  Weight,
  Total,
  RemoveButton
} from "./CartItem.style";

export const CartItem = ({ data, onDecrement, onIncrement, onRemove }) => {
  const { title, image, price, salePrice, unit, quantity } = data;
  const displayPrice = salePrice ? salePrice : price;
  const totalPrice = quantity * displayPrice;
  return (
    <ItemBox>
      <Counter
        value={quantity}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        variant="lightVertical"
      />
      <Image src={image} />
      <Information>
        <Name>{title}</Name>
        <Price>
          {CURRENCY}
          {displayPrice}
        </Price>
        <Weight>
          {quantity} X {unit}
        </Weight>
      </Information>
      <Total>
        {CURRENCY}
        {(quantity * displayPrice).toFixed(2)}
      </Total>
      <RemoveButton onClick={onRemove}>
        <CloseIcon />
      </RemoveButton>
    </ItemBox>
  );
};

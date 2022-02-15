import React from 'react';
import { closeModal } from '@redq/reuse-modal';
import Button from 'components/Button/Button';
import {
  QuickViewWrapper,
  ProductDetailsWrapper,
  ProductPreview,
  DiscountPercent,
  ProductInfoWrapper,
  ProductInfo,
  ProductTitlePriceWrapper,
  ProductTitle,
  ProductWeight,
  ProductDescription,
  ProductMeta,
  ProductCartWrapper,
  ProductPriceWrapper,
  ProductPrice,
  SalePrice,
  ProductCartBtn,
  MetaSingle,
  MetaItem,
  ModalClose,
} from './QuickView.style';
import { CURRENCY } from 'helper/constant';
import { CloseIcon, CartIcon } from 'components/AllSvgIcon';
import ReadMore from 'components/Truncate/Truncate';
import CarouselWithCustomDots from 'components/MultiCarousel/MultiCarousel';
import { useLocale } from 'contexts/language/language.provider';
import { useCart } from 'contexts/cart/use-cart';
import { Counter } from 'components/Counter/Counter';
import { useHistory } from 'react-router-dom';

const QuickView = ({
  modalProps,
  deviceType,
  onModalClose,
}) => {
  const history = useHistory()
  const { addItem, removeItem, isInCart, getItem } = useCart();
  const {
    id,
    type,
    title,
    unit,
    price,
    discountInPercent,
    salePrice,
    description,
    gallery,
    categories,
  } = modalProps;

  const { isRtl } = useLocale();

  const handleAddClick = (e) => {
    e.stopPropagation();
    addItem(modalProps);
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    removeItem(modalProps);
  };
  function onCategoryClick(slug) {
    history.push({
      pathname: `/${type.toLowerCase()}`,
      query: { category: slug },
    }).then(() => window.scrollTo(0, 0));
    closeModal();
  }

  return (
    <>
      <ModalClose onClick={onModalClose}>
        <CloseIcon />
      </ModalClose>
      <QuickViewWrapper>
        <ProductDetailsWrapper className='product-card' dir='ltr'>
          {!isRtl && (
            <ProductPreview>
              <CarouselWithCustomDots items={gallery} deviceType={deviceType} />
              {!!discountInPercent && (
                <>
                  <DiscountPercent>{discountInPercent}%</DiscountPercent>
                </>
              )}
            </ProductPreview>
          )}
          <ProductInfoWrapper dir={isRtl ? 'rtl' : 'ltr'}>
            <ProductInfo>
              <ProductTitlePriceWrapper>
                <ProductTitle>{title}</ProductTitle>
                <ProductPriceWrapper>
                  {discountInPercent ? (
                    <SalePrice>
                      {CURRENCY}
                      {price}
                    </SalePrice>
                  ) : (
                    ''
                  )}

                  <ProductPrice>
                    {CURRENCY}
                    {salePrice ? salePrice : price}
                  </ProductPrice>
                </ProductPriceWrapper>
              </ProductTitlePriceWrapper>

              <ProductWeight>{unit}</ProductWeight>
              <ProductDescription>
                <ReadMore character={600}>{description}</ReadMore>
              </ProductDescription>

              <ProductCartWrapper>
                <ProductCartBtn>
                  {!isInCart(id) ? (
                    <Button
                      title='Cart'
                      intlButtonId='addCartButton'
                      iconPosition='left'
                      colors='primary'
                      size='small'
                      variant='outlined'
                      className='cart-button'
                      icon={<CartIcon />}
                      onClick={handleAddClick}
                    />
                  ) : (
                    <Counter
                      value={getItem(id).quantity}
                      onDecrement={handleRemoveClick}
                      onIncrement={handleAddClick}
                    />
                  )}
                </ProductCartBtn>
              </ProductCartWrapper>

              <ProductMeta>
                <MetaSingle>
                  {categories
                    ? categories.map((item) => (
                        <MetaItem
                          onClick={() => onCategoryClick(item.slug)}
                          key={item.id}
                        >
                          {item.title}
                        </MetaItem>
                      ))
                    : ''}
                </MetaSingle>
              </ProductMeta>
            </ProductInfo>
          </ProductInfoWrapper>

          {isRtl && (
            <ProductPreview>
              <CarouselWithCustomDots items={gallery} deviceType={deviceType} />
              {!!discountInPercent && (
                <>
                  <DiscountPercent>{discountInPercent}%</DiscountPercent>
                </>
              )}
            </ProductPreview>
          )}
        </ProductDetailsWrapper>
      </QuickViewWrapper>
    </>
  );
};

export default QuickView;

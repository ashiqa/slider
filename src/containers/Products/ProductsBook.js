import React, { useState } from 'react';
import gql from 'graphql-tag';
import ProductCard from 'components/ProductCard/ProductCardBook';
import {
  ProductsRow,
  ProductsCol,
  ButtonWrapper,
  LoaderWrapper,
  LoaderItem,
  ProductCardWrapper,
} from './Products.style';
import { CURRENCY } from 'helper/constant';
import { useQuery } from '@apollo/react-hooks';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Placeholder from 'components/Placeholder/Placeholder';
import Fade from 'react-reveal/Fade';
import NoResultFound from 'components/NoResult/NoResult';
import { useLocation, useHistory } from 'react-router-dom';

const GET_PRODUCTS = gql`
  query getProducts(
    $type: String
    $text: String
    $category: String
    $offset: Int
    $limit: Int
  ) {
    products(
      type: $type
      text: $text
      category: $category
      offset: $offset
      limit: $limit
    ) {
      items {
        id
        title
        slug
        price
        salePrice
        discountInPercent
        type
        image
        author {
          id
          name
        }
      }
      hasMore
    }
  }
`;


export const Products = ({
  deviceType,
  type,
  fetchLimit = 8,
  loadMore = true,
}) => {
  const location = useLocation()
  const history = useHistory()
  const [loadingMore, toggleLoading] = useState(false);
  const { data, error, loading, fetchMore } = useQuery(GET_PRODUCTS, {
    variables: {
      type: type,
      text: location.search.text,
      category: location.search.category,
      offset: 0,
      limit: fetchLimit,
    },
  });

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
  if (!data || !data.products || data.products.items.length === 0) {
    return <NoResultFound />;
  }
  const handleLoadMore = () => {
    toggleLoading(true);
    fetchMore({
      variables: {
        offset: Number(data.products.items.length),
        limit: fetchLimit,
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
            hasMore: fetchMoreResult.products.hasMore,
          },
        };
      },
    });
  };

  return (
    <>
      <ProductsRow style={{ margin: 0 }}>
        {data.products.items.map((item, index) => (
          <ProductsCol key={index} style={{ paddingLeft: 0, paddingRight: 1 }}>
            <ProductCardWrapper>
              <Fade
                duration={800}
                delay={index * 10}
                style={{ height: '100%' }}
              >
                <ProductCard
                  title={item.title}
                  image={item.image}
                  name={item?.author?.name}
                  data={item}
                  deviceType={deviceType}
                  onClick={() =>
                    history.push('/product/[slug]', `/product/${item.slug}`)
                  }
                />
              </Fade>
            </ProductCardWrapper>
          </ProductsCol>
        ))}
      </ProductsRow>
      {loadMore && data.products.hasMore && (
        <ButtonWrapper>
          <Button
            onClick={handleLoadMore}
            title='Load More'
            size='small'
            isLoading={loadingMore}
            intlButtonId='loadMoreBtn'
            loader={<Loader color='#6c3a1f' />}
            style={{
              minWidth: 135,
              backgroundColor: '#ffffff',
              border: '1px solid #f1f1f1',
              color: '#6c3a1f',
            }}
          />
        </ButtonWrapper>
      )}
    </>
  );
};
export default Products;

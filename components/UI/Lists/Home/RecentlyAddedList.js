import Link from 'next/link';
import React, { Fragment } from 'react';
import {
  LinkTo,
  Product,
  Bg,
  Title,
  Price,
  PostInfoDiv,
  DiscountPercentage,
  DiscountPricesDiv,
  ProductNewPriceDiscount,
  ProductOldPriceDiscount,
} from '../../../../styles/Components/UI/Lists/RecentlyAdded/RecentlyAddedList';
import RoundFloatNumber from '../../../../utils/Calculate/roundFloatNumber';

const RecentlyAddedList = (props) => {
  const { products } = props;
  const roundFloatNumber = new RoundFloatNumber();

  return (
    <>
      {products.map((product, key) => (
        <Fragment key={product._id}>
          <Link href='/product/[slug]' as={`/product/${product.slug}`}>
            <LinkTo id={`recentlyAddedCard-${key}`}>
              {product.prices.compareTo !== null &&
                product.prices.compareTo > 0 && (
                  <DiscountPercentage
                    id={`recentlyAddedDiscountPercentage-${key}`}
                  >
                    {roundFloatNumber.calculateDiscountPercentage(
                      product.prices.price,
                      product.prices.compareTo
                    )}
                    %
                  </DiscountPercentage>
                )}
              <Product key={key} backgroundImage={product.media.url}>
                <Bg id={`recentlyAddedBg-${key}`} />
                <PostInfoDiv
                  onMouseOver={() => {
                    const card = document.querySelector(
                      `#recentlyAddedCard-${key}`
                    );
                    if (product.prices.compareTo > 0) {
                      card.querySelector(
                        `#recentlyAddedDiscountPercentage-${key}`
                      ).style.opacity = '0';
                    }
                    card.querySelector(
                      `#recentlyAddedPrice-${key}`
                    ).style.opacity = '0';
                    card.querySelector(
                      `#recentlyAddedProductName-${key}`
                    ).style.opacity = '0';
                  }}
                  onMouseOut={() => {
                    const card = document.querySelector(
                      `#recentlyAddedCard-${key}`
                    );
                    if (product.prices.compareTo > 0) {
                      card.querySelector(
                        `#recentlyAddedDiscountPercentage-${key}`
                      ).style.opacity = '1';
                    }
                    card.querySelector(
                      `#recentlyAddedPrice-${key}`
                    ).style.opacity = '1';
                    card.querySelector(
                      `#recentlyAddedProductName-${key}`
                    ).style.opacity = '1';
                  }}
                >
                  <Title id={`recentlyAddedProductName-${key}`}>
                    {product.productName}
                  </Title>
                  {product.prices.compareTo !== null &&
                  product.prices.compareTo > 0 ? (
                    <>
                      <DiscountPricesDiv id={`recentlyAddedPrice-${key}`}>
                        <ProductOldPriceDiscount>
                          C$ {product.prices.compareTo}
                        </ProductOldPriceDiscount>
                        <ProductNewPriceDiscount>
                          C$ {product.prices.price}
                        </ProductNewPriceDiscount>
                      </DiscountPricesDiv>
                    </>
                  ) : (
                    <Price id={`recentlyAddedPrice-${key}`}>
                      C$ {product.prices.price}
                    </Price>
                  )}
                </PostInfoDiv>
              </Product>
            </LinkTo>
          </Link>
        </Fragment>
      ))}
    </>
  );
};

export default RecentlyAddedList;

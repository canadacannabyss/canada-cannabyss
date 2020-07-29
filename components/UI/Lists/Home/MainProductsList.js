import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import {
  CardTopMain,
  DiscountPercentage,
  DiscountPercentageMain,
  Card,
  Cover,
  BgCover,
  BgMainCover,
  CoverMain,
  PostInfoDivMain,
  PostInfoDiv,
  TitleMain,
  Title,
  DiscountPricesDiv,
  ProductNewSmallPriceDiscount,
  ProductOldSmallPriceDiscount,
  ProductNewPriceDiscount,
  ProductOldPriceDiscount,
  DiscountPricesMainDiv,
  ProductNewPriceMainDiscount,
  ProductOldPriceMainDiscount,
  SmallName,
  GridSmall,
  SmallPrice,
  Price,
  MainPrice,
} from '../../../../styles/Components/UI/Lists/MainProductsList/MainProductsList';
import RoundFloatNumber from '../../../../utils/Calculate/roundFloatNumber';

const MainPostList = (props) => {
  const { product, index } = props;
  const roundFloatNumber = new RoundFloatNumber();

  return (
    <>
      {index > 0 ? (
        <Link href='/product/[slug]' as={`/product/${product.slug}`}>
          <Card style={{ border: 'none' }} id={`card-${index}`}>
            {product.prices.compareTo !== null && product.prices.compareTo > 0 && (
              <DiscountPercentage id={`discountPercentage-${index}`}>
                <p>
                  {roundFloatNumber.calculateDiscountPercentage(
                    product.prices.price,
                    product.prices.compareTo
                  )}
                  %
                </p>
              </DiscountPercentage>
            )}
            <GridSmall>
              <Cover src={product.media.url} alt='React.js' width='100%'>
                <BgCover id={`bg-${index}`} />
                <PostInfoDiv
                  onMouseOver={() => {
                    const card = document.querySelector(`#card-${index}`);
                    card.querySelector(
                      `#discountPercentage-${index}`
                    ).style.opacity = '0';

                    card.querySelector(`#price-${index}`).style.opacity = '0';
                    card.querySelector(`#productName-${index}`).style.opacity =
                      '0';
                  }}
                  onMouseOut={() => {
                    const card = document.querySelector(`#card-${index}`);
                    card.querySelector(
                      `#discountPercentage-${index}`
                    ).style.opacity = '1';
                    card.querySelector(`#price-${index}`).style.opacity = '1';
                    card.querySelector(`#productName-${index}`).style.opacity =
                      '1';
                  }}
                >
                  <Title id={`productName-${index}`}>
                    {product.productName}
                  </Title>
                  {product.prices.compareTo !== null &&
                  product.prices.compareTo > 0 ? (
                    <>
                      <DiscountPricesDiv id={`price-${index}`}>
                        <ProductOldPriceDiscount>
                          C$ {product.prices.compareTo}
                        </ProductOldPriceDiscount>
                        <ProductNewPriceDiscount>
                          C$ {product.prices.price}
                        </ProductNewPriceDiscount>
                      </DiscountPricesDiv>
                    </>
                  ) : (
                    <SmallPrice id={`price-${index}`}>
                      C$ {product.prices.price}
                    </SmallPrice>
                  )}
                </PostInfoDiv>
              </Cover>
              <div>
                <SmallName>{product.productName}</SmallName>
                {product.prices.compareTo !== null &&
                product.prices.compareTo > 0 ? (
                  <>
                    <DiscountPricesDiv>
                      <ProductOldSmallPriceDiscount>
                        C$ {product.prices.compareTo}
                      </ProductOldSmallPriceDiscount>
                      <ProductNewSmallPriceDiscount>
                        C$ {product.prices.price}
                      </ProductNewSmallPriceDiscount>
                    </DiscountPricesDiv>
                  </>
                ) : (
                  <SmallPrice>C$ {product.prices.price}</SmallPrice>
                )}
              </div>
            </GridSmall>
          </Card>
        </Link>
      ) : (
        <Link href='/product/[slug]' as={`/product/${product.slug}`}>
          <CardTopMain style={{ border: 'none' }} id={`card-${index}`}>
            {product.prices.compareTo !== null && product.prices.compareTo > 0 && (
              <DiscountPercentageMain id={`discountPercentage-${index}`}>
                <p>
                  {roundFloatNumber.calculateDiscountPercentage(
                    product.prices.price,
                    product.prices.compareTo
                  )}
                  %
                </p>
              </DiscountPercentageMain>
            )}
            <CoverMain src={product.media.url} alt='React.js' width='100%'>
              <BgMainCover id={`bg-${index}`} />
              <PostInfoDivMain
                onMouseOver={() => {
                  const card = document.querySelector(`#card-${index}`);
                  card.querySelector(
                    `#discountPercentage-${index}`
                  ).style.opacity = '0';
                  card.querySelector(`#price-${index}`).style.opacity = '0';
                  card.querySelector(`#productName-${index}`).style.opacity =
                    '0';
                }}
                onMouseOut={() => {
                  const card = document.querySelector(`#card-${index}`);
                  card.querySelector(
                    `#discountPercentage-${index}`
                  ).style.opacity = '1';
                  card.querySelector(`#price-${index}`).style.opacity = '1';
                  card.querySelector(`#productName-${index}`).style.opacity =
                    '1';
                }}
              >
                <TitleMain id={`productName-${index}`}>
                  {product.productName}
                </TitleMain>
                {product.prices.compareTo !== null &&
                product.prices.compareTo > 0 ? (
                  <>
                    <DiscountPricesMainDiv id={`price-${index}`}>
                      <ProductOldPriceMainDiscount>
                        C$ {product.prices.compareTo}
                      </ProductOldPriceMainDiscount>
                      <ProductNewPriceMainDiscount>
                        C$ {product.prices.price}
                      </ProductNewPriceMainDiscount>
                    </DiscountPricesMainDiv>
                  </>
                ) : (
                  <MainPrice id={`price-${index}`}>
                    C$ {product.prices.price}
                  </MainPrice>
                )}
              </PostInfoDivMain>
            </CoverMain>
          </CardTopMain>
        </Link>
      )}
    </>
  );
};

MainPostList.propTypes = {
  product: PropTypes.shape().isRequired,
  index: PropTypes.number.isRequired,
};

export default MainPostList;

import React, { Fragment } from 'react';
import Link from 'next/link';
import {
  Wrapper,
  SellerTitle,
  Seller,
  List,
  AlsoProducts,
} from '../../../styles/Pages/Product/ProductsUser';
import {
  Details,
  ProductImage,
  ProductLinkTo,
  ProductName,
  ProductPrice,
  DiscountPricesDiv,
  ProductNewPriceDiscount,
  ProductOldPriceDiscount,
  DiscountPercentage,
  ViewDiv,
} from '../../../styles/Components/UI/Lists/ProductsList/ProductsList';
import RoundFloatNumber from '../../../utils/Calculate/roundFloatNumber';

const ProductUser = (props) => {
  const { user, resellerProducts } = props;
  const roundFloatNumber = new RoundFloatNumber();

  return (
    <Wrapper>
      <Seller>
        <div
          className='image'
          alt={user.profileImage.name}
          style={{
            backgroundImage: `url('${user.profileImage.url}')`,
          }}
        />
        <div className='sellerInfo'>
          <span>{`${user.names.firstName} ${user.names.lastName}`}</span>
        </div>
      </Seller>
      <AlsoProducts>
        Other products by {`${user.names.firstName} ${user.names.lastName}`}
      </AlsoProducts>
      <List>
        {resellerProducts.data.map((product) => (
          <Fragment key={product._id}>
            <Link href='/product/[slug]' as={`/product/${product.slug}`}>
              <ProductLinkTo>
                {product.prices.compareTo !== null &&
                  product.prices.compareTo > 0 && (
                    <DiscountPercentage>
                      <p>
                        {roundFloatNumber.calculateDiscountPercentage(
                          product.prices.price,
                          product.prices.compareTo
                        )}
                        %
                      </p>
                    </DiscountPercentage>
                  )}
                <ProductImage
                  style={{
                    backgroundImage: `url('${product.media[0].url}')`,
                  }}
                />
                <Details>
                  <ProductName>{product.productName}</ProductName>
                  {product.prices.compareTo !== null &&
                  product.prices.compareTo > 0 ? (
                    <DiscountPricesDiv>
                      <ProductOldPriceDiscount>
                        C$ {product.prices.compareTo}
                      </ProductOldPriceDiscount>
                      <ProductNewPriceDiscount>
                        C$ {product.prices.price}
                      </ProductNewPriceDiscount>
                    </DiscountPricesDiv>
                  ) : (
                    <ProductPrice>{product.prices.price}</ProductPrice>
                  )}
                </Details>
                <ViewDiv />
              </ProductLinkTo>
            </Link>
          </Fragment>
        ))}
      </List>
    </Wrapper>
  );
};

export default ProductUser;

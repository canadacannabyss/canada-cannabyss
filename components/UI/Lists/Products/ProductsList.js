import Link from 'next/link';
import React, { Fragment } from 'react';
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
} from '../../../../styles/Components/UI/Lists/ProductsList/ProductsList';
import RoundFloatNumber from '../../../../utils/Calculate/roundFloatNumber';

const ProductsList = (props) => {
  const { products } = props;
  const roundFloatNumber = new RoundFloatNumber();

  return (
    <>
      {products.map((product) => (
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
                  <ProductPrice>C$ {product.prices.price}</ProductPrice>
                )}
              </Details>
              <ViewDiv />
            </ProductLinkTo>
          </Link>
        </Fragment>
      ))}
    </>
  );
};

export default ProductsList;

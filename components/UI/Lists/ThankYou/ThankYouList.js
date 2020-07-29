import React, { Fragment } from 'react';
import Link from 'next/link';

import {
  ProductLinkTo,
  Details,
  ProductImage,
  ProductName,
  ProductPrice,
  ViewDiv,
} from '../../../../styles/Components/UI/Lists/ThankYou/ThankYouList';

const ThankYouList = (props) => {
  const { products } = props;

  return (
    <>
      {products.map((product) => (
        <Fragment key={product._id}>
          <Link href='/product/[slug]' as={`/product/${product.slug}`}>
            <ProductLinkTo>
              <ProductImage
                style={{
                  backgroundImage: `url('${product.media[0].url}')`,
                }}
              />
              <Details>
                <ProductName>{product.productName}</ProductName>
                <ProductPrice>C$ {product.prices.price}</ProductPrice>
              </Details>
              <ViewDiv />
            </ProductLinkTo>
          </Link>
        </Fragment>
      ))}
    </>
  );
};

export default ThankYouList;

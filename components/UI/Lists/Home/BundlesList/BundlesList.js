import Link from 'next/link';
import React, { Fragment } from 'react';
import {
  ComboName,
  ComboPrice,
  BundleNewPriceDiscount,
  BundleOldPriceDiscount,
  BundlePrice,
  DiscountPercentage,
  DiscountPricesDiv,
  DivScroll,
  Grid,
  LinkTo,
  EmptyProducts,
  ProductImage,
  Wrapper,
} from '../../../../../styles/Components/UI/Lists/BundlesList/BundlesList';
import RoundFloatNumber from '../../../../../utils/Calculate/roundFloatNumber';

const BundlesList = (props) => {
  const { bundles } = props;
  const roundFloatNumber = new RoundFloatNumber();

  return (
    <>
      {bundles.map((bundle) => (
        <Fragment key={bundle._id}>
          <Link href='bundle/[slug]' as={`/bundle/${bundle.slug}`}>
            <LinkTo>
              <Wrapper productLength={bundle.products.length}>
                {bundle.prices.compareTo !== null &&
                  bundle.prices.compareTo > 0 && (
                    <DiscountPercentage>
                      <p>
                        {roundFloatNumber.calculateDiscountPercentage(
                          bundle.prices.price,
                          bundle.prices.compareTo
                        )}
                        %
                      </p>
                    </DiscountPercentage>
                  )}
                {bundle.products.length > 0 ? (
                  <DivScroll>
                    <Grid productLength={bundle.products.length}>
                      {bundle.products.map((product) => (
                        <div key={product._id}>
                          <ProductImage src={product.media.url} />
                        </div>
                      ))}
                    </Grid>
                  </DivScroll>
                ) : (
                  <EmptyProducts>
                    <p>No products</p>
                  </EmptyProducts>
                )}
                <ComboName>{bundle.bundleName}</ComboName>
                {bundle.prices.compareTo !== null &&
                bundle.prices.compareTo > 0 ? (
                  <DiscountPricesDiv>
                    <BundleOldPriceDiscount>
                      C$ {bundle.prices.compareTo}
                    </BundleOldPriceDiscount>
                    <BundleNewPriceDiscount>
                      C$ {bundle.prices.price}
                    </BundleNewPriceDiscount>
                  </DiscountPricesDiv>
                ) : (
                  <BundlePrice>C$ {bundle.prices.price}</BundlePrice>
                )}
              </Wrapper>
            </LinkTo>
          </Link>
        </Fragment>
      ))}
    </>
  );
};

export default BundlesList;

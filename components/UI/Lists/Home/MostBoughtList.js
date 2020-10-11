import React, {Fragment} from 'react'
import Link from 'next/link'
import {
  Container,
  ProductImage,
  ContentDiv,
  Title,
  DiscountPricesDiv,
  ProductNewPriceDiscount,
  ProductOldPriceDiscount,
  Price,
  LinkTo,
  DiscountPercentage
} from '../../../../styles/Pages/Home/MostBought'
import RoundFloatNumber from '../../../../utils/Calculate/roundFloatNumber';


const MostBoughtList = (props) => {
  const { mostBought } = props;

  const roundFloatNumber = new RoundFloatNumber();

  return (
    <>
    {mostBought.data.map((bought, key) => (
      <Fragment key={bought._id}>
        <Link href='/product/[slug]' as={`/product/${bought.slug}`}>
          <LinkTo>
            <Container>
              {bought.prices.compareTo !== null &&
                bought.prices.compareTo > 0 && (
                  <DiscountPercentage>
                    <p>
                      {roundFloatNumber.calculateDiscountPercentage(
                        bought.prices.price,
                        bought.prices.compareTo
                      )}
                      %
                    </p>
                  </DiscountPercentage>
                )}
              <ProductImage src={bought.media.url} />
              <ContentDiv>
                <Title>{bought.productName}</Title>
                {bought.prices.compareTo !== null &&
                bought.prices.compareTo > 0 ? (
                  <>
                    <DiscountPricesDiv id={`recentlyAddedPrice-${key}`}>
                      <ProductOldPriceDiscount>
                        C$ {bought.prices.compareTo}
                      </ProductOldPriceDiscount>
                      <ProductNewPriceDiscount>
                        C$ {bought.prices.price}
                      </ProductNewPriceDiscount>
                    </DiscountPricesDiv>
                  </>
                ) : (
                  <Price id={`recentlyAddedPrice-${key}`}>
                    C$ {bought.prices.price}
                  </Price>
                )}
              </ContentDiv>
            </Container>
          </LinkTo>
        </Link>
      </Fragment>
    ))}
  </>
  )
}

export default MostBoughtList

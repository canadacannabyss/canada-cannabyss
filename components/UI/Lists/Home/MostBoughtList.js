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
  LinkTo
} from '../../../../styles/Pages/Home/MostBought'

const MostBoughtList = (props) => {
  const { mostBought } = props;

  return (
    <>
    {mostBought.data.map((bought, key) => (
      <Fragment key={bought._id}>
        <Link href='/product/[slug]' as={`/product/${bought.slug}`}>
          <LinkTo>
            <Container>
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

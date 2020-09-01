import React from 'react';
import Link from 'next/link';
import {
  Div,
  DivNamePrice,
  ProductImg,
  DiscountPricesDiv,
  ProductNewPriceDiscount,
  ProductOldPriceDiscount,
  ProductName,
  ProductNumbers,
  ProductPrice,
  RemoveItemBtn,
  Wrapper,
} from '../../../../styles/Components/UI/Lists/Checkout/CartList';

const CartList = (props) => {
  const { items } = props;

  return (
    <>
      {items.map((item) => (
        <Wrapper key={item._id}>
          <Div>
            {item.type === 'product' && (
              <Link href='/product/[slug]' as={`/product/${item.slug}`}>
                <ProductImg src={item.media.url} />
              </Link>
            )}
            {item.type === 'bundle' && (
              <Link href='/bundle/[slug]' as={`/bundle/${item.slug}`}>
                <ProductImg src={item.media.url} />
              </Link>
            )}
          </Div>
          <DivNamePrice>
            <ProductName>{item.itemName}</ProductName>
            {item.prices.compareTo !== null && item.prices.compareTo > 0 ? (
              <>
                <DiscountPricesDiv>
                  <ProductOldPriceDiscount>
                    C$ {item.prices.compareTo}
                  </ProductOldPriceDiscount>
                  <ProductNewPriceDiscount>
                    C$ {item.prices.price}
                  </ProductNewPriceDiscount>
                </DiscountPricesDiv>
              </>
            ) : (
              <ProductPrice>C$ {item.prices.price}</ProductPrice>
            )}
          </DivNamePrice>
          <Div>
            <ProductNumbers>
              <span>X </span> {item.quantity}
            </ProductNumbers>
          </Div>
        </Wrapper>
      ))}
    </>
  );
};

export default CartList;

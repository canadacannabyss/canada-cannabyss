import React from 'react';
import Link from 'next/link';
import { FaTimesCircle } from 'react-icons/fa';
import {
  Div,
  ProductImg,
  DiscountPricesDiv,
  ProductNewPriceDiscount,
  ProductOldPriceDiscount,
  ProductName,
  ProductNumbers,
  ProductPrice,
  RemoveItemBtn,
  Wrapper,
} from '../../../../styles/Components/UI/Lists/CartList/CartList';

const CartList = (props) => {
  const { items, handleRemoveItem } = props;

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
          <Div>
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
          </Div>
          <Div>
            <ProductNumbers>
              <span>X </span> {item.quantity}
            </ProductNumbers>
          </Div>
          <Div>
            <RemoveItemBtn onClick={() => handleRemoveItem(item)}>
              <FaTimesCircle />
            </RemoveItemBtn>
          </Div>
        </Wrapper>
      ))}
    </>
  );
};

export default CartList;

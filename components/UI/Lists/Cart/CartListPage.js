import React from 'react';
import Link from 'next/link';
import { FaTimesCircle } from 'react-icons/fa';
import {
  Div,
  ProductImg,
  ProductName,
  ProductNumbers,
  ProductPrice,
  RemoveItemBtn,
  DiscountPricesDivCartPage,
  ProductNewPriceDiscountCartPage,
  ProductOldPriceDiscountCartPage,
  Wrapper,
} from '../../../../styles/Components/UI/Lists/CartList/CartList';

const CartListPage = (props) => {
  const { items, handleRemoveItem } = props;
  console.log('props:', items);

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
                <DiscountPricesDivCartPage>
                  <ProductOldPriceDiscountCartPage>
                    C$ {item.prices.compareTo}
                  </ProductOldPriceDiscountCartPage>
                  <ProductNewPriceDiscountCartPage>
                    C$ {item.prices.price}
                  </ProductNewPriceDiscountCartPage>
                </DiscountPricesDivCartPage>
              </>
            ) : (
              <ProductPrice>C$ {item.prices.price}</ProductPrice>
            )}
          </Div>
          <Div>
            <ProductNumbers>
              <span className='xSymbol'>X</span>{' '}
              <span className='amount'>{item.quantity}</span>
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

export default CartListPage;

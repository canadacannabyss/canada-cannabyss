import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaPen, FaPlus } from 'react-icons/fa';
import {
  Grid,
  Label,
  OrderBtn,
  OrderDate,
  OrderDetailsDateDiv,
  OrderDetailsDiv,
  OrderId,
  OrdersProductImg,
  EditBtn,
  OrdersProductName,
  OrderDetailsUserDiv,
  OrderDetailsUserName,
  VariantName,
  OrdersProducts,
  UserDiv,
  UserImageDiv,
  UserName,
  OrderTotalPrice,
  Status,
  Select,
} from '../../../../../styles/Components/UI/Lists/Account/OrdersList/OrdersList';
import DateFormatter from '../../../../../utils/DateFormatter';
import {
  updateShippingStatus,
  updatePaymentStatus,
} from '../../../../../store/actions/orders/orders';

const OrderDetails = (props) => {
  const { order } = props;
  const dispatch = useDispatch();

  const [editable, setEditable] = useState(false);

  const toggleEditable = () => {
    setEditable(!editable);
  };

  const handleUpdateShippingStatus = (e) => {
    const newShippingStatus = e.target.value;
    if (newShippingStatus !== '0') {
      dispatch(updateShippingStatus(order._id, newShippingStatus));
    }
  };

  const handleUpdatePaymentStatus = (e) => {
    const newPaymentStatus = e.target.value;
    if (newPaymentStatus !== '0') {
      dispatch(updatePaymentStatus(order._id, newPaymentStatus));
    }
  };

  return (
    <OrderDetailsDiv className='details'>
      <UserDiv>
        <UserImageDiv userImage={order.user.profileImage.url} />
        <UserName>{`${order.user.names.firstName} ${order.user.names.lastName}`}</UserName>
      </UserDiv>
      <EditBtn
        onClick={() => {
          toggleEditable();
        }}
      >
        {editable ? (
          <div>
            <FaPlus />
          </div>
        ) : (
          <FaPen />
        )}
      </EditBtn>
      <Grid>
        <div>
          <Label>Shipping Status</Label>
          {editable ? (
            <>
              <br />
              <Select
                onChange={(e) => {
                  handleUpdateShippingStatus(e);
                }}
              >
                <option value={0}>-------------------</option>
                <option value={false}>Processing order</option>
                <option value={true}>Shipped</option>
              </Select>
              <br />
            </>
          ) : (
            <Status>
              {order.shipping.status.shipped ? 'Shipped' : 'Processing order'}
            </Status>
          )}

          <Label>Payment Method</Label>
          {order.paymentMethod.card.provider !== null &&
            order.paymentMethod.card.id !== null && (
              <Status>Credit Card</Status>
            )}
          {order.paymentMethod.cryptoCurrency.currency !== null &&
            order.paymentMethod.cryptoCurrency.id && (
              <Status>Crypto Currency</Status>
            )}
          {order.paymentMethod.eTransfer && <Status>e-Transfer</Status>}
          <Label>Payment Status</Label>
          {editable ? (
            <>
              <br />
              <Select
                onChange={(e) => {
                  handleUpdatePaymentStatus(e);
                }}
              >
                <option value={0}>-------------------</option>
                <option value={false}>Pending</option>
                <option value={true}>Paid</option>
              </Select>
              <br />
            </>
          ) : (
            <>{order.paid ? <Status>Paid</Status> : <Status>Pending</Status>}</>
          )}
        </div>
        <div>
          <Label>Shipping Address</Label>
          {order.shippingAddress !== null ? (
            <Status>{`${order.shippingAddress.addressLine1}, ${order.shippingAddress.city}, ${order.shippingAddress.provinceState}, ${order.shippingAddress.country}`}</Status>
          ) : (
            <Status>Not Applied</Status>
          )}

          <Label>Coupon</Label>
          {order.coupon !== null ? (
            <Status>{order.coupon.couponName}</Status>
          ) : (
            <Status>Not Applied</Status>
          )}
          <Label>Total</Label>
          <OrderTotalPrice>
            <span>C$</span> <span className='price'>{order.total}</span>
          </OrderTotalPrice>
        </div>
      </Grid>
      <Label>Items</Label>
      <OrdersProducts productsLength={order.cart.items.length}>
        {order.cart.items.map((item) => (
          <div key={item._id}>
            <Link href='/product/[slug]' as={`/product/${item.slug}`}>
              <a>
                <OrdersProductImg src={item.media.url} />
                <OrdersProductName>{item.itemName}</OrdersProductName>
                {/* {item.variant.length > 0 && item.variantName.length > 0 && (
                  <> */}
                {item.variant.map((element, index) => {
                  <>
                    <VariantName>
                      <strong>{item.variantName[index]}</strong>
                      {element}
                    </VariantName>
                  </>;
                })}
                {/* </>
                )} */}
              </a>
            </Link>
          </div>
        ))}
      </OrdersProducts>
    </OrderDetailsDiv>
  );
};

const OrdersList = (props) => {
  const { orders, handleClickOrderDiv } = props;
  const dateFormatter = new DateFormatter();

  const handleToggle = (e) => {
    const toggle = handleClickOrderDiv;
    toggle(e.currentTarget);
  };

  return (
    <>
      {orders.map((order, key) => (
        <li key={order._id}>
          <OrderBtn onClick={handleToggle} className='orderDiv' id={order._id}>
            <OrderDetailsDateDiv>
              <OrderId>
                <span>Order ID:</span> <span className='id'>{order._id}</span>
                <br />
                {/* <OrderDetailsUserDiv userImage={order.user.profileImage.url} /> */}
                {/* <OrderDetailsUserName>{order.user.name}</OrderDetailsUserName> */}
              </OrderId>
              <OrderDate>
                {order.purchasedAt !== null ? (
                  <span>
                    {dateFormatter.formatDateFullDate(order.purchasedAt)}
                  </span>
                ) : (
                  <span>Unavailable date</span>
                )}
              </OrderDate>
            </OrderDetailsDateDiv>
            <OrderDetails order={order} />
          </OrderBtn>
        </li>
      ))}
    </>
  );
};

export default OrdersList;

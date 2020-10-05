import Link from 'next/link';
import React from 'react';
import {
  Grid,
  Label,
  OrderBtn,
  OrderDate,
  OrderDetailsDateDiv,
  OrderDetailsDiv,
  OrderId,
  OrdersProductImg,
  OrdersProductName,
  OrdersProducts,
  OrderTotalPrice,
  GroupSpan,
  Status,
} from '../../../../../styles/Components/UI/Lists/Account/OrdersList/OrdersList';
import DateFormatter from '../../../../../utils/DateFormatter';

const OrderDetails = (props) => {
  const { order } = props;

  const dateFormatter = new DateFormatter();

  return (
    <OrderDetailsDiv className='details'>
      <Grid>
        <div>
          <Label for='orderId'>Order ID</Label>
          <Status>{order._id}</Status>
        </div>
        <div>
          <Label>Order Status</Label>
          <Status>{order.canceled ? 'Canceled' : 'Fulfilled'}</Status>
        </div>
      </Grid>
      <Grid>
        <div>
          <Label>Purchased At</Label>
          <Status>{dateFormatter.formatDateFullDate(order.purchasedAt)}</Status>
        </div>
        <div />
      </Grid>
      <br />
      <GroupSpan>Shipping information</GroupSpan>
      <Grid>
        <div>
          <Label>Shipping Status</Label>
          <Status>
            {order.shipping.status.shipped ? 'Shipped' : 'Processing order'}
          </Status>
        </div>
        <div>
          <Label htmlFor='shippingAddress'>Shipping Address</Label>
          <Status id='shippingAddress'>
            {`${order.shippingAddress.addressLine1}, ${order.shippingAddress.city}, ${order.shippingAddress.provinceState}, ${order.shippingAddress.country}`}
          </Status>
        </div>
      </Grid>
      <Grid>
        <div>
          <Label>Shipped at</Label>
          <Status>
            {order.shipping.status.when ? (
              <>
                {dateFormatter.formatDateFullDate(order.shipping.status.when)}
              </>
            ) : (
              'Not Shipped yet'
            )}
          </Status>
        </div>
      </Grid>
      <br />
      <GroupSpan>Billing information</GroupSpan>
      <Label>Billing Address</Label>
      <Status id='shippingAddress'>
        {`${order.billingAddress.addressLine1}, ${order.billingAddress.city}, ${order.billingAddress.provinceState}, ${order.billingAddress.country}`}
      </Status>
      <br />
      <GroupSpan>Payment information</GroupSpan>
      <Grid>
        <div>
          <Label>Payment Method</Label>
          <>
            {order.paymentMethod.cryptocurrency.symbol !== null &&
              order.paymentMethod.cryptocurrency.address !== null && (
                <Status>Cryptocurrency</Status>
              )}
            {order.paymentMethod.eTransfer.isETransfer && (
              <Status>e-Transfer</Status>
            )}
          </>
        </div>
        <div>
          {order.paymentMethod.cryptocurrency.symbol !== null &&
            order.paymentMethod.cryptocurrency.name !== null &&
            order.paymentMethod.cryptocurrency.address !== null &&
            order.paymentMethod.cryptocurrency.logo && (
              <>
                <Label>Cryptocurrency</Label>
                <Status className='cryptoLogoSymbolName'>
                  <img
                    src={order.paymentMethod.cryptocurrency.logo}
                    alt={`${order.paymentMethod.cryptocurrency.symbol} logo`}
                  />
                  {`${order.paymentMethod.cryptocurrency.symbol} - ${order.paymentMethod.cryptocurrency.name}`}
                </Status>
              </>
            )}
          {order.paymentMethod.eTransfer.isETransfer && (
            <>
              <Label>Customer Email</Label>
              <Status>{order.customer.email}</Status>
            </>
          )}
        </div>
      </Grid>
      <>
        {order.paymentMethod.cryptocurrency.symbol !== null &&
          order.paymentMethod.cryptocurrency.name !== null &&
          order.paymentMethod.cryptocurrency.address !== null &&
          order.paymentMethod.cryptocurrency.logo && (
            <>
              <Grid>
                <div>
                  <Label>
                    {`Your ${order.paymentMethod.cryptocurrency.name} Wallet`}
                  </Label>
                  <Status>
                    {order.paymentMethod.cryptocurrency.customerAddress}
                  </Status>
                </div>
                <div>
                  <Label>
                    {`Canada Cannabyss ${order.paymentMethod.cryptocurrency.name} Wallet`}
                  </Label>
                  <Status>
                    {order.paymentMethod.cryptocurrency.companyAddress}
                  </Status>
                </div>
              </Grid>
            </>
          )}
      </>
      {order.paymentMethod.eTransfer.recipient !== null && (
        <>
          <Grid>
            <div>
              <Label>Recipient</Label>
              <Status>{order.paymentMethod.eTransfer.recipient}</Status>
            </div>
            <div></div>
          </Grid>
        </>
      )}
      <Grid>
        <div>
          <Label>Payment Status</Label>
          <Status>{order.paid ? 'Paid' : 'Pending'}</Status>
        </div>
        <div>
          <Label>Total</Label>
          <Status>C$ {order.total}</Status>
        </div>
      </Grid>
      {order.paymentMethod.cryptocurrency.symbol !== null &&
        order.paymentMethod.cryptocurrency.name !== null &&
        order.paymentMethod.cryptocurrency.address !== null &&
        order.paymentMethod.cryptocurrency.logo &&
        order.totalInCryptocurrency !== null && (
          <Grid>
            <div>
              <Label>
                Total in {order.paymentMethod.cryptocurrency.symbol}
              </Label>
              <Status>{order.totalInCryptocurrency}</Status>
            </div>
            <div></div>
          </Grid>
        )}
      {order.tracking.number !== null && order.tracking.postalService !== null && (
        <>
          <br />
          <Grid>
            <div>
              <Label>Tracking Number</Label>
              <Status>{order.tracking.number}</Status>
            </div>
            <div>
              <Label>Postal Service</Label>
              <Status>{order.tracking.postalService.name}</Status>
            </div>
          </Grid>
        </>
      )}
      <br />
      <Label>Items</Label>
      <OrdersProducts productsLength={order.cart.items.length}>
        {order.cart.items.map((item) => (
          <div key={item._id}>
            {item.type === 'product' && (
              <Link href='/product/[slug]' as={`/product/${item.slug}`}>
                <a>
                  <OrdersProductImg src={item.media.url} />
                  <OrdersProductName>{item.itemName}</OrdersProductName>
                </a>
              </Link>
            )}
            {item.type === 'bundle' && (
              <Link href='/bundle/[slug]' as={`/bundle/${item.slug}`}>
                <a>
                  <OrdersProductImg src={item.media.url} />
                  <OrdersProductName>{item.itemName}</OrdersProductName>
                </a>
              </Link>
            )}
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
      {orders.map((order) => (
        <li key={order._id}>
          <OrderBtn onClick={handleToggle} className='orderDiv' id={order._id}>
            <OrderDetailsDateDiv>
              <OrderId>
                <span>Order ID:</span> <span className='id'>{order._id}</span>
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

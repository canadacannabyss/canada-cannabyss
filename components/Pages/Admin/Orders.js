import React, { useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import Head from 'next/head';
import { FaSpinner, FaSadTear } from 'react-icons/fa';
import {
  ListDiv,
  OrdersListDiv,
  Title,
  Wrapper,
  NoOrdersYet,
  Loading,
  OrdersListDivFlex,
} from '../../../styles/Pages/Account/Orders';
import AdminLayout from '../../AdminLayout';
import OrdersList from '../../UI/Lists/Admin/Orders/OrdersList';
import { getAllOrders } from '../../../store/actions/orders/orders';

const mapStateToProps = (state) => {
  const { orders } = state;
  return {
    orders,
  };
};

const Orders = (props) => {
  const { orders } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  const handleClickOrderDiv = (el) => {
    const element = el;
    const ordersDiv = document.querySelectorAll('.orderDiv');
    const ordersDivArray = [...ordersDiv];
    ordersDivArray.map((order) => {
      order.classList.remove('selected');
      order.childNodes[1].classList.remove('show');
    });
    element.classList.add('selected');
    element.childNodes[1].classList.add('show');
    console.log('element details:', element.childNodes[1]);
  };

  return (
    <AdminLayout>
      <Head>
        <title>Orders | Administrator - Canada Cannabyss</title>
      </Head>
      <Wrapper>
        <ListDiv>
          <Title>Orders</Title>

          {orders.loading ? (
            <OrdersListDiv>
              <Loading>
                <FaSpinner />
              </Loading>
            </OrdersListDiv>
          ) : (
            <>
              {orders.fetched && !_.isEmpty(orders.data) && !orders.data.error && (
                <OrdersListDiv id='orderList'>
                  <OrdersList
                    orders={orders.data}
                    handleClickOrderDiv={handleClickOrderDiv}
                  />
                </OrdersListDiv>
              )}
              {orders.fetched && _.isEmpty(orders.data) && !orders.error && (
                <OrdersListDivFlex>
                  <div>
                    <FaSadTear />
                    <NoOrdersYet>No orders yet.</NoOrdersYet>
                  </div>
                </OrdersListDivFlex>
              )}
              {!orders.fetched && orders.errors && !orders.loading && (
                <OrdersListDivFlex>
                  <div>
                    <FaSadTear />
                    <NoOrdersYet>Something went wrong.</NoOrdersYet>
                  </div>
                </OrdersListDivFlex>
              )}
            </>
          )}
          {orders.error && (
            <OrdersListDivFlex>
              <div>
                <FaSadTear />
                <NoOrdersYet>Something went wrong.</NoOrdersYet>
              </div>
            </OrdersListDivFlex>
          )}
        </ListDiv>
      </Wrapper>
    </AdminLayout>
  );
};

export default connect(mapStateToProps)(Orders);

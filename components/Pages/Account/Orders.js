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
import Layout from '../../Layout';
import OrdersList from '../../UI/Lists/Account/Orders/OrdersList';
import { getUserOrders } from '../../../store/actions/orders/orders';

const mapStateToProps = (state) => {
  const { user, orders } = state;
  return {
    user,
    orders,
  };
};

const Orders = (props) => {
  const { user, orders } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrders(user.data._id));
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
    <Layout>
      <Head>
        <title>Orders | Account - Canada Cannabyss</title>
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
              {orders.fetched && !_.isEmpty(orders.data) ? (
                <OrdersListDiv id='orderList'>
                  <OrdersList
                    orders={orders.data}
                    handleClickOrderDiv={handleClickOrderDiv}
                  />
                </OrdersListDiv>
              ) : (
                <OrdersListDivFlex>
                  <div>
                    <FaSadTear />
                    <NoOrdersYet>No orders yet.</NoOrdersYet>
                  </div>
                </OrdersListDivFlex>
              )}
            </>
          )}
        </ListDiv>
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(Orders);

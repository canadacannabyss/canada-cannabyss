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
import Logo from '../../../assets/img/canada-cannabyss-logo.webp';

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
        <meta
          name='description'
          content='Orders | Account - Canada Cannabyss.'
        />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Orders | Account - Canada Cannabyss'
        />
        <meta property='og:type' content='article' />
        <meta
          property='og:url'
          content={`${process.env.MAIN_DOMAIN}/account/orders`}
        />
        <meta
          property='og:description'
          content='Orders | Account - Canada Cannabyss.'
        />
        <meta property='og:image' content={Logo} />
        <meta property='og:site_name' content='Canada Cannabyss' />

        {/* Google+ */}
        <meta itemprop='name' content='Orders | Account - Canada Cannabyss' />
        <meta
          itemprop='description'
          content='Orders | Account - Canada Cannabyss'
        />
        <meta itemprop='image' content={Logo} />

        {/* Twitter */}
        <meta name='twitter:card' content='product' />
        <meta name='twitter:site' content='@canadacannabyss' />
        <meta
          name='twitter:title'
          content='Orders | Account - Canada Cannabyss'
        />
        <meta
          name='twitter:description'
          content='Orders | Account - Canada Cannabyss.'
        />
        <meta name='twitter:creator' content='@canadacannabyss' />
        <meta name='twitter:image' content={Logo} />
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

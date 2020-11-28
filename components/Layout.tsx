import _ from 'lodash';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../store/actions/cart/cart';
import { getOrder } from '../store/actions/order/order';
import { getProductsCategories } from '../store/actions/products/products';
import { getBundlesCategories } from '../store/actions/bundles/bundles';
import { Content } from '../styles/Components/UI/Layout';
import Footer from './UI/Footer/Footer';
import Navbar from './UI/Navbar/Navbar';

const layoutStyle = {
  height: '100%',
  width: '100%',
};

const Layout = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const order = useSelector((state) => state.order);
  const loginRequestCount = useSelector((state) => state.loginRequestCount);

  useEffect(() => {
    dispatch(getProductsCategories());
  }, []);

  useEffect(() => {
    dispatch(getBundlesCategories());
  }, []);

  useEffect(() => {
    if (
      !_.isEmpty(user.data) &&
      user.fetched &&
      !cart.fetched
      // loginRequestCount.data > 0
    ) {
      dispatch(getCart(user.data._id));
    }
  }, [user, loginRequestCount]);

  useEffect(() => {
    if (
      !_.isEmpty(cart.data) &&
      cart.fetched &&
      !_.isEmpty(user.data) &&
      user.fetched &&
      !order.fetched
    ) {
      dispatch(getOrder(user.data._id, cart.data._id));
    }
  }, [cart]);

  return (
    <div className="Layout" style={layoutStyle}>
      <Navbar />
      <Content>{props.children}</Content>
      <Footer />

      <style jsx global>
        {`
          * {
            box-sizing: border-box;
          }

          html,
          body,
          #__next {
            height: 100%;
            width: 100%;
          }

          body {
            margin: 0;
            padding: 0;
            font-family: 'Montserrat';
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          .Layout {
          }

          .Content {
          }

          @keyframes showSideDrawer {
            0% {
              transform: translateX(-250px);
              box-shadow: 1px 6px 6px 1px rgba(0, 0, 0, 0);
            }
            100% {
              transform: translateX(0px);
              box-shadow: 1px 6px 6px 1px rgba(0, 0, 0, 0.2);
            }
          }

          @keyframes showBackgroundSideDrawer {
            0% {
              background: rgba(0, 0, 0, 0);
            }
            100% {
              background: rgba(0, 0, 0, 0.2);
            }
          }

          @keyframes hideSideDrawer {
            0% {
              transform: translateX(0px);
              box-shadow: 1px 6px 6px 1px rgba(0, 0, 0, 0.2);
            }
            100% {
              transform: translateX(-250px);
              box-shadow: 1px 6px 6px 1px rgba(0, 0, 0, 0);
            }
          }

          @keyframes hideBackgroundSideDrawer {
            0% {
              background: rgba(0, 0, 0, 0.2);
              display: block !important;
            }
            100% {
              background: rgba(0, 0, 0, 0);
              display: none !important;
            }
          }

          .showSideDrawer {
            animation: showSideDrawer 0.25s ease-in-out;
            animation-fill-mode: forwards;
          }

          .showBackgroundSideDrawer {
            display: block !important;
            animation: showBackgroundSideDrawer 0.25s ease-in-out;
            animation-fill-mode: forwards;
          }

          .hideSideDrawer {
            animation: hideSideDrawer 0.25s ease-in-out;
            animation-fill-mode: forwards;
          }

          .hideBackgroundSideDrawer {
            animation: hideBackgroundSideDrawer 0.25s ease-in-out;
            animation-fill-mode: forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;

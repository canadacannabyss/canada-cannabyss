import withReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import Logo from '../assets/img/canada-cannabyss-logo.svg';
import createStore from '../store';
import { loginUser } from '../store/actions/user/user';
import '../styles/_app.css';

let count = 0;

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    const { store } = ctx;

    if (count === 0) {
      console.log('count');
      // store.dispatch(loginUser());
      count++;
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Head>
          <link rel='icon' type='image/png' href={Logo} />
        </Head>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));

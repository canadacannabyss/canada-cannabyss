import Head from 'next/head';
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
  Wrapper,
  LoadingProductContainer,
} from '../../../../styles/Pages/Products/Category/Category';
import Layout from '../../../Layout';
import ProductsList from '../../../UI/Lists/Products/ProductsList';

const mapStateToProps = (state) => {
  const { products } = state;
  return {
    products,
  };
};

const Products = (props) => {
  const { products } = props;
  return (
    <Layout>
      <Head>
        <title>All Products - Canada Cannabyss</title>
      </Head>
      <Wrapper>
        {products.loading && (
          <>
            <LoadingProductContainer />
            <LoadingProductContainer />
            <LoadingProductContainer />
            <LoadingProductContainer />
            <LoadingProductContainer />
            <LoadingProductContainer />
            <LoadingProductContainer />
            <LoadingProductContainer />
          </>
        )}
        {products.fetched &&
          !products.loading &&
          !products.error &&
          !_.isEmpty(products.data) && (
            <ProductsList products={products.data} />
          )}
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(Products);

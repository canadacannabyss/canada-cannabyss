import Head from 'next/head';
import React from 'react';
import { connect } from 'react-redux';
import { Wrapper } from '../../../styles/Pages/Products/Products';
import Layout from '../../Layout';
import ProductsList from '../../UI/Lists/Products/ProductsList';

const mapStateToProps = (state) => {
  const { products } = state;
  return {
    products,
  };
};

const Products = (props) => {
  const products = props.products.data;
  return (
    <Layout>
      <Head>
        <title>All Products - Canada Cannabyss</title>
      </Head>
      <Wrapper>
        <ProductsList products={products} />
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(Products);

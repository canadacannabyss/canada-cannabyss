import Head from 'next/head';
import React from 'react';
import { connect } from 'react-redux';
import { Wrapper } from '../../../styles/Pages/Products/Products';
import Layout from '../../Layout';
import ProductsList from '../../UI/Lists/Products/ProductsList';
import Logo from '../../../assets/img/canada-cannabyss-logo.webp';

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
        <meta name='description' content='Privacy Policy - Canada Cannabyss.' />

        {/* Open Graph */}
        <meta property='og:title' content='Privacy Policy - Canada Cannabyss' />
        <meta property='og:type' content='article' />
        <meta
          property='og:url'
          content={`${process.env.MAIN_DOMAIN}/promotions`}
        />
        <meta
          property='og:description'
          content='Privacy Policy - Canada Cannabyss.'
        />
        <meta property='og:image' content={Logo} />
        <meta property='og:site_name' content='Canada Cannabyss' />

        {/* Google+ */}
        <meta itemprop='name' content='Privacy Policy - Canada Cannabyss' />
        <meta
          itemprop='description'
          content='Privacy Policy - Canada Cannabyss'
        />
        <meta itemprop='image' content={Logo} />

        {/* Twitter */}
        <meta name='twitter:card' content='product' />
        <meta name='twitter:site' content='@canadacannabyss' />
        <meta
          name='twitter:title'
          content='Privacy Policy - Canada Cannabyss'
        />
        <meta
          name='twitter:description'
          content='Privacy Policy - Canada Cannabyss.'
        />
        <meta name='twitter:creator' content='@canadacannabyss' />
        <meta name='twitter:image' content={Logo} />
      </Head>
      <Wrapper>
        <ProductsList products={products} />
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(Products);

import Head from 'next/head';
import React from 'react';
import { connect } from 'react-redux';
import { Wrapper } from '../../../styles/Pages/Home/Home';
import Layout from '../../Layout';
import BannerCarousel from '../../UI/Carousel/Promotion';
import Bundles from './Bundles';
import PopularCategories from './Categories';
import MainProducts from './MainProducts';
import RecentlyAdded from './RecentlyAdded';

const mapStateToProps = (state) => {
  const { home } = state;
  return {
    mainProducts: home.mainProducts,
    mainBundles: home.mainBundles,
    newestProducts: home.newestProducts,
    mainCategories: home.mainCategories,
    banners: home.banners,
  };
};

const Home = (props) => {
  const {
    mainProducts,
    mainBundles,
    newestProducts,
    mainCategories,
    banners,
  } = props;

  return (
    <Layout>
      <Head>
        <title>Canada Cannabyss</title>
      </Head>
      <Wrapper>
        <MainProducts products={mainProducts} />
        <br />
        <BannerCarousel banners={banners} />
        <br />
        <Bundles bundles={mainBundles} />
        <RecentlyAdded products={newestProducts} />
        <PopularCategories categories={mainCategories} />
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(Home);

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
import Logo from '../../../assets/img/canada-cannabyss-logo.webp';

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
        <title>Canada Cannabyss - Canadian Cannabis Wholesaler</title>
        <meta name='description' content='Canadian Cannabis Wholesaler.' />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Canada Cannabyss - Canadian Cannabis Wholesaler'
        />
        <meta property='og:type' content='article' />
        <meta property='og:url' content={`${process.env.MAIN_DOMAIN}`} />
        <meta
          property='og:description'
          content='Canadian Cannabis Wholesaler.'
        />
        <meta property='og:image' content={Logo} />
        <meta property='og:site_name' content='Canada Cannabyss' />

        {/* Google+ */}
        <meta
          itemprop='name'
          content='Canada Cannabyss - Canadian Cannabis Wholesaler'
        />
        <meta itemprop='description' content='Canadian Cannabis Wholesaler' />
        <meta itemprop='image' content={Logo} />

        {/* Twitter */}

        <meta name='twitter:card' content='product' />
        <meta name='twitter:site' content='@canadacannabyss' />
        <meta
          name='twitter:title'
          content='Canada Cannabyss - Canadian Cannabis Wholesaler'
        />
        <meta
          name='twitter:description'
          content='Canadian Cannabis Wholesaler.'
        />
        <meta name='twitter:creator' content='@canadacannabyss' />
        <meta name='twitter:image' content={Logo} />
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

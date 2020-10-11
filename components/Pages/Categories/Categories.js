import React from 'react';
import _ from 'lodash';
import Head from 'next/head';
import { connect } from 'react-redux';
import {
  Wrapper,
  ListDiv,
  LoadingAllCategories,
  LoadingCategoryWrapper,
  LoadingH1,
  AllCategories,
} from '../../../styles/Pages/Categories/Categories';
import CategoriesList from '../../UI/Lists/Home/CategoriesList/CategoriesList';
import Layout from '../../Layout';
import Logo from '../../../assets/img/canada-cannabyss-logo.webp';

const mapStateToProps = (state) => {
  const { categories } = state;
  return {
    categories,
  };
};

const Categories = (props) => {
  const { categories } = props;

  return (
    <Layout>
      <Head>
        <title>All Categories - Canada Cannabyss</title>
        <meta name='description' content='All Categories - Canada Cannabyss.' />

        {/* Open Graph */}
        <meta property='og:title' content='All Categories - Canada Cannabyss' />
        <meta property='og:type' content='article' />
        <meta
          property='og:url'
          content={`${process.env.SECURED_MAIN_DOMAIN}/categories`}
        />
        <meta
          property='og:description'
          content='All Categories - Canada Cannabyss.'
        />
        <meta property='og:image' content={Logo} />
        <meta property='og:site_name' content='Canada Cannabyss' />

        {/* Google+ */}
        <meta itemprop='name' content='All Categories - Canada Cannabyss' />
        <meta
          itemprop='description'
          content='All Categories - Canada Cannabyss'
        />
        <meta itemprop='image' content={Logo} />

        {/* Twitter */}
        <meta name='twitter:card' content='product' />
        <meta name='twitter:site' content='@canadacannabyss' />
        <meta
          name='twitter:title'
          content='All Categories - Canada Cannabyss'
        />
        <meta
          name='twitter:description'
          content='All Categories - Canada Cannabyss.'
        />
        <meta name='twitter:creator' content='@canadacannabyss' />
        <meta name='twitter:image' content={Logo} />
      </Head>
      <Wrapper>
        {categories.loading &&
          !categories.errors &&
          !categories.fetched &&
          _.isEmpty(categories.data) && (
            <ListDiv>
              <LoadingCategoryWrapper />
              <LoadingCategoryWrapper />
              <LoadingCategoryWrapper />
              <LoadingCategoryWrapper />
              <LoadingCategoryWrapper />
              <LoadingCategoryWrapper />
              <LoadingCategoryWrapper />
              <LoadingCategoryWrapper />
            </ListDiv>
          )}
        {categories.fetched &&
          !_.isEmpty(categories.data) &&
          !categories.loading &&
          !categories.error && (
            <>
              <ListDiv>
                {categories.fetched && !_.isEmpty(categories.data) && (
                  <CategoriesList categories={categories.data} />
                )}
              </ListDiv>
            </>
          )}
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(Categories);

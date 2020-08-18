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

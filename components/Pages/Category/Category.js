import Head from 'next/head';
import _ from 'lodash';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  BtnsWrapper,
  Wrapper,
  ToggleBtnsList,
  ToggleBtn,
  LoadingProductContainer,
} from '../../../styles/Pages/Category/Category';
import Layout from '../../Layout';
import ProductsList from '../../UI/Lists/Category/ProductsList';
import BundlesList from '../../UI/Lists/Category/BundlesList';

const mapStateToProps = (state) => {
  const { products, bundles } = state;
  return {
    products,
    bundles,
  };
};

const Category = (props) => {
  const { products, bundles, asPath } = props;

  const [toggleProductsList, setToggleProductList] = useState(true);
  const [toggleBundlesList, setToggleBundlesList] = useState(false);

  let categoryTitle = asPath.substring(10, asPath.length).split('-').join(' ');
  categoryTitle = `${
    categoryTitle[0].toUpperCase() +
    categoryTitle.substring(1, categoryTitle.length)
  }`;

  const removeSelectedClassName = () => {
    const selectedBtns = document.querySelectorAll('.selected');
    console.log('selectedBtns:', selectedBtns);
    selectedBtns.forEach((btn) => {
      btn.classList.remove('selected');
    });
  };

  const handleToggleProductList = (e) => {
    setToggleBundlesList(false);
    setToggleProductList(true);
    removeSelectedClassName();
    e.target.classList.add('selected');
  };

  const handleToggleBundlesList = (e) => {
    setToggleProductList(false);
    setToggleBundlesList(true);
    removeSelectedClassName();
    e.target.classList.add('selected');
  };

  return (
    <Layout>
      <Head>
        <title>{`${categoryTitle} | Category - Canada Cannabyss`}</title>
      </Head>
      <BtnsWrapper>
        <ToggleBtnsList>
          <ToggleBtn
            className='selected'
            onClick={(e) => {
              handleToggleProductList(e);
            }}
          >
            Products
          </ToggleBtn>
          <ToggleBtn
            onClick={(e) => {
              handleToggleBundlesList(e);
            }}
          >
            Bundles
          </ToggleBtn>
        </ToggleBtnsList>
      </BtnsWrapper>
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
        {toggleProductsList &&
          products.fetched &&
          !products.error &&
          !_.isEmpty(products.data) &&
          !products.loading && <ProductsList products={products.data} />}
        {toggleBundlesList &&
          bundles.fetched &&
          !bundles.error &&
          !bundles.loading &&
          !_.isEmpty(bundles.data) && <BundlesList bundles={bundles.data} />}
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(Category);
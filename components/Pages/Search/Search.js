import React from 'react';
import Head from 'next/head';
import { FaSadCry } from 'react-icons/fa';
import _ from 'lodash';
import Layout from '../../Layout';
import { connect } from 'react-redux';
import {
  Wrapper,
  WrapperList,
  LoadingProductContainer,
  BundlesGrid,
  NoItems,
} from '../../../styles/Pages/Search/Search';
import ProductsList from '../../UI/Lists/Products/ProductsList';
import BundlesList from '../../UI/Lists/Bundles/BundlesList';

const mapStateToProps = (state) => {
  const { search } = state;
  return {
    search,
  };
};

const Search = (props) => {
  const { search } = props;
  console.log('search:', search);
  return (
    <Layout>
      <Head>
        <title>Search - Canada Cannabyss</title>
      </Head>
      <Wrapper>
        {search.loading && (
          <WrapperList>
            <LoadingProductContainer />
            <LoadingProductContainer />
            <LoadingProductContainer />
            <LoadingProductContainer />
            <LoadingProductContainer />
            <LoadingProductContainer />
            <LoadingProductContainer />
            <LoadingProductContainer />
            <LoadingProductContainer />
            <LoadingProductContainer />
            <LoadingProductContainer />
            <LoadingProductContainer />
          </WrapperList>
        )}
        {!_.isEmpty(search.data) &&
          !search.loading &&
          !search.errors &&
          search.fetched && (
            <>
              {search.data.type === 'all' && (
                <>
                  {search.data.products.length > 0 ? (
                    <WrapperList
                      productLength={() => {
                        if (!_.isEmpty(products.data)) {
                          if (products.data.results !== undefined) {
                            return products.data.results.length;
                          }
                        }
                      }}
                    >
                      <ProductsList products={search.data.products} />
                    </WrapperList>
                  ) : (
                    <NoItems>
                      <FaSadCry />
                      <h2>No Products</h2>
                    </NoItems>
                  )}
                  <br />
                  {search.data.bundles.length > 0 ? (
                    <BundlesGrid>
                      <BundlesList bundles={search.data.bundles} />
                    </BundlesGrid>
                  ) : (
                    <NoItems>
                      <FaSadCry />
                      <h2>No Bundles</h2>
                    </NoItems>
                  )}
                </>
              )}
              {search.data.type === 'products' && (
                <>
                  {search.data.products.length > 0 ? (
                    <WrapperList
                      productLength={() => {
                        if (!_.isEmpty(products.data)) {
                          if (products.data.results !== undefined) {
                            return products.data.results.length;
                          }
                        }
                      }}
                    >
                      <ProductsList products={search.data.products} />
                    </WrapperList>
                  ) : (
                    <NoItems>
                      <FaSadCry />
                      <h2>No Products</h2>
                    </NoItems>
                  )}
                </>
              )}
              {search.data.type === 'bundles' && (
                <>
                  {search.data.bundles.length > 0 ? (
                    <BundlesGrid>
                      <BundlesList bundles={search.data.bundles} />
                    </BundlesGrid>
                  ) : (
                    <NoItems>
                      <FaSadCry />
                      <h2>No Bundles</h2>
                    </NoItems>
                  )}
                </>
              )}
            </>
          )}
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(Search);

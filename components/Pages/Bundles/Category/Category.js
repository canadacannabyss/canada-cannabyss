import Head from 'next/head';
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
  Wrapper,
  LoadingBundleContainer,
} from '../../../../styles/Pages/Bundles/Category/Category';
import Layout from '../../../Layout';
import BundlesList from '../../../UI/Lists/Bundles/BundlesList';

const mapStateToProps = (state) => {
  const { bundles } = state;
  return {
    bundles,
  };
};

const Products = (props) => {
  const { bundles } = props;
  return (
    <Layout>
      <Head>
        <title>All Bundles - Canada Cannabyss</title>
      </Head>
      <Wrapper>
        {bundles.loading && (
          <>
            <LoadingBundleContainer />
            <LoadingBundleContainer />
            <LoadingBundleContainer />
            <LoadingBundleContainer />
            <LoadingBundleContainer />
            <LoadingBundleContainer />
            <LoadingBundleContainer />
            <LoadingBundleContainer />
          </>
        )}
        {!_.isEmpty(bundles.data) &&
          !bundles.loading &&
          !bundles.error &&
          bundles.fetched && <BundlesList bundles={bundles.data} />}
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(Products);

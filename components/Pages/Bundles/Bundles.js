import _ from 'lodash';
import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import {
  DivGrid,
  H1,
  Wrapper,
  LoadingBundleContainer,
} from '../../../styles/Pages/Bundles/Bundles';
import Layout from '../../Layout';
import BundlesList from '../../UI/Lists/Bundles/BundlesList';

const mapStateToProps = (state) => {
  const { bundles } = state;
  return {
    bundles,
  };
};

const Bundles = (props) => {
  const { bundles } = props;

  return (
    <Layout>
      <Head>
        <title>All Bundles - Canada Cannabysss</title>
      </Head>
      <Wrapper>
        <DivGrid>
          {bundles.loading && (
            <>
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
            bundles.fetched &&
            !bundles.error && <BundlesList bundles={bundles.data} />}
        </DivGrid>
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(Bundles);

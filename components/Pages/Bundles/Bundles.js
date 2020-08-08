import _ from 'lodash';
import React from 'react';
import Head from 'next/head';
import { connect, useDispatch } from 'react-redux';
import {
  DivGrid,
  H1,
  Wrapper,
  LoadingBundleContainer,
  WrapperPage,
  Pages,
} from '../../../styles/Pages/Bundles/Bundles';
import Layout from '../../Layout';
import BundlesList from '../../UI/Lists/Bundles/BundlesList';
import { getBundles } from '../../../store/actions/bundles/bundles';

const mapStateToProps = (state) => {
  const { bundles } = state;
  return {
    bundles,
  };
};

const Bundles = (props) => {
  const { bundles } = props;
  const dispatch = useDispatch();

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
            !bundles.error && <BundlesList bundles={bundles.data.results} />}
        </DivGrid>
        <WrapperPage>
          {bundles.data.previous !== undefined && (
            <>
              <Pages
                onClick={() => {
                  dispatch(getBundles(bundles.data.previous.page, 12));
                }}
              >
                {bundles.data.previous.page}
              </Pages>
            </>
          )}
          {bundles.data.previous !== undefined &&
            bundles.data.next !== undefined && (
              <Pages className='current'>
                {bundles.data.previous.page + 1}
              </Pages>
            )}
          {bundles.data.next !== undefined && (
            <>
              <Pages
                onClick={() => {
                  dispatch(getBundles(bundles.data.next.page, 12));
                }}
              >
                {bundles.data.next.page}
              </Pages>
            </>
          )}
        </WrapperPage>
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(Bundles);

import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import _ from 'lodash';
import { connect, useDispatch } from 'react-redux';
import {
  Wrapper,
  LoadingBundleContainer,
  DivGrid,
  WrapperPage,
  Pages,
} from '../../../../styles/Pages/Bundles/Category/Category';
import Layout from '../../../Layout';
import BundlesList from '../../../UI/Lists/Bundles/BundlesList';
import { getBundlesCategory } from '../../../../store/actions/bundles/bundles';

const mapStateToProps = (state) => {
  const { bundles } = state;
  return {
    bundles,
  };
};

const Products = (props) => {
  const { bundles } = props;
  const dispatch = useDispatch();
  const router = useRouter();

  const pathname = router.asPath;

  return (
    <Layout>
      <Head>
        <title>All Bundles - Canada Cannabyss</title>
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
              <LoadingBundleContainer />
              <LoadingBundleContainer />
            </>
          )}
          {!_.isEmpty(bundles.data) &&
            !bundles.loading &&
            !bundles.error &&
            bundles.fetched && <BundlesList bundles={bundles.data.results} />}
        </DivGrid>
        <WrapperPage>
          {bundles.data.previous !== undefined && (
            <>
              <Pages
                onClick={() => {
                  dispatch(
                    getBundlesCategory(
                      pathname.substring(18, pathname.length),
                      bundles.data.previous.page,
                      12
                    )
                  );
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
                  dispatch(
                    getBundlesCategory(
                      pathname.substring(18, pathname.length),
                      bundles.data.next.page,
                      12
                    )
                  );
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

export default connect(mapStateToProps)(Products);

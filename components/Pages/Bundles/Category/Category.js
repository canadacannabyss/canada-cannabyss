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
import Logo from '../../../assets/img/canada-cannabyss-logo.webp';

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
        <title>All Bundles by Category - Canada Cannabyss</title>
        <meta
          name='description'
          content='All Bundles by Category - Canada Cannabyss.'
        />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='All Bundles by Category - Canada Cannabyss'
        />
        <meta property='og:type' content='article' />
        <meta
          property='og:url'
          content={`${process.env.MAIN_DOMAIN}/bundles`}
        />
        <meta
          property='og:description'
          content='All Bundles by Category - Canada Cannabyss.'
        />
        <meta property='og:image' content={Logo} />
        <meta property='og:site_name' content='Canada Cannabyss' />

        {/* Google+ */}
        <meta
          itemprop='name'
          content='All Bundles by Category - Canada Cannabyss'
        />
        <meta
          itemprop='description'
          content='All Bundles by Category - Canada Cannabyss'
        />
        <meta itemprop='image' content={Logo} />

        {/* Twitter */}
        <meta name='twitter:card' content='product' />
        <meta name='twitter:site' content='@canadacannabyss' />
        <meta
          name='twitter:title'
          content='All Bundles by Category - Canada Cannabyss'
        />
        <meta
          name='twitter:description'
          content='All Bundles by Category - Canada Cannabyss.'
        />
        <meta name='twitter:creator' content='@canadacannabyss' />
        <meta name='twitter:image' content={Logo} />
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

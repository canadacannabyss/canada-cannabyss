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
import Logo from '../../../assets/img/canada-cannabyss-logo.webp';

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
        <meta name='description' content='Canadian Cannabis Wholesaler.' />

        {/* Open Graph */}
        <meta property='og:title' content='All Bundles - Canada Cannabysss' />
        <meta property='og:type' content='article' />
        <meta
          property='og:url'
          content={`${process.env.SECURED_MAIN_DOMAIN}/bundles`}
        />
        <meta
          property='og:description'
          content='Canadian Cannabis Wholesaler.'
        />
        <meta property='og:image' content={Logo} />
        <meta property='og:site_name' content='Canada Cannabyss' />

        {/* Google+ */}
        <meta itemprop='name' content='All Bundles - Canada Cannabysss' />
        <meta itemprop='description' content='Canadian Cannabis Wholesaler' />
        <meta itemprop='image' content={Logo} />

        {/* Twitter */}

        <meta name='twitter:card' content='product' />
        <meta name='twitter:site' content='@canadacannabyss' />
        <meta name='twitter:title' content='All Bundles - Canada Cannabysss' />
        <meta
          name='twitter:description'
          content='Canadian Cannabis Wholesaler.'
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

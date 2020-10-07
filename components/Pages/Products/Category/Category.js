import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import _ from 'lodash';
import { connect, useDispatch } from 'react-redux';
import {
  Wrapper,
  LoadingProductContainer,
  Pages,
  WrapperPage,
  WrapperList,
} from '../../../../styles/Pages/Products/Category/Category';
import Layout from '../../../Layout';
import ProductsList from '../../../UI/Lists/Products/ProductsList';
import { getProductsCategory } from '../../../../store/actions/products/products';
import Logo from '../../../../assets/img/canada-cannabyss-logo.webp';

const mapStateToProps = (state) => {
  const { products } = state;
  return {
    products,
  };
};

const Products = (props) => {
  const { products } = props;
  const dispatch = useDispatch();
  const router = useRouter();

  const pathname = router.asPath;

  return (
    <Layout>
      <Head>
        <title>All Products - Canada Cannabyss</title>
        <meta
          name='description'
          content='All Products by Category - Canada Cannabyss.'
        />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='All Products by Category - Canada Cannabyss'
        />
        <meta property='og:type' content='article' />
        <meta
          property='og:url'
          content={`${process.env.MAIN_DOMAIN}/bundles`}
        />
        <meta
          property='og:description'
          content='All Products by Category - Canada Cannabyss.'
        />
        <meta property='og:image' content={Logo} />
        <meta property='og:site_name' content='Canada Cannabyss' />

        {/* Google+ */}
        <meta
          itemprop='name'
          content='All Products by Category - Canada Cannabyss'
        />
        <meta
          itemprop='description'
          content='All Products by Category - Canada Cannabyss'
        />
        <meta itemprop='image' content={Logo} />

        {/* Twitter */}
        <meta name='twitter:card' content='product' />
        <meta name='twitter:site' content='@canadacannabyss' />
        <meta
          name='twitter:title'
          content='All Products by Category - Canada Cannabyss'
        />
        <meta
          name='twitter:description'
          content='All Products by Category - Canada Cannabyss.'
        />
        <meta name='twitter:creator' content='@canadacannabyss' />
        <meta name='twitter:image' content={Logo} />
      </Head>
      <Wrapper>
        <WrapperList
          productLength={() => {
            if (!_.isEmpty(products.data)) {
              if (products.data.results !== undefined) {
                return products.data.results.length;
              }
            }
          }}
        >
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
          {products.fetched &&
            !products.loading &&
            !products.error &&
            !_.isEmpty(products.data) && (
              <ProductsList products={products.data.results} />
            )}
        </WrapperList>
        <WrapperPage>
          {products.data.previous !== undefined && (
            <>
              <Pages
                onClick={() => {
                  dispatch(
                    getProductsCategory(
                      pathname.substring(19, pathname.length),
                      products.data.previous.page,
                      12
                    )
                  );
                }}
              >
                {products.data.previous.page}
              </Pages>
            </>
          )}
          {products.data.previous !== undefined &&
            products.data.next !== undefined && (
              <Pages className='current'>
                {products.data.previous.page + 1}
              </Pages>
            )}
          {products.data.next !== undefined && (
            <>
              <Pages
                onClick={() => {
                  dispatch(
                    getProductsCategory(
                      pathname.substring(19, pathname.length),
                      products.data.next.page,
                      12
                    )
                  );
                }}
              >
                {products.data.next.page}
              </Pages>
            </>
          )}
        </WrapperPage>
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(Products);

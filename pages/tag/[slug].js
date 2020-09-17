import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';
import _ from 'lodash';
import { connect, useDispatch } from 'react-redux';
import {
  Wrapper,
  WrapperList,
  LoadingProductContainer,
  WrapperPage,
  Pages,
} from '../../styles/Pages/Products/Products';
import Layout from '../../components/Layout';
import ProductsList from '../../components/UI/Lists/Products/ProductsList';
import { getProductsTag } from '../../store/actions/products/products';

const mapStateToProps = (state) => {
  const { products } = state;
  return {
    products,
  };
};

const Tag = (props) => {
  const { products, tag } = props;
  const dispatch = useDispatch();
  const router = useRouter();

  const pathname = router.asPath;

  return (
    <Layout>
      <Head>
        <title>{`${tag} | Tag - Canada Cannabyss`}</title>
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

Tag.getInitialProps = async ({ ctx }) => {
  const { asPath, store } = ctx;

  const tag = asPath.substring(5, asPath.length);

  store.dispatch(getProductsTag(tag, 1, 12));
  return {
    tag,
  };
};

export default connect(mapStateToProps)(Tag);

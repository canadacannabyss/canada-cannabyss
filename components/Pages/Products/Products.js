import Head from 'next/head';
import React from 'react';
import _ from 'lodash';
import { connect, useDispatch } from 'react-redux';
import {
  Wrapper,
  WrapperList,
  LoadingProductContainer,
  WrapperPage,
  Pages,
} from '../../../styles/Pages/Products/Products';
import Layout from '../../Layout';
import ProductsList from '../../UI/Lists/Products/ProductsList';
import { getProducts } from '../../../store/actions/products/products';

const mapStateToProps = (state) => {
  const { products } = state;
  return {
    products,
  };
};

const Products = (props) => {
  const { products } = props;
  const dispatch = useDispatch();

  return (
    <Layout>
      <Head>
        <title>All Products - Canada Cannabyss</title>
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
              <LoadingProductContainer />
              <LoadingProductContainer />
              <LoadingProductContainer />
              <LoadingProductContainer />
            </>
          )}
          {!_.isEmpty(products.data) &&
            !products.loading &&
            products.fetched &&
            !products.error && (
              <>
                <ProductsList products={products.data.results} />
              </>
            )}
        </WrapperList>
        <WrapperPage>
          {products.data.previous !== undefined && (
            <>
              <Pages
                onClick={() => {
                  dispatch(getProducts(products.data.previous.page, 12));
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
                  dispatch(getProducts(products.data.next.page, 12));
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

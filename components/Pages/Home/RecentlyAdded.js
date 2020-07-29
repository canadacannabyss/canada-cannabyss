import _ from 'lodash';
import React from 'react';
import {
  H1,
  LoadingH1,
  RecentlyAddedGrid,
  LoadingProduct,
  Wrapper,
} from '../../../styles/Pages/Home/RecentlyAdded';
import RecentlyAddedList from '../../UI/Lists/Home/RecentlyAddedList';

const RecentAdded = (props) => {
  const { products } = props;

  return (
    <Wrapper>
      {products.loading && (
        <>
          <LoadingH1 />
          <RecentlyAddedGrid>
            <LoadingProduct />
            <LoadingProduct />
            <LoadingProduct />
            <LoadingProduct />
          </RecentlyAddedGrid>
        </>
      )}
      {products.fetched &&
        !_.isEmpty(products.data) &&
        !products.loading &&
        !products.error && (
          <>
            <H1>Recently Added</H1>
            <RecentlyAddedGrid>
              {products.fetched &&
                !_.isEmpty(products.data) &&
                !products.loading &&
                !products.error && (
                  <RecentlyAddedList products={products.data} />
                )}
            </RecentlyAddedGrid>
          </>
        )}
    </Wrapper>
  );
};

export default RecentAdded;

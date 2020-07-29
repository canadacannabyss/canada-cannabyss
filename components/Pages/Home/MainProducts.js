import _ from 'lodash';
import React, { Fragment } from 'react';
import {
  TopProduct,
  TopProductSubDiv,
  LoadingCover,
  LoadingCoverMain,
} from '../../../styles/Pages/Home/MainProducts';
// require('dotenv').config();
import MainProductsList from '../../UI/Lists/Home/MainProductsList';

const MainProducts = (props) => {
  const { products } = props;

  return (
    <>
      {products.loading && (
        <>
          <TopProduct>
            <div>
              <LoadingCoverMain />
            </div>
            <TopProductSubDiv>
              <div>
                <LoadingCover />
              </div>
              <div>
                <LoadingCover />
              </div>
              <div>
                <LoadingCover />
              </div>
              <div>
                <LoadingCover />
              </div>
            </TopProductSubDiv>
          </TopProduct>
        </>
      )}
      {products.fetched &&
        !_.isEmpty(products.data) &&
        !products.loading &&
        !products.error && (
          <TopProduct>
            <div>
              {products.data.map((product, index) => (
                <Fragment key={product._id}>
                  {index === 0 && (
                    <div key={product._id}>
                      <MainProductsList
                        categoryColor='none'
                        product={product}
                        index={index}
                      />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
            <TopProductSubDiv>
              {products.data.map((product, index) => (
                <Fragment key={product._id}>
                  {index > 0 && (
                    <div key={product._id}>
                      <MainProductsList product={product} index={index} />
                    </div>
                  )}
                </Fragment>
              ))}
            </TopProductSubDiv>
          </TopProduct>
        )}
    </>
  );
};

export default MainProducts;

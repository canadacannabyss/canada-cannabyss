import Head from 'next/head';
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
  Wrapper,
  WrapperHeader,
  PromotionHeader,
  PromotionHeaderBg,
  LoadingPromotionHeader,
  PromotionHeaderInfoDiv,
  LoadingProductContainer,
} from '../../../styles/Pages/Products/Products';
import Layout from '../../Layout';
import ProductsList from '../../UI/Lists/Products/ProductsList';

const mapStateToProps = (state) => {
  const { promotion } = state;
  return {
    promotion,
  };
};

const Promotion = (props) => {
  const { promotion } = props;
  return (
    <Layout>
      <Head>
        <title>
          {promotion.fetched &&
            !_.isEmpty(promotion.data) &&
            !promotion.error &&
            !promotion.loading && (
              <>
                {`${promotion.data.promotionName} | Promotion - Canada
                Cannabyss`}
              </>
            )}
        </title>
      </Head>
      {promotion.loading && <LoadingPromotionHeader />}
      {promotion.fetched &&
        !_.isEmpty(promotion.data) &&
        !promotion.error &&
        !promotion.loading && (
          <PromotionHeader backgroundImage={promotion.data.media.url}>
            <PromotionHeaderBg />
            <WrapperHeader>
              <PromotionHeaderInfoDiv>
                <h1>{promotion.data.promotionName}</h1>
                <br />
                <div
                  dangerouslySetInnerHTML={{
                    __html: promotion.data.description,
                  }}
                ></div>
              </PromotionHeaderInfoDiv>
            </WrapperHeader>
          </PromotionHeader>
        )}
      <Wrapper>
        {promotion.loading && (
          <>
            <LoadingPromotionHeader />
            <LoadingPromotionHeader />
            <LoadingPromotionHeader />
            <LoadingPromotionHeader />
            <LoadingPromotionHeader />
            <LoadingPromotionHeader />
            <LoadingPromotionHeader />
            <LoadingPromotionHeader />
            <LoadingPromotionHeader />
            <LoadingPromotionHeader />
            <LoadingPromotionHeader />
            <LoadingPromotionHeader />
          </>
        )}
        {promotion.fetched &&
          !_.isEmpty(promotion.data) &&
          !promotion.error &&
          !promotion.loading && (
            <ProductsList products={promotion.data.products} />
          )}
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(Promotion);

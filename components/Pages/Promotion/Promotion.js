import Head from 'next/head';
import React from 'react';
import _ from 'lodash';
import sanitizeHtml from 'sanitize-html';
import { connect } from 'react-redux';
import {
  Wrapper,
  WrapperList,
  WrapperHeader,
  PromotionHeader,
  PromotionHeaderBg,
  LoadingPromotionHeader,
  PromotionHeaderInfoDiv,
  LoadingProductContainer,
  DescriptionDiv,
  LoadingDescriptionDiv,
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
        {promotion.fetched &&
          !_.isEmpty(promotion.data) &&
          !promotion.error &&
          !promotion.loading && (
            <>
              <title>
                {`${promotion.data.promotionName} | Promotion - Canada
                Cannabyss`}
              </title>
              <meta
                name="description"
                content={promotion.data.seo.description}
              />

              {/* Open Graph */}
              <meta
                property="og:title"
                content={`${promotion.data.seo.title} - Canada Cannabyss`}
              />
              <meta property="og:type" content="article" />
              <meta
                property="og:url"
                content={`${process.env.SECURED_MAIN_DOMAIN}/promotion/${promotion.data.slug}`}
              />
              <meta
                property="og:description"
                content={`${promotion.data.seo.description}`}
              />
              <meta
                property="og:image"
                content={`${promotion.data.media.url}`}
              />
              <meta property="og:site_name" content="Canada Cannabyss" />

              {/* Google+ */}
              <meta itemProp="name" content={promotion.data.seo.title} />
              <meta
                itemProp="description"
                content={promotion.data.seo.description}
              />
              <meta itemProp="image" content={`${promotion.data.media.url}`} />

              {/* Twitter */}

              <meta name="twitter:card" content="promotion" />
              <meta name="twitter:site" content="@canadacannabyss" />
              <meta name="twitter:title" content={promotion.data.seo.title} />
              <meta
                name="twitter:description"
                content={promotion.data.seo.description}
              />
              <meta name="twitter:creator" content="@canadacannabyss" />
              <meta
                name="twitter:image"
                content={`${promotion.data.media.url}`}
              />
            </>
          )}
      </Head>
      {promotion.loading && <LoadingPromotionHeader />}
      {promotion.fetched &&
        !_.isEmpty(promotion.data) &&
        !promotion.error &&
        !promotion.loading && (
          <PromotionHeader backgroundImage={promotion.data.media.url}>
            <WrapperHeader>
              <PromotionHeaderInfoDiv />
            </WrapperHeader>
          </PromotionHeader>
        )}
      <Wrapper>
        {promotion.loading && <LoadingDescriptionDiv />}
        {promotion.fetched &&
          !_.isEmpty(promotion.data) &&
          !promotion.error &&
          !promotion.loading && (
            <DescriptionDiv
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(promotion.data.description),
              }}
            />
          )}
        <WrapperList>
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
        </WrapperList>
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(Promotion);

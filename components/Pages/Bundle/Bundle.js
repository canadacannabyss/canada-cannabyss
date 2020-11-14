import _ from 'lodash';
import Head from 'next/head';
import Carousel from 'nuka-carousel';
import PropTypes from 'prop-types';
import sanitizeHtml from 'sanitize-html';
import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addItemToCart } from '../../../store/actions/cart/cart';
import RoundFloatNumber from '../../../utils/Calculate/roundFloatNumber';
import {
  AddToCart,
  ProductDescription,
  ProductDetailsDiv,
  ProductDetailsWrapper,
  ProductImage,
  EmptyMedias,
  ProductName,
  ProductPrice,
  DiscountPercentage,
  DiscountPercentageMobile,
  DiscountPricesDiv,
  ProductNewPriceDiscount,
  ProductOldPriceDiscount,
  ProductQuantityDiv,
  ProductQuantityP,
  QuantityBtn,
  QuantityInput,
  DisabledAddToCart,
  Wrapper,
  LoadingProductName,
  LoadingProductPrice,
  LoadingProductDescription,
  LoadingQuantityLabel,
  LoadingQuantityInput,
  LoadingAddToCart,
  LoadingMediaCarousel,
  LoadingExtraInfo,
  LoadingShareLabel,
  LoadingShareButtons,
  LoadingCommentsLabel,
  LoadingCommentsDiv,
  LoadingCommentsTextArea,
  LoadingCommentsTextAreaButton,
} from '../../../styles/Pages/Product/Product';
import Layout from '../../Layout';
import ExtraInfo from '../../Pages/Product/ExtraInfo';
import ShareButtons from '../../UI/Buttons/ShareButtons/ShareButtons';
import Comments from '../Bundle/Comments';
import BundlesUser from './BundlesUser';

const mapStateToProps = (state) => {
  const { bundle, cart, user } = state;
  return {
    bundle: bundle.bundle,
    resellerBundles: bundle.resellerBundles,
    cart,
    user,
  };
};

const Bundle = (props) => {
  const { pathname, resellerBundles, bundle, cart, user } = props;
  const dispatch = useDispatch();
  const roundFloatNumber = new RoundFloatNumber();

  const [medias, setMedias] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (bundle.fetched && !_.isEmpty(bundle.data) && !bundle.error) {
      setMedias(getMedias());
    }
  }, [bundle]);

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddQuantity = () => {
    if (quantity < 9999) {
      setQuantity(quantity + 1);
    }
  };

  const handleAddBundleToCart = () => {
    if (
      !_.isEmpty(cart.data) &&
      cart.fetched &&
      !_.isEmpty(bundle.data) &&
      bundle.fetched
    ) {
      const bundleDetailsObj = {
        _id: bundle.data._id,
        type: 'bundle',
        itemName: bundle.data.bundleName,
        slug: bundle.data.slug,
        quantity: quantity,
        media: {
          url: bundle.data.products[0].media[0].url,
        },
        variantName: [],
        variant: [],
        prices: {
          price: bundle.data.prices.price,
          compareTo: bundle.data.prices.compareTo,
        },
      };
      dispatch(addItemToCart(bundleDetailsObj, cart.data._id));
    }
  };

  const getMedias = () => {
    if (bundle.fetched && !_.isEmpty(bundle.data) && !bundle.error) {
      let medias = [];
      bundle.data.products.map((product) => {
        product.media.map((media) => {
          medias.push(media.url);
        });
      });
      return medias;
    }
  };

  const calculateDiscountPercentage = () => {
    return Math.round(
      roundFloatNumber.roundNumber(
        -(100 - (bundle.data.prices.price / bundle.data.prices.compareTo) * 100)
      )
    );
  };

  return (
    <Layout>
      {bundle.loading && (
        <Wrapper>
          <ProductDetailsWrapper>
            <LoadingMediaCarousel />
            <ProductDetailsDiv>
              <LoadingProductName />
              <LoadingProductPrice />
              <LoadingProductDescription />
              <LoadingQuantityLabel />
              <LoadingQuantityInput />
              <LoadingAddToCart />
            </ProductDetailsDiv>
          </ProductDetailsWrapper>
          <LoadingExtraInfo />
          <LoadingShareLabel />
          <LoadingShareButtons />
          <LoadingCommentsDiv>
            <LoadingCommentsLabel />
            <LoadingCommentsTextArea />
            <LoadingCommentsTextAreaButton />
          </LoadingCommentsDiv>
        </Wrapper>
      )}
      {!_.isEmpty(bundle.data) &&
        bundle.fetched &&
        !bundle.error &&
        !bundle.loading && (
          <>
            <Head>
              <title>{bundle.data.bundleName} - Canada Cannabyss</title>
              <meta name='description' content={bundle.data.seo.description} />

              {/* Open Graph */}
              <meta
                property='og:title'
                content={`${bundle.data.seo.title} - Canada Cannabyss`}
              />
              <meta property='og:type' content='article' />
              <meta
                property='og:url'
                content={`${process.env.SECURED_MAIN_DOMAIN}/bundle/${bundle.data.slug}`}
              />
              <meta
                property='og:description'
                content={`${bundle.data.seo.description}`}
              />
              <meta
                property='og:image'
                content={`${bundle.data.products[0].media[0].url}`}
              />
              <meta property='og:site_name' content='Canada Cannabyss' />
              <meta
                property='og:price:amount'
                content={bundle.data.prices.price}
              />
              <meta property='og:price:currency' content='CAD' />

              {/* Google+ */}
              <meta itemprop='name' content={bundle.data.seo.title} />
              <meta
                itemprop='description'
                content={bundle.data.seo.description}
              />
              <meta
                itemprop='image'
                content={`${bundle.data.products[0].media[0].url}`}
              />

              {/* Twitter */}

              <meta name='twitter:card' content='bundle' />
              <meta name='twitter:site' content='@canadacannabyss' />
              <meta name='twitter:title' content={bundle.data.seo.title} />
              <meta
                name='twitter:description'
                content={bundle.data.seo.description}
              />
              <meta name='twitter:creator' content='@canadacannabyss' />
              <meta
                name='twitter:image'
                content={`${bundle.data.products[0].media[0].url}`}
              />
            </Head>
            <Wrapper>
              <ProductDetailsWrapper>
                {bundle.data.prices.compareTo > 0 && (
                  <DiscountPercentageMobile>
                    <p>
                      {roundFloatNumber.calculateDiscountPercentage(
                        bundle.data.prices.price,
                        bundle.data.prices.compareTo
                      )}
                      %
                    </p>
                  </DiscountPercentageMobile>
                )}
                {medias.length > 0 ? (
                  <Carousel autoplay>
                    {medias.map((media) => (
                      <ProductImage src={media} key={media.name} />
                    ))}
                  </Carousel>
                ) : (
                    <EmptyMedias>
                      <p>No products</p>
                    </EmptyMedias>
                  )}
                <ProductDetailsDiv>
                  {bundle.data.prices.compareTo > 0 && (
                    <DiscountPercentage>
                      <p>
                        {roundFloatNumber.calculateDiscountPercentage(
                          bundle.data.prices.price,
                          bundle.data.prices.compareTo
                        )}
                        %
                      </p>
                    </DiscountPercentage>
                  )}
                  <ProductName>
                    <span className='bundleName'>
                      {bundle.data.bundleName}:
                    </span>{' '}
                    {bundle.data.products.map((product, i) => {
                      if (bundle.data.products.length === i + 1) {
                        return <span>{product.productName}</span>;
                      } else {
                        return <span>{product.productName}, </span>;
                      }
                    })}
                  </ProductName>
                  {bundle.data.prices.compareTo > 0 ? (
                    <>
                      <DiscountPricesDiv>
                        <ProductOldPriceDiscount>
                          C$ {bundle.data.prices.compareTo}
                        </ProductOldPriceDiscount>
                        <ProductNewPriceDiscount>
                          C$ {bundle.data.prices.price}
                        </ProductNewPriceDiscount>
                      </DiscountPricesDiv>
                    </>
                  ) : (
                      <ProductPrice>C$ {bundle.data.prices.price}</ProductPrice>
                    )}
                  <ProductDescription
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHtml(bundle.data.description),
                    }}
                  />
                  <ProductQuantityP>Quantity</ProductQuantityP>
                  <ProductQuantityDiv>
                    <QuantityBtn onClick={handleMinusQuantity}>-</QuantityBtn>
                    <QuantityInput
                      type='number'
                      min='1'
                      max='9999'
                      value={quantity}
                      disabled
                    />
                    <QuantityBtn onClick={handleAddQuantity}>+</QuantityBtn>
                  </ProductQuantityDiv>

                  {user.fetched && !_.isEmpty(user.data) && !user.error ? (
                    <AddToCart onClick={() => handleAddBundleToCart()}>
                      Add to cart
                    </AddToCart>
                  ) : (
                      <DisabledAddToCart disabled>Add to cart</DisabledAddToCart>
                    )}
                </ProductDetailsDiv>
              </ProductDetailsWrapper>
              <ExtraInfo extraInfoArray={bundle.data.extraInfo} />
              <ShareButtons
                path={`${process.env.SECURED_MAIN_DOMAIN}${props.pathname}`}
                size={32}
              />

              {bundle.data.reseller &&
                !bundle.data.reseller.isCanadaCannabyssTeam && (
                  <BundlesUser
                    user={bundle.data.reseller}
                    resellerBundles={resellerBundles}
                  />
                )}
              <Comments bundleId={bundle.data._id} />
            </Wrapper>
          </>
        )}
    </Layout>
  );
};

Bundle.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Bundle);

import _ from 'lodash';
import Head from 'next/head';
import Link from 'next/link';
import Carousel from 'nuka-carousel';
import PropTypes from 'prop-types';
import sanitizeHtml from 'sanitize-html';
import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../../store/actions/cart/cart';
import { openLoginForm } from '../../../store/actions/navbar/navbar';
import RoundFloatNumber from '../../../utils/Calculate/roundFloatNumber';
import {
  AddToCart,
  ProductDescription,
  ProductDetailsDiv,
  ProductDetailsWrapper,
  ProductImage,
  ProductName,
  ProductPrice,
  DiscountPercentage,
  DiscountPercentageMobile,
  DiscountPricesDiv,
  ProductNewPriceDiscount,
  ProductOldPriceDiscount,
  ProductVariantSelectGrid,
  ProductVariantSelect,
  ProductVariantSelectLabel,
  ProductQuantityDiv,
  ProductQuantityP,
  QuantityBtn,
  QuantityInput,
  DisabledAddToCart,
  Wrapper,
  TagsDiv,
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
  AcceptedPaymentMethodH4,
  AcceptedPaymentMethodDiv,
} from '../../../styles/Pages/Product/Product';
import Layout from '../../Layout';
import ShareButtons from '../../UI/Buttons/ShareButtons/ShareButtons';
import Comments from './Comments';
import ExtraInfo from './ExtraInfo';
import ProductsUser from './ProductsUser';

let count = 0;

const mapStateToProps = (state) => {
  const { product, user, cart, acceptedPaymentMethods } = state;
  return {
    product: product.product,
    resellerProducts: product.resellerProducts,
    user,
    cart,
    acceptedPaymentMethods,
  };
};

const Product = (props) => {
  const {
    product,
    resellerProducts,
    user,
    cart,
    acceptedPaymentMethods,
  } = props;
  const dispatch = useDispatch();
  const roundFloatNumber = new RoundFloatNumber();

  const [variantsArray, setVariantsArray] = useState([]);
  const [variantsUniDimentionArray, setVariantsUniDimentionArray] = useState(
    [],
  );
  const [quantity, setQuantity] = useState(1);
  const [variantPrice, setVariantPrice] = useState(1);
  const [variantCompareTo, setVariantCompareTo] = useState(1);

  console.log('sanitiza-html:', sanitizeHtml(product.data.description));

  useEffect(() => {
    if (
      !_.isEmpty(product.data) &&
      product.fetched &&
      !product.loading &&
      !product.error
    ) {
      setVariantPrice(product.data.prices.price);
      setVariantCompareTo(product.data.prices.compareTo);
      if (
        product.data.variants.variantsOptionNames.length > 0 &&
        product.data.variants.values.length > 0 &&
        product.data.variants.uniqueValues.length > 0
      ) {
        const valuesArray = [];
        for (
          let i = 0;
          i < product.data.variants.variantsOptionNames.length;
          i += 1
        ) {
          valuesArray.push([product.data.variants.uniqueValues[i][0]]);
        }
        setVariantsArray(valuesArray);
        count += 1;
      }
    }
  }, [product.data]);

  console.log('product:', product);

  const arraysEqual = (_arr1, _arr2) => {
    if (
      !Array.isArray(_arr1) ||
      !Array.isArray(_arr2) ||
      _arr1.length !== _arr2.length
    )
      return false;

    var arr1 = _arr1.concat().sort();
    var arr2 = _arr2.concat().sort();

    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }

    return true;
  };

  useEffect(() => {
    if (
      !_.isEmpty(product.data) &&
      product.fetched &&
      !product.loading &&
      !product.error
    ) {
      if (
        product.data.variants.variantsOptionNames.length > 0 &&
        product.data.variants.values.length > 0 &&
        product.data.variants.uniqueValues.length > 0
      ) {
        product.data.variants.values.map((value, index) => {
          const valuesVariantsArray = [];
          variantsArray.map((valueVariantArray) => {
            valuesVariantsArray.push(valueVariantArray[0]);
          });

          setVariantsUniDimentionArray(valuesVariantsArray);
          if (arraysEqual(value.variantValues, valuesVariantsArray)) {
            setVariantPrice(value.prices.price);
            setVariantCompareTo(value.prices.compareTo);
          }
        });
      }
    }
  }, [variantsArray]);

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

  const handleAddProductToCart = () => {
    if (
      !_.isEmpty(cart.data) &&
      cart.fetched &&
      !_.isEmpty(product.data) &&
      product.fetched
    ) {
      let price = 0;
      let compareTo = 0;
      if (
        (product.data.variants.variantsOptionNames !== null ||
          product.data.variants.variantsOptionNames !== undefined) &&
        (product.data.variants.values !== null ||
          product.data.variants.values !== undefined) &&
        (product.data.variants.uniqueValues !== null ||
          product.data.variants.uniqueValues !== undefined)
      ) {
        price = variantPrice;
        compareTo = variantCompareTo;
      } else {
        price = product.data.prices.price;
        compareTo = product.data.prices.compareTo;
      }
      const productDetailsObj = {
        _id: product.data._id,
        type: 'product',
        itemName: product.data.productName,
        slug: product.data.slug,
        quantity: quantity,
        media: {
          url: product.data.media[0].url,
        },
        variantName: product.data.variants.variantsOptionNames,
        variant: variantsUniDimentionArray,
        prices: {
          price: price,
          compareTo: compareTo,
        },
      };
      dispatch(addItemToCart(productDetailsObj, cart.data._id));
    }
  };

  const onChangeSelectVariant = (e, index) => {
    const values = [...variantsArray];
    // console.log('values onChange:', values);
    if (values[index].length > 0) {
      values[index].pop();
      values[index].push(e.target.value);
    } else {
      values[index].push(e.target.value);
    }
    setVariantsArray(values);
  };

  return (
    <Layout>
      {product.loading && (
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
      {!_.isEmpty(product.data) &&
        product.fetched &&
        !product.error &&
        !product.loading && (
          <>
            <Head>
              <title>{product.data.seo.title} - Canada Cannabyss</title>
              <meta name="description" content={product.data.seo.description} />

              {/* Open Graph */}
              <meta
                property="og:title"
                content={`${product.data.seo.title} - Canada Cannabyss`}
              />
              <meta property="og:type" content="article" />
              <meta
                property="og:url"
                content={`${process.env.SECURED_MAIN_DOMAIN}/product/${product.data.slug}`}
              />
              <meta
                property="og:description"
                content={`${product.data.seo.description}`}
              />
              <meta
                property="og:image"
                content={`${product.data.media[0].url}`}
              />
              <meta property="og:site_name" content="Canada Cannabyss" />
              <meta
                property="og:price:amount"
                content={product.data.prices.price}
              />
              <meta property="og:price:currency" content="CAD" />

              {/* Google+ */}
              <meta itemProp="name" content={product.data.seo.title} />
              <meta
                itemProp="description"
                content={product.data.seo.description}
              />
              <meta itemProp="image" content={`${product.data.media[0].url}`} />

              {/* Twitter */}

              <meta name="twitter:card" content="product" />
              <meta name="twitter:site" content="@canadacannabyss" />
              <meta name="twitter:title" content={product.data.seo.title} />
              <meta
                name="twitter:description"
                content={product.data.seo.description}
              />
              <meta name="twitter:creator" content="@canadacannabyss" />
              <meta
                name="twitter:image"
                content={`${product.data.media[0].url}`}
              />
              <meta name="twitter:data1" content={product.data.prices.price} />
              <meta name="twitter:label1" content="Price" />
              {!(
                product.data.variants.variantsOptionNames.length === 1 &&
                product.data.variants.variantsOptionNames[0] === '' &&
                product.data.variants.values.length === 0
              ) && (
                <>
                  <meta
                    name="twitter:data2"
                    content={`${product.data.variants.uniqueValues[0][0]
                      .substring(0, 1)
                      .toUpperCase()}${product.data.variants.uniqueValues[0][0].substring(
                      1,
                      product.data.variants.uniqueValues[0][0].length,
                    )}`}
                  />
                  <meta
                    name="twitter:label2"
                    content={`${product.data.variants.variantsOptionNames[0]
                      .substring(0, 1)
                      .toUpperCase()}${product.data.variants.variantsOptionNames[0].substring(
                      1,
                      product.data.variants.variantsOptionNames[0].length,
                    )}`}
                  />
                </>
              )}
            </Head>
            <Wrapper>
              <ProductDetailsWrapper>
                {product.data.prices.compareTo > 0 && (
                  <DiscountPercentageMobile>
                    <p>
                      {!_.isEmpty(product.data) &&
                        product.fetched &&
                        !product.loading &&
                        !product.error && (
                          <>
                            {product.data.variants.variantsOptionNames.length >
                              0 &&
                            product.data.variants.values.length > 0 &&
                            product.data.variants.uniqueValues.length > 0 ? (
                              <>
                                {roundFloatNumber.calculateDiscountPercentage(
                                  variantPrice,
                                  variantCompareTo,
                                )}
                              </>
                            ) : (
                              <>
                                {roundFloatNumber.calculateDiscountPercentage(
                                  product.data.prices.price,
                                  product.data.prices.compareTo,
                                )}
                              </>
                            )}
                          </>
                        )}
                      %
                    </p>
                  </DiscountPercentageMobile>
                )}
                <Carousel autoplay>
                  {product.data.media.map((media) => (
                    <ProductImage src={media.url} key={media.name} />
                  ))}
                </Carousel>
                <ProductDetailsDiv>
                  {product.data.prices.compareTo > 0 && (
                    <DiscountPercentage>
                      <p>
                        {!_.isEmpty(product.data) &&
                          product.fetched &&
                          !product.loading &&
                          !product.error && (
                            <>
                              {product.data.variants.variantsOptionNames
                                .length > 0 &&
                              product.data.variants.values.length > 0 &&
                              product.data.variants.uniqueValues.length > 0 ? (
                                <>
                                  {roundFloatNumber.calculateDiscountPercentage(
                                    variantPrice,
                                    variantCompareTo,
                                  )}
                                </>
                              ) : (
                                <>
                                  {roundFloatNumber.calculateDiscountPercentage(
                                    product.data.prices.price,
                                    product.data.prices.compareTo,
                                  )}
                                </>
                              )}
                            </>
                          )}
                        %
                      </p>
                    </DiscountPercentage>
                  )}
                  <ProductName>{product.data.productName}</ProductName>
                  {product.data.prices.compareTo > 0 ? (
                    <>
                      <DiscountPricesDiv>
                        {!_.isEmpty(product.data) &&
                          product.fetched &&
                          !product.loading &&
                          !product.error && (
                            <>
                              {product.data.variants.variantsOptionNames
                                .length > 0 &&
                              product.data.variants.values.length > 0 &&
                              product.data.variants.uniqueValues.length > 0 ? (
                                <>
                                  <ProductOldPriceDiscount>
                                    C$ {variantCompareTo}
                                  </ProductOldPriceDiscount>
                                  <ProductNewPriceDiscount>
                                    C$ {variantPrice}
                                  </ProductNewPriceDiscount>
                                </>
                              ) : (
                                <>
                                  <ProductOldPriceDiscount>
                                    C$ {product.data.prices.compareTo}
                                  </ProductOldPriceDiscount>
                                  <ProductNewPriceDiscount>
                                    C$ {product.data.prices.price}
                                  </ProductNewPriceDiscount>
                                </>
                              )}
                            </>
                          )}
                      </DiscountPricesDiv>
                    </>
                  ) : (
                    <ProductPrice>C$ {product.data.prices.price}</ProductPrice>
                  )}
                  <ProductDescription
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHtml(product.data.description),
                    }}
                  />
                  {!_.isEmpty(product.data) &&
                    product.fetched &&
                    !product.loading &&
                    !product.error && (
                      <>
                        {!(
                          product.data.variants.variantsOptionNames.length ===
                            1 &&
                          product.data.variants.variantsOptionNames[0] === '' &&
                          product.data.variants.values.length === 0
                        ) && (
                          <ProductVariantSelectGrid
                            variantsLength={
                              product.data.variants.variantsOptionNames.length
                            }
                          >
                            {product.data.variants.uniqueValues.map(
                              (value, index) => (
                                <div>
                                  <ProductVariantSelectLabel
                                    htmlFor={
                                      product.data.variants.variantsOptionNames[
                                        index
                                      ]
                                    }
                                  >
                                    {`${product.data.variants.variantsOptionNames[
                                      index
                                    ]
                                      .substring(0, 1)
                                      .toUpperCase()}${product.data.variants.variantsOptionNames[
                                      index
                                    ].substring(
                                      1,
                                      product.data.variants.variantsOptionNames[
                                        index
                                      ].length,
                                    )}`}
                                  </ProductVariantSelectLabel>
                                  <ProductVariantSelect
                                    id={
                                      product.data.variants.variantsOptionNames[
                                        index
                                      ]
                                    }
                                    onChange={(e) => {
                                      onChangeSelectVariant(e, index);
                                    }}
                                  >
                                    {value.map((row) => (
                                      <>
                                        <option value={row}>{`${row
                                          .substring(0, 1)
                                          .toUpperCase()}${row.substring(
                                          1,
                                          row.length,
                                        )}`}</option>
                                      </>
                                    ))}
                                  </ProductVariantSelect>
                                </div>
                              ),
                            )}
                          </ProductVariantSelectGrid>
                        )}
                      </>
                    )}
                  <ProductQuantityP>Quantity</ProductQuantityP>
                  <ProductQuantityDiv>
                    <QuantityBtn onClick={handleMinusQuantity}>-</QuantityBtn>
                    <QuantityInput
                      type="number"
                      min="1"
                      max="9999"
                      value={quantity}
                      disabled
                    />
                    <QuantityBtn onClick={handleAddQuantity}>+</QuantityBtn>
                  </ProductQuantityDiv>
                  {user.fetched && !_.isEmpty(user.data) && !user.error ? (
                    <AddToCart onClick={() => handleAddProductToCart()}>
                      Add to cart
                    </AddToCart>
                  ) : (
                    <DisabledAddToCart
                      onClick={() => {
                        dispatch(openLoginForm());
                      }}
                    >
                      Add to cart
                    </DisabledAddToCart>
                  )}
                </ProductDetailsDiv>
              </ProductDetailsWrapper>
              {product.data.extraInfo.length > 0 && (
                <>
                  {product.data.extraInfo[0].title !== '' &&
                    product.data.extraInfo[0].description !== '' && (
                      <ExtraInfo extraInfoArray={product.data.extraInfo} />
                    )}
                </>
              )}
              <ShareButtons
                path={`${process.env.SECURED_MAIN_DOMAIN}${props.pathname}`}
                size={32}
              />
              <TagsDiv>
                {product.data.organization.tags.map((tag) => (
                  <Link href="/tag/[slug]" as={`/tag/${tag.slug}`}>
                    <a>
                      <p>{tag.tagName}</p>
                    </a>
                  </Link>
                ))}
              </TagsDiv>
              {!_.isEmpty(acceptedPaymentMethods.data) &&
                acceptedPaymentMethods.fetched &&
                !acceptedPaymentMethods.error &&
                !acceptedPaymentMethods.loading &&
                acceptedPaymentMethods.data.cryptocurrencies.length > 0 && (
                  <>
                    <br />
                    <AcceptedPaymentMethodH4>
                      Accepted Cryptocurrencies
                    </AcceptedPaymentMethodH4>
                    <AcceptedPaymentMethodDiv>
                      {acceptedPaymentMethods.data.cryptocurrencies.map(
                        (cryptocurrency) => (
                          <div>
                            <img src={cryptocurrency.cryptocurrency.logo} />
                          </div>
                        ),
                      )}
                    </AcceptedPaymentMethodDiv>
                  </>
                )}
              {product.data.reseller &&
                !product.data.reseller.isCanadaCannabyssTeam && (
                  <ProductsUser
                    user={product.data.reseller}
                    resellerProducts={resellerProducts}
                  />
                )}
              <Comments productId={product.data._id} />
            </Wrapper>
          </>
        )}
    </Layout>
  );
};

Product.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Product);

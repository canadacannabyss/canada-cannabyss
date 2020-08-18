import { Editor } from '@tinymce/tinymce-react';
import _ from 'lodash';
import Head from 'next/head';
import Router from 'next/router';
import React, { useEffect, useState, useRef } from 'react';
import slugify from 'slugify';
import { ImageUploader } from 'portrait-load';
import { FaSpinner } from 'react-icons/fa';
import {
  AddToCart,
  CarouselAdd,
  ProductDescription,
  ProductDetailsDiv,
  ProductDetailsWrapper,
  ProductLabelPrice,
  ProductName,
  ProductPrice,
  ProductPriceDiv,
  ProductUploaderPlaceholder,
  Warning,
  Wrapper,
  Loading,
  LoadingSpinner,
} from '../../../../../styles/Pages/Admin/Add/Product/Product';
import Layout from '../../../../AdminLayout';
import ExtraInfo from '../../../../UI/Add/ExtraInfo';
import Inventory from '../../../../UI/Add/Inventory';
import Organization from '../../../../UI/Add/Organization';
import SEO from '../../../../UI/Add/SEO';
import Shipping from '../../../../UI/Add/Shipping';
import Variants from '../../../../UI/Add/Variants';
import TaxableProductCheckbox from '../../../../UI/Buttons/Checkbox/TaxableProductCheckbox';

const Product = (props) => {
  const childRef = useRef();

  const [loading, setLoading] = useState(false);
  const [isSlugValid, setIsSlugValid] = useState(true);
  const [slug, setSlug] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState(0);
  const [compareTo, setCompareTo] = useState(0);
  const [taxableProduct, setTaxableProduct] = useState(false);
  const [description, setDescription] = useState('');
  const [extraInfo, setExtraInfo] = useState([]);
  const [sku, setSku] = useState('');
  const [barcode, setBarcode] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [allowPurchaseOutOfStock, setAllowPurchaseOutOfStock] = useState(false);
  const [physicalProduct, setPhysicalProduct] = useState(false);
  const [weightAmount, setWeightAmount] = useState(0.0);
  const [weightUnit, setWeightUnit] = useState('kg');
  const [seoTitle, setSeoTitle] = useState('');
  const [seoSlug, setSeoSlug] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [tagsArray, setTagsArray] = useState([]);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [warning, setWarning] = useState(false);
  const [imagesArray, setImagesArray] = useState([]);
  const [imagesArrayLength, setImagesArrayLength] = useState(0);
  const [uploddWidth, setUploadWidth] = useState('450px');
  const [uploddHegiht, setUploadHeight] = useState('450px');
  const [variants, setVariants] = useState([]);
  const [variantsOptionNames, setVariantsOptionNames] = useState([]);

  const handleSetImagesArray = (images) => {
    setImagesArray(images);
  };

  const handleGetVariants = (variantsArray) => {
    setVariants(variantsArray);
  };

  const handleGetVariantsOptionNames = (variantsOptionNamesArray) => {
    setVariantsOptionNames(variantsOptionNamesArray);
  };

  const disabledSubmitButton = () => {
    if (
      isSlugValid &&
      slug.length > 0 &&
      productName.length > 0 &&
      price > 0 &&
      !isNaN(compareTo) &&
      (taxableProduct || !taxableProduct) &&
      description.length > 0 &&
      sku.length > 0 &&
      barcode.length > 0 &&
      quantity > 0 &&
      weightAmount > 0 &&
      weightUnit.length > 0 &&
      (weightUnit === 'kg' || weightUnit === 'lbs') &&
      seoTitle.length > 0 &&
      seoSlug.length > 0 &&
      seoDescription.length > 0 &&
      category.length > 0 &&
      tags.length > 0 &&
      !_.isEmpty(tagsArray) &&
      !_.isEmpty(extraInfo)
    ) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  };

  useEffect(() => {
    disabledSubmitButton();
  }, [
    isSlugValid,
    slug,
    productName,
    price,
    compareTo,
    taxableProduct,
    description,
    sku,
    barcode,
    quantity,
    weightAmount,
    weightUnit,
    variants,
    seoTitle,
    seoSlug,
    seoDescription,
    category,
    tags,
    tagsArray,
    extraInfo,
  ]);

  useEffect(() => {
    if (slug.length > 0) {
      const checkSlugValid = async () => {
        const isSlugValidRes = await verifySlug(slug);
      };
      checkSlugValid();
      setGlobalVariable();
    }
  }, [productName]);

  useEffect(() => {
    if (imagesArray.length > 0) {
      if (imagesArray[0].data !== null && imagesArray[0].data !== undefined) {
        if (imagesArray.length === imagesArrayLength) {
          onSubmit();
        }
      }
    }
  }, [imagesArray]);

  useEffect(() => {
    if (slug.length > 0) {
      verifySlug();
    }
  }, [slug]);

  useEffect(() => {
    updateSeoSlugFromTitle();
  }, [seoTitle]);

  useEffect(() => {
    tagsToArray();
  }, [tags]);

  useEffect(() => {
    changeSlugFromProductName(productName);
  }, [productName, price]);

  const handleGetExtraInfo = (extraInfoArray) => {
    setExtraInfo(extraInfoArray);
  };

  // Input Handlers
  const onChangeProductName = (e) => {
    if (productName.length <= 100) {
      setProductName(e.target.value);
    } else {
      setProductName(productName.substring(0, productName.length - 1));
    }
  };

  const onChangePrice = (e) => {
    setPrice(parseFloat(e.target.value));
  };

  const onChangeCompareTo = (e) => {
    setCompareTo(parseFloat(e.target.value));
  };

  const handleCheckTaxableProduct = () => {
    setTaxableProduct(!taxableProduct);
  };

  const handleProductDescription = (e) => {
    setDescription(e.target.getContent());
  };

  const handleSku = (e) => {
    setSku(e.target.value);
  };

  const handleBarcode = (e) => {
    setBarcode(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleCheckAllowPurchaseOutOfStock = () => {
    setAllowPurchaseOutOfStock(!allowPurchaseOutOfStock);
  };

  const handleCheckPhysicalProduct = () => {
    setPhysicalProduct(!physicalProduct);
  };

  const handleWeightAmount = (e) => {
    setWeightAmount(parseFloat(e.target.value));
  };

  const handleWeightUnit = (e) => {
    setWeightUnit(e.target.value);
  };

  const updateSeoSlugFromTitle = () => {
    setSeoSlug(slugify(seoTitle.toLowerCase()));
  };

  const onChangeSeoTitle = (e) => {
    setSeoTitle(e.target.value);
  };

  const onChangeSeoSlug = (e) => {
    setSeoSlug(slugify(e.target.value.toLowerCase()));
  };

  const onChangeSeoDescription = (e) => {
    setSeoDescription(e.target.value);
  };

  const onChangeCategory = (e) => {
    setCategory(e.target.value.replace(/^\w/, (c) => c.toUpperCase()));
    setTimeout(() => {}, 0);
  };

  const tagsToArray = () => {
    const tempTags = tags.split(',');
    tempTags.map((tag, i) => {
      tempTags[i] = tempTags[i].trim();
    });
    setTagsArray(tempTags);
  };

  const onChangeTags = (e) => {
    setTags(e.target.value.toLowerCase());
  };

  const setGlobalVariable = async () => {
    const bodyRequest = {
      type: 'products',
      title: productName,
    };
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/products/set/global-variable`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyRequest),
      }
    );
    return response;
  };

  const verifySlug = async () => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/products/validation/slug/${slug}`,
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    return data;
  };

  const publishProduct = async (product) => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/products/publish`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      }
    );
    const data = await response.json();
    return data;
  };

  const changeSlugFromProductName = () => {
    const lowerCaseTitle = productName.toLowerCase();
    const slugLower = slugify(lowerCaseTitle);
    setSlug(slugLower);
  };

  const handleSubmit = async () => {
    if (allFieldsFilled) {
      setImagesArrayLength(imagesArray.length);
      setLoading(true);
      await childRef.current.handleStartUploadingFiles();
    }
  };

  const onSubmit = async () => {
    disabledSubmitButton();
    let imagesArrayObj = [];
    imagesArray.map((image) => {
      imagesArrayObj.push(image.data._id);
    });
    if (allFieldsFilled) {
      const productInfo = {
        isSlugValid: isSlugValid,
        media: imagesArrayObj,
        variants: {
          variantsOptionNames: variantsOptionNames,
          values: variants,
        },
        productName: productName,
        prices: {
          price: price,
          compareTo: compareTo,
        },
        taxableProduct: taxableProduct,
        description: description,
        extraInfo: extraInfo,
        inventory: {
          sku: sku,
          barcode: barcode,
          quantity: quantity,
          allowPurchaseOutOfStock: allowPurchaseOutOfStock,
        },
        shipping: {
          physicalProduct: physicalProduct,
          weight: {
            unit: weightUnit,
            amount: weightAmount,
          },
        },
        seo: {
          title: seoTitle,
          slug: seoSlug,
          description: seoDescription,
        },
        organization: {
          category: category,
          tags: tagsArray,
        },
      };
      const isSlugValidRes = await verifySlug(slug);
      if (isSlugValidRes.valid) {
        const res = await publishProduct(productInfo);
        Router.push(`/product/${res.slug}`);
      } else {
        console.log('Slug is invalid');
        setIsSlugValid(false);
      }
    } else {
      setWarning(true);
    }
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Add Product | Administrator - Canada Cannabyss</title>
        </Head>
        <Wrapper>
          <ProductDetailsWrapper>
            <CarouselAdd>
              <ImageUploader
                ref={childRef}
                width={uploddWidth}
                height={uploddHegiht}
                imagesArray={imagesArray}
                handleSetImagesArray={handleSetImagesArray}
                isDragNotAcceptColor='rgba(0, 0, 0, 0.3)'
                isDragAcceptColor='#18840f'
                isDragRejectColor='#ff0000'
                textColor='#18840f'
                textSize='18px'
                multipleFiles={true}
                apiEndpoint={`${process.env.MAIN_API_ENDPOINT}/admin/products/publish/media`}
              />
            </CarouselAdd>
            <ProductDetailsDiv>
              <ProductName
                type='text'
                placeholder='Product Name'
                onChange={onChangeProductName}
                value={productName}
              />
              <ProductLabelPrice>Price</ProductLabelPrice>
              <ProductPriceDiv>
                C${' '}
                <ProductPrice
                  type='number'
                  placeholder={0.0}
                  onChange={onChangePrice}
                  min={0}
                  step={0.1}
                />
              </ProductPriceDiv>
              <ProductLabelPrice>Compare to</ProductLabelPrice>
              <ProductPriceDiv>
                C${' '}
                <ProductPrice
                  type='number'
                  placeholder={0.0}
                  step={0.1}
                  min={0}
                  onChange={onChangeCompareTo}
                />
              </ProductPriceDiv>
              <TaxableProductCheckbox
                handleCheckTaxableProduct={handleCheckTaxableProduct}
                taxableProduct={taxableProduct}
              />
              <ProductDescription>
                <Editor
                  apiKey='z1imaefgqfqi5gkj9tp9blogndyf2gp0aj3fgubdtz73p658'
                  init={{
                    height: 320,
                    menubar: false,
                    plugins: [
                      'advlist autolink lists link image charmap print preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media table paste code help wordcount',
                    ],
                    toolbar:
                      'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                  }}
                  onChange={handleProductDescription}
                />
              </ProductDescription>
            </ProductDetailsDiv>
          </ProductDetailsWrapper>
          <ExtraInfo handleGetExtraInfo={handleGetExtraInfo} />
          <Inventory
            handleCheckAllowPurchaseOutOfStock={
              handleCheckAllowPurchaseOutOfStock
            }
            handleSku={handleSku}
            handleBarcode={handleBarcode}
            handleQuantity={handleQuantity}
            sku={sku}
            barcode={barcode}
            quantity={quantity}
            allowPurchaseOutOfStock={allowPurchaseOutOfStock}
          />
          <Shipping
            handleCheckPhysicalProduct={handleCheckPhysicalProduct}
            handleWeightAmount={handleWeightAmount}
            handleWeightUnit={handleWeightUnit}
            physicalProduct={physicalProduct}
            weightAmount={weightAmount}
            weightUnit={weightUnit}
          />
          <Variants
            handleGetVariants={handleGetVariants}
            handleGetVariantsOptionNames={handleGetVariantsOptionNames}
          />
          <SEO
            onChangeSeoTitle={onChangeSeoTitle}
            onChangeSeoSlug={onChangeSeoSlug}
            onChangeSeoDescription={onChangeSeoDescription}
            title={seoTitle}
            slug={seoSlug}
            description={seoDescription}
          />
          <Organization
            onChangeCategory={onChangeCategory}
            onChangeTags={onChangeTags}
            categoryValue={category}
            tagsValue={tags}
          />
          {warning && <Warning>Fill all fields before submit</Warning>}
          <AddToCart onClick={handleSubmit}>Publish Product</AddToCart>
        </Wrapper>
      </Layout>
      {loading && (
        <Loading>
          <LoadingSpinner>
            <FaSpinner />
          </LoadingSpinner>
        </Loading>
      )}
    </>
  );
};

export default Product;

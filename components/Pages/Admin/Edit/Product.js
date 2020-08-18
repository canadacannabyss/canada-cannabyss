import { Editor } from '@tinymce/tinymce-react';
import _ from 'lodash';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
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
  Warning,
  Wrapper,
  Loading,
  LoadingSpinner,
} from '../../../../styles/Pages/Admin/Edit/Product';
import Layout from '../../../AdminLayout';
import ExtraInfo from '../../../UI/Edit/ExtraInfo';
import Inventory from '../../../UI/Add/Inventory';
import Organization from '../../../UI/Add/Organization';
import SEO from '../../../UI/Add/SEO';
import Shipping from '../../../UI/Add/Shipping';
import Variants from '../../../UI/Edit/Variants';
import TaxableProductCheckbox from '../../../UI/Buttons/Checkbox/TaxableProductCheckbox';

const Product = () => {
  const router = useRouter();
  const pathname = router.asPath.substring(20, router.asPath.length);
  const childRef = useRef();

  const [loading, setLoading] = useState(false);
  const [productDetails, setProductDetails] = useState({});
  const [isSlugValid, setIsSlugValid] = useState(true);
  const [slug, setSlug] = useState('');
  const [id, setId] = useState();
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
  const [enableCoverUploader, setEnableCoverUploader] = useState(false);
  const [warning, setWarning] = useState(false);
  const [imagesArray, setImagesArray] = useState([]);
  const [imagesArrayLength, setImagesArrayLength] = useState(0);
  const [uploddWidth, setUploadWidth] = useState('450px');
  const [uploddHegiht, setUploadHeight] = useState('450px');
  const [toDeleteImagesArray, setToDeleteImagesArray] = useState([]);
  const [isNewImagesUploaded, setIsNewImagesUploaded] = useState(false);
  const [variantsOptionNames, setVariantsOptionNames] = useState([]);
  const [variants, setVariants] = useState([]);

  const handleSetImagesArray = (images) => {
    setImagesArray(images);
  };

  const handleGetVariants = (variantsArray) => {
    setVariants(variantsArray);
  };

  const handleGetVariantsOptionNames = (variantsOptionNamesArray) => {
    setVariantsOptionNames(variantsOptionNamesArray);
  };

  const getProductSlug = async () => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/products/panel/get/${pathname}`,
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
    setProductDetails(data);
  };

  const handleTagsArrayToTagString = (tagsArray) => {
    let tagsString = '';
    tagsArray.map((tag, i) => {
      if (i + 1 == tagsArray.length) {
        tagsString += tag;
      } else {
        tagsString += tag + ', ';
      }
    });
    return tagsString;
  };

  useEffect(() => {
    if (imagesArray.length > 0 && toDeleteImagesArray.length > 0) {
      if (imagesArray.length !== toDeleteImagesArray.length) {
        setIsNewImagesUploaded(true);
      } else {
        imagesArray.map((image, index) => {
          if (image.data === undefined || image.data === null) {
            if (image.file.name !== toDeleteImagesArray[index].data.name) {
              setIsNewImagesUploaded(true);
            }
          }
        });
      }
    }
  }, [imagesArray, toDeleteImagesArray]);

  useEffect(() => {
    if (!_.isEmpty(productDetails)) {
      let imagesObj = [];
      productDetails.media.map((image) => {
        imagesObj.push({
          data: image,
        });
      });
      handleSetImagesArray(imagesObj);
      setToDeleteImagesArray(imagesObj);
      setId(productDetails._id);
      setSlug(productDetails.slug);
      setProductName(productDetails.productName);
      setPrice(productDetails.prices.price);
      setCompareTo(productDetails.prices.compareTo);
      setTaxableProduct(productDetails.taxableProduct);
      setDescription(productDetails.description);
      setSku(productDetails.inventory.sku);
      setBarcode(productDetails.inventory.barcode);
      setQuantity(productDetails.inventory.quantity);
      setAllowPurchaseOutOfStock(
        productDetails.inventory.allowPurchaseOutOfStock
      );
      setPhysicalProduct(productDetails.shipping.physicalProduct);
      setWeightAmount(productDetails.shipping.weight.amount);
      setWeightUnit(productDetails.shipping.weight.unit);
      setVariants(productDetails.variants.values);
      setVariantsOptionNames(productDetails.variants.variantsOptionNames);
      setSeoTitle(productDetails.seo.title);
      setSeoSlug(productDetails.seo.slug);
      setSeoDescription(productDetails.seo.description);
      if (
        productDetails.organization.category === null ||
        productDetails.organization.category === undefined
      ) {
        setCategory('');
      } else {
        setCategory(productDetails.organization.category.categoryName);
      }
      setTagsArray(productDetails.organization.tags);
      setExtraInfo(productDetails.extraInfo);
      setTags(handleTagsArrayToTagString(productDetails.organization.tags));
      handleGetExtraInfo(productDetails.extraInfo);
    }
  }, [productDetails]);

  useEffect(() => {
    getProductSlug();
  }, []);

  const disabledSubmitButton = () => {
    if (
      isSlugValid &&
      slug.length > 0 &&
      productName.length > 0 &&
      price > 0 &&
      compareTo > 0 &&
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
      !_.isEmpty(tagsArray)
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

  const editProduct = async (product) => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/products/update/${id}`,
      {
        method: 'PUT',
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

  const deleteProductImage = async (imageId) => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/products/delete/cover/${imageId}`,
      {
        method: 'DELETE',
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

  const changeSlugFromProductName = () => {
    const lowerCaseTitle = productName.toLowerCase();
    const slugLower = slugify(lowerCaseTitle);
    setSlug(slugLower);
  };

  const handleSubmit = async () => {
    if (allFieldsFilled) {
      setImagesArrayLength(imagesArray.length);
      setLoading(true);
      if (isNewImagesUploaded) {
        await childRef.current.handleStartUploadingFiles();
      } else {
        onSubmit();
      }
    }
  };

  const onSubmit = async () => {
    disabledSubmitButton();
    if (allFieldsFilled) {
      let productInfo = {};
      if (isNewImagesUploaded) {
        let imagesArrayObj = [];
        imagesArray.map((image) => {
          imagesArrayObj.push(image.data._id);
        });
        productInfo = {
          isSlugValid,
          media: imagesArrayObj,
          variants: {
            variantsOptionNames: variantsOptionNames,
            values: variants,
          },
          productName,
          prices: {
            price,
            compareTo,
          },
          taxableProduct,
          description,
          extraInfo: extraInfo,
          inventory: {
            sku,
            barcode,
            quantity,
            allowPurchaseOutOfStock,
          },
          shipping: {
            physicalProduct,
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
            category,
            tags: tagsArray,
          },
        };
      } else {
        productInfo = {
          isSlugValid,
          variants: {
            variantsOptionNames: variantsOptionNames,
            values: variants,
          },
          productName,
          prices: {
            price,
            compareTo,
          },
          taxableProduct,
          description,
          extraInfo: extraInfo,
          inventory: {
            sku,
            barcode,
            quantity,
            allowPurchaseOutOfStock,
          },
          shipping: {
            physicalProduct,
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
            category,
            tags: tagsArray,
          },
        };
      }

      const isSlugValidRes = await verifySlug(slug);
      if (isSlugValidRes.valid) {
        console.log('productInfo:', productInfo);
        const res = await editProduct(productInfo);
        if (isNewImagesUploaded) {
          toDeleteImagesArray.map(async (image) => {
            await deleteProductImage(image.data._id);
          });
        }
        await Router.push(`/admin/products`);
      } else {
        console.log('Slug is invalid');
        setIsSlugValid(false);
      }
    } else {
      setWarning(true);
    }
  };

  window.addEventListener('resize', () => {
    console.log('window.innerWidth:', window.innerWidth);
    if (window.innerWidth < 500) {
      setUploadWidth('100%');
      setUploadHeight('300px');
    } else if (window.innerWidth < 500 && window.innerWidth > 380) {
      setUploadWidth('100%');
      setUploadHeight('275px');
    } else {
      setUploadWidth('450px');
      setUploadHeight('450px');
    }
  });

  return (
    <>
      <Layout>
        <Head>
          <title>
            {productName.length > 0
              ? `${productName} | Edit Product - Canada Cannabyss`
              : 'Loading...'}
          </title>
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
                onDragMessage='Drop the files here'
                defaultMessage='Allowed files dimensions'
                fileDimensions={{
                  width: '640px',
                  height: '640px',
                }}
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
                  value={price}
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
                  value={compareTo}
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
                  initialValue={description}
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
          {extraInfo.length > 0 && (
            <ExtraInfo
              handleGetExtraInfo={handleGetExtraInfo}
              editable={true}
              extraInfo={extraInfo}
            />
          )}
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
            // variants={variants}
            // variantsOptionNames={variantsOptionNames}
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
      {/* {loading && (
        <Loading>
          <LoadingSpinner>
            <FaSpinner />
          </LoadingSpinner>
        </Loading>
      )} */}
    </>
  );
};

export default Product;

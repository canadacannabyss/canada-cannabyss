import { Editor } from '@tinymce/tinymce-react';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import slugify from 'slugify';
import {
  BundleLabelPrice,
  BundleName,
  BundlePrice,
  BundlePriceDiv,
  BundlesDescription,
  CreateBundleBtn,
  FeatureContainer,
  FeaturesDiv,
  FeaturesInsideTheBoxH3,
  InsideTheBoxDiv,
  ProductListDiv,
  TitlePriceDescriptionGrid,
  Warning,
  Wrapper,
} from '../../../../styles/Pages/Admin/Add/Bundle';
import Layout from '../../../AdminLayout';
import ExtraInfo from '../../../UI/Edit/ExtraInfo';
import Inventory from '../../../UI/Add/Inventory';
import Organization from '../../../UI/Add/Organization';
import SEO from '../../../UI/Add/SEO';
import Shipping from '../../../UI/Add/Shipping';
// import Variant from '../../../UI/Add/Variant';
import TaxableProductCheckbox from '../../../UI/Buttons/Checkbox/TaxableProductCheckbox';
import ProductsList from '../../../UI/Lists/Admin/Add/Bundle/ProductsList';

const Bundle = () => {
  const router = useRouter();
  const pathname = router.asPath.substring(19, router.asPath.length);

  console.log('pathname:', pathname);

  const [loading, setLoading] = useState(false);
  const [productOnBundle, setProductOnBundle] = useState([]);
  const [isSlugValid, setIsSlugValid] = useState(true);
  const [bundleDetails, setBundleDetails] = useState({});
  const [slug, setSlug] = useState('');
  const [id, setId] = useState('');
  const [bundleName, setBundleName] = useState('');
  const [price, setPrice] = useState(0);
  const [compareTo, setCompareTo] = useState(0);
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [tagsArray, setTagsArray] = useState([]);
  const [description, setDescription] = useState('');
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [warning, setWarning] = useState(false);
  const [taxableBundle, setTaxableBundle] = useState(false);
  const [allowPurchaseOutOfStock, setAllowPurchaseOutOfStock] = useState(false);
  const [physicalProduct, setPhysicalProduct] = useState(false);
  const [productList, setProductList] = useState([]);
  const [extraInfo, setExtraInfo] = useState([]);
  const [sku, setSku] = useState('');
  const [barcode, setBarcode] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [weightAmount, setWeightAmount] = useState(0.0);
  const [weightUnit, setWeightUnit] = useState('kg');
  const [variants, setVariants] = useState([]);
  const [seoTitle, setSeoTitle] = useState('');
  const [seoSlug, setSeoSlug] = useState('');
  const [seoDescription, setSeoDescription] = useState('');

  const getBundleSlug = async () => {
    const response = await fetch(
      `${process.env.mainApiEndpoint}/admin/bundles/panel/get/${pathname}`,
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
    setBundleDetails(data);
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
    getBundleSlug();
  }, []);

  useEffect(() => {
    if (!_.isEmpty(bundleDetails)) {
      setId(bundleDetails._id);
      setSlug(bundleDetails.slug);
      setBundleName(bundleDetails.bundleName);
      setPrice(bundleDetails.prices.price);
      setCompareTo(bundleDetails.prices.compareTo);
      setTaxableBundle(bundleDetails.taxableBundle);
      setDescription(bundleDetails.description);
      setSku(bundleDetails.inventory.sku);
      setBarcode(bundleDetails.inventory.barcode);
      setQuantity(bundleDetails.inventory.quantity);
      setAllowPurchaseOutOfStock(
        bundleDetails.inventory.allowPurchaseOutOfStock
      );
      setPhysicalProduct(bundleDetails.shipping.physicalProduct);
      setWeightAmount(bundleDetails.shipping.weight.amount);
      setWeightUnit(bundleDetails.shipping.weight.unit);
      setVariants(bundleDetails.variants);
      setSeoTitle(bundleDetails.seo.title);
      setSeoSlug(bundleDetails.seo.slug);
      setSeoDescription(bundleDetails.seo.description);
      if (
        bundleDetails.organization.category === null ||
        bundleDetails.organization.category === undefined
      ) {
        setCategory('');
      } else {
        setCategory(bundleDetails.organization.category.categoryName);
      }
      setTagsArray(bundleDetails.organization.tags);
      setExtraInfo(bundleDetails.extraInfo);
      setTags(handleTagsArrayToTagString(bundleDetails.organization.tags));
      handleGetExtraInfo(bundleDetails.extraInfo);
    }
  }, [bundleDetails]);

  useEffect(() => {
    disabledSubmitButton();
  }, [
    isSlugValid,
    slug,
    bundleName,
    price,
    compareTo,
    taxableBundle,
    description,
    extraInfo,
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

  const disabledSubmitButton = () => {
    if (
      !_.isEmpty(productOnBundle) &&
      isSlugValid &&
      slug.length > 0 &&
      bundleName.length > 0 &&
      price > 0 &&
      compareTo > 0 &&
      (taxableBundle || !taxableBundle) &&
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
      !_.isEmpty(extraInfo) &&
      !_.isEmpty(tagsArray)
    ) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  };

  const fetchAllProducts = async () => {
    const res = await fetch(`${process.env.mainApiEndpoint}/admin/products`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    setProductList(data);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    changeSlugFromBundleName(bundleName);
  }, [bundleName]);

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

  const verifySlug = async () => {
    const response = await fetch(
      `${process.env.mainApiEndpoint}/admin/bundles/validation/slug/${slug}`,
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

  const removeElementFromArray = (arr, element) => {
    const index = arr.indexOf(element);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  };

  const handleGetElement = (el) => {
    const element = el;
    if (!productOnBundle.includes(element.id)) {
      setProductOnBundle((productOnBundle) =>
        productOnBundle.concat(element.id)
      );
      element.style.backgroundColor = '#f2f2f2';
      element.style.border = '1px solid #c8d231';
    } else {
      setProductOnBundle(removeElementFromArray(productOnBundle, element.id));
      element.style.backgroundColor = '#fff';
      element.style.border = '1px solid #18840f';
    }
  };

  const handleGetExtraInfo = (extraInfoArray) => {
    setExtraInfo(extraInfoArray);
  };

  const changeSlugFromBundleName = () => {
    const lowerCaseTitle = bundleName.toLowerCase();
    const slugLower = slugify(lowerCaseTitle);
    setSlug(slugLower);
  };

  const handleCheckTaxableProduct = () => {
    setTaxableBundle(!taxableBundle);
  };

  const handleCheckAllowPurchaseOutOfStock = () => {
    setAllowPurchaseOutOfStock(!allowPurchaseOutOfStock);
  };
  const handleCheckPhysicalProduct = () => {
    setPhysicalProduct(!physicalProduct);
  };

  const handleEditorChange = async (e) => {
    setDescription(e.target.getContent());
  };

  const handleBunleName = (e) => {
    setBundleName(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(parseFloat(e.target.value).toFixed(2));
  };

  const handleCompareTo = (e) => {
    setCompareTo(parseFloat(e.target.value).toFixed(2));
  };

  const handleProductFeatures = (e) => {
    setFeatures(e.target.getContent());
  };
  const handleProductInsideTheBox = (e) => {
    setInsideTheBox(e.target.getContent());
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

  const editBundle = async (bundle) => {
    const response = await fetch(
      `${process.env.mainApiEndpoint}/admin/bundles/update/${id}`,
      {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bundle),
      }
    );
    const data = await response.json();
    return data;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    disabledSubmitButton();
    setLoading(true);
    if (allFieldsFilled) {
      console.log('productOnBundle:', productOnBundle);
      const bundleInfo = {
        products: productOnBundle,
        isSlugValid,
        variants,
        bundleName,
        prices: {
          price,
          compareTo,
        },
        taxableBundle,
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

      const isSlugValidRes = await verifySlug(slug);
      if (isSlugValidRes.valid) {
        const res = await editBundle(bundleInfo);
        // setUploaded(res.uploaded);
        Router.push(`/bundle/${slug}`);
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
          <title>
            {bundleName.length > 0
              ? `${bundleName} | Edit Product - Canada Cannabyss`
              : 'Loading...'}
          </title>
        </Head>
        <Wrapper>
          <ProductListDiv>
            <ProductsList
              products={productList}
              handleGetElement={handleGetElement}
            />
          </ProductListDiv>
          <TitlePriceDescriptionGrid>
            <div>
              <BundleName
                type='text'
                placeholder='Bundle Name'
                onChange={handleBunleName}
                value={bundleName}
              />
              <br />
              <BundleLabelPrice>Price</BundleLabelPrice>
              <BundlePriceDiv>
                C${' '}
                <BundlePrice
                  type='number'
                  placeholder='0.00'
                  onChange={handlePrice}
                  value={price}
                />
              </BundlePriceDiv>
              <BundleLabelPrice>Compare to</BundleLabelPrice>
              <BundlePriceDiv>
                C${' '}
                <BundlePrice
                  type='number'
                  placeholder='0.00'
                  onChange={handleCompareTo}
                  value={compareTo}
                />
              </BundlePriceDiv>
              <TaxableProductCheckbox
                handleCheckTaxableProduct={handleCheckTaxableProduct}
                taxableProduct={taxableBundle}
              />
            </div>
            <BundlesDescription>
              {description && (
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
                  onChange={handleEditorChange}
                />
              )}
            </BundlesDescription>
          </TitlePriceDescriptionGrid>
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
          {/* <Variant /> */}
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
          <CreateBundleBtn onClick={onSubmit}>Update Bundle</CreateBundleBtn>
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

export default Bundle;

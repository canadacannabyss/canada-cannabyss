import { Editor } from '@tinymce/tinymce-react';
import _ from 'lodash';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import React, { useEffect, useState, useRef } from 'react';
import slugify from 'slugify';
import { ImageUploader } from 'portrait-load';
import {
  Button,
  Label,
  ProductListDiv,
  PromotionDescription,
  PromotionInfoDiv,
  PromotionName,
  Warning,
  Wrapper,
  Loading,
  LoadingSpinner,
} from '../../../../styles/Pages/Admin/Add/Promotion';
import Layout from '../../../AdminLayout';
import Organization from '../../../UI/Add/Organization';
import SEO from '../../../UI/Add/SEO';
import ProductsList from '../../../UI/Lists/Admin/Edit/Promotions/ProductsList';

const Promotion = () => {
  const router = useRouter();
  const pathname = router.asPath.substring(22, router.asPath.length);
  const childRef = useRef();

  const [loading, setLoading] = useState(false);
  const [promotionDetails, setProductDetails] = useState({});
  const [productOnPromotion, setProductOnPromotion] = useState([]);
  const [bundleOnPromotion, setBundleOnPromotion] = useState([]);
  const [isSlugValid, setIsSlugValid] = useState(true);
  const [slug, setSlug] = useState('');
  const [id, setId] = useState('');
  const [promotionName, setPromotionName] = useState('');
  const [description, setDescription] = useState('');
  const [productList, setProductList] = useState([]);
  const [seoTitle, setSeoTitle] = useState('');
  const [seoSlug, setSeoSlug] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [tagsArray, setTagsArray] = useState([]);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [enableCoverUploader, setEnableCoverUploader] = useState(false);
  const [warning, setWarning] = useState(false);
  const [uploddHegiht, setUploadHeight] = useState('350px');
  const [toDeleteImagesArray, setToDeleteImagesArray] = useState([]);
  const [imagesArray, setImagesArray] = useState([]);
  const [imagesArrayLength, setImagesArrayLength] = useState(0);
  const [isNewImagesUploaded, setIsNewImagesUploaded] = useState(false);

  const handleSetImagesArray = (images) => {
    setImagesArray(images);
  };

  const getPromotionSlug = async () => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/promotions/panel/get/${pathname}`,
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

  useEffect(() => {
    getPromotionSlug();
  }, []);

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
    if (!_.isEmpty(promotionDetails)) {
      let imagesObj = [];
      imagesObj.push({
        data: promotionDetails.media,
      });
      handleSetImagesArray(imagesObj);
      setToDeleteImagesArray(imagesObj);
      setId(promotionDetails._id);
      setSlug(promotionDetails.slug);
      setPromotionName(promotionDetails.promotionName);
      setDescription(promotionDetails.description);
      setSeoTitle(promotionDetails.seo.title);
      setSeoSlug(promotionDetails.seo.slug);
      setSeoDescription(promotionDetails.seo.description);
      if (
        promotionDetails.organization.category === null ||
        promotionDetails.organization.category === undefined
      ) {
        setCategory('');
      } else {
        setCategory(promotionDetails.organization.category.categoryName);
      }
      setTagsArray(promotionDetails.organization.tags);
      setTags(handleTagsArrayToTagString(promotionDetails.organization.tags));
    }
  }, [promotionDetails]);

  useEffect(() => {
    disabledSubmitButton();
  }, [
    productOnPromotion,
    isSlugValid,
    slug,
    promotionName,
    description,
    seoTitle,
    seoSlug,
    seoDescription,
    category,
    tags,
    tagsArray,
  ]);

  useEffect(() => {
    if (imagesArray.length > 0) {
      if (imagesArray[0].data !== null && imagesArray[0].data !== undefined) {
        if (imagesArray.length === imagesArrayLength) {
          onSubmit();
        }
      }
    }
  }, [imagesArray]);

  const fetchAllProducts = async () => {
    const res = await fetch(`${process.env.MAIN_API_ENDPOINT}/products/`, {
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

  const setGlobalVariable = async () => {
    const bodyRequest = {
      type: 'promotions',
      title: promotionName,
    };
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/promotions/set/global-variable`,
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

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (slug.length > 0) {
      const checkSlugValid = async () => {
        const isSlugValidRes = await verifySlug(slug);
      };
      checkSlugValid();
      setGlobalVariable();
    }
  }, [promotionName]);

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
    changeSlugFromProductName(promotionName);
  }, [promotionName]);

  // Input Handlers
  const onChangePromotionName = (e) => {
    if (promotionName.length <= 100) {
      setPromotionName(e.target.value);
    } else {
      setPromotionName(promotionName.substring(0, promotionName.length - 1));
    }
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
    if (!productOnPromotion.includes(element.id)) {
      setProductOnPromotion((productOnPromotion) =>
        productOnPromotion.concat(element.id)
      );
      element.style.backgroundColor = '#f2f2f2';
      element.style.border = '1px solid #c8d231';
    } else {
      setProductOnPromotion(
        removeElementFromArray(productOnPromotion, element.id)
      );
      element.style.backgroundColor = '#fff';
      element.style.border = '1px solid #18840f';
    }
  };

  const handleProductDescription = (e) => {
    setDescription(e.target.getContent());
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

  const verifySlug = async () => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/promotions/validation/slug/${slug}`,
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

  const editPromotion = async (promotion) => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/promotions/update/${id}`,
      {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(promotion),
      }
    );
    const data = await response.json();
    return data;
  };

  const deletePromotionImage = async (imageId) => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/promotions/delete/cover/${imageId}`,
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

  const disabledSubmitButton = () => {
    if (
      !_.isEmpty(productOnPromotion) &&
      isSlugValid &&
      slug.length > 0 &&
      promotionName.length > 0 &&
      description.length > 0 &&
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

  const changeSlugFromProductName = () => {
    const lowerCaseTitle = promotionName.toLowerCase();
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

  const onSubmit = async (e) => {
    disabledSubmitButton();
    if (allFieldsFilled) {
      let promotionInfo = {};
      if (isNewImagesUploaded) {
        let imagesArrayObj = [];
        imagesArray.map((image) => {
          imagesArrayObj.push(image.data._id);
        });
        promotionInfo = {
          isSlugValid,
          media: imagesArrayObj,
          promotionName,
          description,
          products: productOnPromotion,
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
        promotionInfo = {
          isSlugValid,
          promotionName,
          description,
          products: productOnPromotion,
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
        const res = await editPromotion(promotionInfo);
        if (isNewImagesUploaded) {
          toDeleteImagesArray.map(async (image) => {
            await deletePromotionImage(image.data._id);
          });
        }
        await Router.push(`/admin/promotions`);
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
      setUploadHeight('300px');
    } else if (window.innerWidth < 500 && window.innerWidth > 380) {
      setUploadHeight('275px');
    } else {
      setUploadHeight('350px');
    }
  });

  return (
    <Layout>
      <Head>
        <title>
          {promotionName.length > 0
            ? `${promotionName} | Edit Product - Canada Cannabyss`
            : 'Loading...'}
        </title>
      </Head>
      <Wrapper>
        <ImageUploader
          ref={childRef}
          width='100%'
          height={uploddHegiht}
          imagesArray={imagesArray}
          handleSetImagesArray={handleSetImagesArray}
          isDragNotAcceptColor='rgba(0, 0, 0, 0.3)'
          isDragAcceptColor='#18840f'
          isDragRejectColor='#ff0000'
          textColor='#18840f'
          textSize='18px'
          onDragMessage='Drop the file here'
          defaultMessage='Allowed files dimensions'
          fileDimensions={{
            width: '960px',
            height: '540px',
          }}
          multipleFiles={false}
          apiEndpoint={`${process.env.MAIN_API_ENDPOINT}/admin/promotions/publish/media`}
        />
        <ProductListDiv>
          <ProductsList
            products={productList}
            handleGetElement={handleGetElement}
          />
        </ProductListDiv>
        <PromotionInfoDiv>
          <div>
            <Label>Promotion Name</Label>
            <br />
            <PromotionName
              type='text'
              placeholder='Promotion Name'
              onChange={onChangePromotionName}
              value={promotionName}
            />
            <br />
          </div>
          <PromotionDescription>
            {description.length > 0 && (
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
            )}
          </PromotionDescription>
        </PromotionInfoDiv>
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
        <Button onClick={handleSubmit}>Update Promotion</Button>
      </Wrapper>
    </Layout>
  );
};

export default Promotion;

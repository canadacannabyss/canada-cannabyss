import { Editor } from '@tinymce/tinymce-react';
import React, { useEffect, useState, useRef } from 'react';
import Router from 'next/router';
import { FaSpinner } from 'react-icons/fa';
import slugify from 'slugify';
import {
  Button,
  Label,
  ProductListDiv,
  PromotionDescription,
  PromotionInfoDiv,
  PromotionName,
  Wrapper,
  Warning,
  Loading,
  LoadingSpinner,
} from '../../../../../../styles/Pages/Admin/Add/Banner';
import Layout from '../../../../../AdminLayout';
import Organization from '../../../../../UI/Add/Organization';
import SEO from '../../../../../UI/Add/SEO';
import PromotionsList from '../../../../../UI/Lists/Admin/Add/Banner/PromotionsList';
import FeaturedCheckbox from '../../../../../UI/Buttons/Checkbox/Featured';

const Banner = () => {
  const [loading, setLoading] = useState(false);
  const [promotionsOnBanner, setPromotionsOnBanner] = useState([]);
  const [promotionsList, setPromotionsList] = useState([]);
  const [isSlugValid, setIsSlugValid] = useState(true);
  const [slug, setSlug] = useState('');
  const [bannerName, setBannerName] = useState('');
  const [description, setDescription] = useState('');
  const [promotionList, setPromotionList] = useState([]);
  const [seoTitle, setSeoTitle] = useState('');
  const [seoSlug, setSeoSlug] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [tagsArray, setTagsArray] = useState([]);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [warning, setWarning] = useState(false);
  const [featured, setFeatured] = useState(false);

  useEffect(() => {
    disabledSubmitButton();
  }, [
    promotionsOnBanner,
    isSlugValid,
    slug,
    bannerName,
    description,
    seoTitle,
    seoSlug,
    seoDescription,
    category,
    tags,
    tagsArray,
  ]);

  useEffect(() => {
    fetchAllPromotions();
  }, []);

  const fetchAllPromotions = async () => {
    const res = await fetch(
      `${process.env.mainApiEndpoint}/admin/promotions/get/all`,
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
    const data = await res.json();
    setPromotionsList(data);
  };

  const disabledSubmitButton = () => {
    if (
      !_.isEmpty(promotionsOnBanner) &&
      isSlugValid &&
      slug.length > 0 &&
      bannerName.length > 0 &&
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

  const setGlobalVariable = async () => {
    const bodyRequest = {
      type: 'banners',
      title: bannerName,
    };
    const response = await fetch(
      `${process.env.mainApiEndpoint}/admin/promotions/set/global-variable`,
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
      `${process.env.mainApiEndpoint}/admin/promotions/validation/slug/${slug}`,
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

  useEffect(() => {
    if (slug.length > 0) {
      const checkSlugValid = async () => {
        const isSlugValidRes = await verifySlug(slug);
      };
      checkSlugValid();
      setGlobalVariable();
    }
  }, [bannerName]);

  useEffect(() => {
    setGlobalVariable();
    changeSlugFromBannerName(bannerName);
  }, [bannerName]);

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

  const removeElementFromArray = (arr, element) => {
    const index = arr.indexOf(element);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  };

  const publishBanner = async (promotion) => {
    const response = await fetch(
      `${process.env.mainApiEndpoint}/admin/promotions/banners/publish`,
      {
        method: 'POST',
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
  const handleCheckFeatured = () => {
    setFeatured(!featured);
  };

  const changeSlugFromBannerName = () => {
    const lowerCaseTitle = bannerName.toLowerCase();
    const slugLower = slugify(lowerCaseTitle);
    setSlug(slugLower);
  };

  const handleBannerDescription = (e) => {
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

  const handleGetElement = (el) => {
    const element = el;
    if (!promotionsOnBanner.includes(element.id)) {
      setPromotionsOnBanner((promotionsOnBanner) =>
        promotionsOnBanner.concat(element.id)
      );
      element.style.backgroundColor = '#f2f2f2';
      element.style.border = '1px solid #c8d231';
    } else {
      setPromotionsOnBanner(
        removeElementFromArray(promotionsOnBanner, element.id)
      );
      element.style.backgroundColor = '#fff';
      element.style.border = '1px solid #18840f';
    }
  };

  const onChangeBannerName = (e) => {
    if (bannerName.length <= 100) {
      setBannerName(e.target.value);
    } else {
      setBannerName(bannerName.substring(0, bannerName.length - 1));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    disabledSubmitButton();
    setLoading(true);
    if (allFieldsFilled) {
      const bannerInfo = {
        isSlugValid,
        bannerName,
        description,
        featured,
        promotions: promotionsOnBanner,
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
      console.log('bannerInfo:', bannerInfo);

      const isSlugValidRes = await verifySlug(slug);
      if (isSlugValidRes.valid) {
        const res = await publishBanner(bannerInfo);
        // setUploaded(res.uploaded);
        Router.push(`/`);
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
        <Wrapper>
          <ProductListDiv>
            <PromotionsList
              promotions={promotionsList}
              handleGetElement={handleGetElement}
            />
          </ProductListDiv>
          <PromotionInfoDiv>
            <div>
              <Label>Banner Name</Label>
              <br />
              <PromotionName
                type='text'
                placeholder='Banner Name'
                value={bannerName}
                onChange={onChangeBannerName}
              />
              <Label>Slug</Label>
              <br />
              <PromotionName
                type='text'
                placeholder='Slug'
                value={slug}
                disabled
              />
              <br />
              <FeaturedCheckbox
                handleCheckFeatured={handleCheckFeatured}
                featured={featured}
              />
            </div>
            <PromotionDescription>
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
                onChange={handleBannerDescription}
              />
            </PromotionDescription>
          </PromotionInfoDiv>
          <SEO
            onChangeSeoTitle={onChangeSeoTitle}
            onChangeSeoSlug={onChangeSeoSlug}
            onChangeSeoDescription={onChangeSeoDescription}
            promotionName={seoTitle}
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
          <Button onClick={onSubmit}>Create Banner</Button>
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

export default Banner;

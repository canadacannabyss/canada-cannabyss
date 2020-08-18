import { Editor } from '@tinymce/tinymce-react';
import { FaTrashAlt, FaSpinner, FaSync } from 'react-icons/fa';
import { ImageUploader } from 'portrait-load';
import Router from 'next/router';
import Head from 'next/head';
import React, { useEffect, useState, useRef } from 'react';
import slugify from 'slugify';
import DeleteConfirmation from '../../UI/Confirmations/DeleteCategoryConfirmation';

import {
  Button,
  CategoriesTitle,
  CategoriesUl,
  CategoryAdd,
  RefreshButton,
  CategoryDescription,
  CategoryDetailContainer,
  CategoryInfoDiv,
  CategoryName,
  CategoryUl,
  CategoryUploaderPlaceholder,
  Div,
  DivButtons,
  DeleteButton,
  DivCategory,
  DivMobile,
  GridDiv,
  Label,
  ListHead,
  Warning,
  Wrapper,
  LoadingSpinner,
  Loading,
} from '../../../styles/Pages/Admin/Categories';
import Layout from '../../AdminLayout';
import SEO from '../../UI/Add/SEO';
import FeaturedCheckbox from '../../UI/Buttons/Checkbox/Featured';

const Categories = () => {
  const childRef = useRef();

  const [loading, setLoading] = useState(false);
  const [categoryDetails, setCategoryDetails] = useState({});
  const [categories, setCategories] = useState([]);
  const [isSlugValid, setIsSlugValid] = useState(true);
  const [slug, setSlug] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');
  const [seoTitle, setSeoTitle] = useState('');
  const [seoSlug, setSeoSlug] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [enableCoverUploader, setEnableCoverUploader] = useState(false);
  const [warning, setWarning] = useState(false);
  const [featured, setFeatured] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [selectedCategoryName, setSelectedCategoryName] = useState('');
  const [toggleDeleteConfirmation, setToggleDeleteConfirmation] = useState(
    false
  );
  const [imagesArray, setImagesArray] = useState([]);
  const [imagesArrayLength, setImagesArrayLength] = useState(0);
  const [uploddHegiht, setUploadHeight] = useState('500px');
  const [toDeleteImagesArray, setToDeleteImagesArray] = useState([]);
  const [isNewImagesUploaded, setIsNewImagesUploaded] = useState(false);

  const handleSetImagesArray = (images) => {
    setImagesArray(images);
  };

  useEffect(() => {
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
  }, [imagesArray, toDeleteImagesArray]);

  useEffect(() => {
    if (!_.isEmpty(categoryDetails)) {
      if (categoryDetails.media !== null) {
        const imagesObj = [
          {
            data: categoryDetails.media,
          },
        ];
        handleSetImagesArray(imagesObj);
        setToDeleteImagesArray(imagesObj);
      }
      setCategoryId(categoryDetails._id);
      setCategoryName(categoryDetails.categoryName);
      setDescription(categoryDetails.description);
      setSeoTitle(categoryDetails.seo.title);
      setSeoSlug(categoryDetails.seo.slug);
      setSeoDescription(categoryDetails.seo.description);
      setFeatured(categoryDetails.featured);
    }
  }, [categoryDetails]);

  useEffect(() => {
    if (imagesArray.length > 0) {
      if (imagesArray[0].data !== null && imagesArray[0].data !== undefined) {
        if (imagesArray.length === imagesArrayLength) {
          onSubmit();
        }
      }
    }
  }, [imagesArray]);

  const fetchCategories = async () => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/category/panel/get/all`,
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
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const getCategory = async (slug) => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/category/panel/get/${slug}`,
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
    setCategoryDetails(data);
  };

  const handleSyncCategory = async () => {
    const newCategories = await syncCategory();
    setCategories(newCategories);
  };

  const handleCheckFeatured = () => {
    setFeatured(!featured);
  };

  useEffect(() => {
    disabledSubmitButton();
  }, [
    isSlugValid,
    slug,
    categoryName,
    description,
    seoTitle,
    seoSlug,
    seoDescription,
    featured,
  ]);

  useEffect(() => {
    if (slug.length > 0) {
      const checkSlugValid = async () => {
        const isSlugValidRes = await verifySlug(slug);
      };
      checkSlugValid();
      setGlobalVariable();
    }
  }, [categoryName]);

  useEffect(() => {
    if (slug.length > 0) {
      verifySlug();
    }
  }, [slug]);

  useEffect(() => {
    updateSeoSlugFromTitle();
  }, [seoTitle]);

  useEffect(() => {
    changeSlugFromCategoryName(categoryName);
    handleEnableCoverUploader();
  }, [categoryName]);

  // Input Handlers
  const onChangeCategoryName = (e) => {
    if (categoryName.length <= 100) {
      setCategoryName(e.target.value);
    } else {
      setCategoryName(categoryName.substring(0, categoryName.length - 1));
    }
  };

  const handleCategoryDescription = (e) => {
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

  const setGlobalVariable = async () => {
    const bodyRequest = {
      type: 'categories',
      title: categoryName,
    };
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/category/set/global-variable`,
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
      `${process.env.MAIN_API_ENDPOINT}/admin/category/validation/slug/${slug}`,
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

  const editCategory = async (category) => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/category/update/${categoryId}`,
      {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(category),
      }
    );
    const data = await response.json();
    return data;
  };

  const syncCategory = async (category) => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/category/sync`,
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

  const deleteCategoryMedia = async (imageId) => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/category/delete/media/${imageId}`,
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
      isSlugValid &&
      slug.length > 0 &&
      categoryName.length > 0 &&
      description.length > 0 &&
      seoTitle.length > 0 &&
      seoSlug.length > 0 &&
      seoDescription.length > 0
    ) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  };

  const changeSlugFromCategoryName = () => {
    const lowerCaseTitle = categoryName.toLowerCase();
    const slugLower = slugify(lowerCaseTitle);
    setSlug(slugLower);
  };

  const handleEnableCoverUploader = () => {
    if (categoryName.length > 0) {
      setTimeout(() => {
        setEnableCoverUploader(true);
      }, 0);
    } else if (categoryName.length === 0 || categoryName === '') {
      setTimeout(() => {
        setEnableCoverUploader(false);
      }, 0);
    }
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
      let categoryInfo = {};
      if (isNewImagesUploaded) {
        let imagesArrayObj = [];
        imagesArray.map((image) => {
          imagesArrayObj.push(image.data._id);
        });
        categoryInfo = {
          id: categoryDetails._id,
          isSlugValid,
          slug,
          media: imagesArrayObj,
          categoryName,
          description,
          featured,
          seo: {
            title: seoTitle,
            slug: seoSlug,
            description: seoDescription,
          },
        };
      } else {
        categoryInfo = {
          id: categoryDetails._id,
          isSlugValid,
          slug,
          categoryName,
          description,
          featured,
          seo: {
            title: seoTitle,
            slug: seoSlug,
            description: seoDescription,
          },
        };
      }

      console.log(categoryInfo);

      const isSlugValidRes = await verifySlug(slug);
      if (isSlugValidRes.valid) {
        const res = await editCategory(categoryInfo);
        // if (isNewImagesUploaded) {
        //   toDeleteImagesArray.map(async (image) => {
        //     await deleteCategoryMedia(image.data._id);
        //   });
        // }
        Router.push(`/`);
      } else {
        console.log('Slug is invalid');
        setIsSlugValid(false);
      }
    } else {
      setWarning(true);
    }
  };

  useEffect(() => {
    setGlobalVariable();
  }, [categoryName]);

  const handleOpenDeleteModel = () => {
    setSelectedCategoryId(categoryId);
    setSelectedCategoryName(categoryName);
    setToggleDeleteConfirmation(true);
  };

  const handleCloseDeleteConfirmation = () => {
    setToggleDeleteConfirmation(false);
  };

  const handleGetNewCategoryListOnDeletion = (category) => {
    setCategories(category);
    setCategoryDetails({});
  };

  window.addEventListener('resize', () => {
    console.log('window.innerWidth:', window.innerWidth);
    if (window.innerWidth < 500) {
      setUploadHeight('450px');
    } else if (window.innerWidth < 500 && window.innerWidth > 380) {
      setUploadHeight('400px');
    } else {
      setUploadHeight('500px');
    }
  });

  return (
    <>
      <Layout>
        <Head>
          <title>Categories | Administrator - Canada Cannabyss</title>
        </Head>
        {toggleDeleteConfirmation && (
          <DeleteConfirmation
            categoryId={selectedCategoryId}
            categoryName={selectedCategoryName}
            handleCloseDeleteConfirmation={handleCloseDeleteConfirmation}
            handleGetNewCategoryListOnDeletion={
              handleGetNewCategoryListOnDeletion
            }
          />
        )}
        <Wrapper>
          <GridDiv>
            <DivMobile>
              <ListHead>
                <CategoryAdd>
                  <CategoriesTitle>Categories</CategoriesTitle>
                </CategoryAdd>
              </ListHead>
              <CategoryUl>
                {categories.map((category) => (
                  <li key={category._id}>
                    <button
                      onClick={() => {
                        getCategory(category.slug);
                      }}
                    >
                      {category.categoryName}
                    </button>
                  </li>
                ))}
              </CategoryUl>
            </DivMobile>
            <Div>
              <ListHead>
                <CategoryAdd>
                  <CategoriesTitle>Categories</CategoriesTitle>
                  <RefreshButton>
                    <FaSync
                    // onClick={() => {
                    //   handleSyncCategory();
                    // }}
                    />
                  </RefreshButton>
                </CategoryAdd>
              </ListHead>
              <CategoriesUl>
                {categories.map((category) => (
                  <li key={category._id}>
                    <button
                      onClick={() => {
                        getCategory(category.slug);
                      }}
                    >
                      {category.categoryName}
                    </button>
                  </li>
                ))}
              </CategoriesUl>
            </Div>
            <DivCategory>
              {!_.isEmpty(categoryDetails) && (
                <CategoryDetailContainer>
                  <CategoryInfoDiv>
                    <div>
                      <ImageUploader
                        ref={childRef}
                        width='80%'
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
                          width: '540px',
                          height: '960px',
                        }}
                        multipleFiles={false}
                        apiEndpoint={`${process.env.MAIN_API_ENDPOINT}/admin/category/publish/media`}
                      />
                    </div>
                    <CategoryDescription>
                      <Label>Category Name</Label>
                      <br />
                      <CategoryName
                        type='text'
                        placeholder='Category Name'
                        onChange={onChangeCategoryName}
                        value={categoryName}
                      />
                      <br />
                      <FeaturedCheckbox
                        handleCheckFeatured={handleCheckFeatured}
                        featured={featured}
                      />
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
                        onChange={handleCategoryDescription}
                      />
                    </CategoryDescription>
                  </CategoryInfoDiv>
                  <SEO
                    onChangeSeoTitle={onChangeSeoTitle}
                    onChangeSeoSlug={onChangeSeoSlug}
                    onChangeSeoDescription={onChangeSeoDescription}
                    title={seoTitle}
                    slug={seoSlug}
                    description={seoDescription}
                  />
                  {warning && <Warning>Fill all fields before submit</Warning>}
                  <DivButtons>
                    <Button onClick={handleSubmit}>Update Category</Button>
                    <DeleteButton
                      onClick={() => {
                        handleOpenDeleteModel();
                      }}
                    >
                      <FaTrashAlt />
                    </DeleteButton>
                  </DivButtons>
                </CategoryDetailContainer>
              )}
            </DivCategory>
          </GridDiv>
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

export default Categories;

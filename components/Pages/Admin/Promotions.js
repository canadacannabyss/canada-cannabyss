import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { FaPlus } from 'react-icons/fa';
import DeleteConfirmation from '../../UI/Confirmations/DeletePromotionConfirmation';
import DeleteBannerConfirmation from '../../UI/Confirmations/DeleteBannerConfirmation';
import {
  AllPromotions,
  CategoryUl,
  Div,
  DivMobile,
  DivProduct,
  GridDiv,
  ListHead,
  PromotionAdd,
  PromotionsAddLink,
  ButtonSelectionDiv,
  ButtonSelection,
  PromotionsTitle,
  PromotionsUl,
  Wrapper,
} from '../../../styles/Pages/Admin/Promotions';
import Layout from '../../AdminLayout';
import PromotionsList from '../../UI/Lists/Admin/Promotions/PromotionsList';
import BannersList from '../../UI/Lists/Admin/Promotions/Banners/BannersList';

const Promotions = () => {
  const [categories, setCategories] = useState([]);
  const [promotionsSelected, setPromotionsSelected] = useState(true);
  const [bannersSelected, setBannerSelected] = useState(false);
  const [promotionList, setPromotionList] = useState([]);
  const [bannerList, setBannerList] = useState([]);
  const [selectedPromotionId, setSelectedPromotionId] = useState('');
  const [selectedPromotionName, setSelectedPromotionName] = useState('');
  const [selectedBannerId, setSelectedBannerId] = useState('');
  const [selectedBannerName, setSelectedBannerName] = useState('');
  const [toggleDeleteConfirmation, setToggleDeleteConfirmation] = useState(
    false
  );

  const fetchAllCategories = async () => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/panel/get/categories/promotion`,
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

  const fetchAllPromotions = async () => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/panel/get/all/promotions`,
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
    console.log('promotions:', data);
    setPromotionList(data);
  };

  const fetchAllBanners = async () => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/panel/get/all/banners`,
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
    console.log('banners:', data);
    setBannerList(data);
  };

  const getPromotionsByCategory = async (category) => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/panel/get/promotions/by/category/${category}`,
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
    setPromotionList(data);
  };

  const getBannersByCategory = async (category) => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/panel/get/banners/by/category/${category}`,
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
    setBannerList(data);
  };

  useEffect(() => {
    fetchAllCategories();
    fetchAllPromotions();
    fetchAllBanners();
  }, []);

  const clearSelectedButtons = () => {
    const buttons = document.querySelectorAll('.selectButton');
    buttons.forEach((button) => {
      button.classList.remove('selected');
    });
  };

  const handleSelectPromotions = (e) => {
    setBannerSelected(false);
    setPromotionsSelected(true);
    clearSelectedButtons();
    e.currentTarget.classList.add('selected');
  };

  const handleSelectBanners = (e) => {
    setPromotionsSelected(false);
    setBannerSelected(true);
    clearSelectedButtons();
    e.currentTarget.classList.add('selected');
  };

  const handleCloseDeleteConfirmation = () => {
    setToggleDeleteConfirmation(false);
  };

  const handleGetNewPromotionsListOnDeletion = (promotion) => {
    console.log(promotion);
    setPromotionList(promotion);
  };

  const handleGetNewBannersListOnDeletion = (banners) => {
    console.log(banners);
    setBannerList(banners);
  };

  const handleGetElement = (el) => {
    const element = el.parentNode.parentNode.parentNode;
    console.log(element);
    setSelectedPromotionId(element.id);
    setSelectedPromotionName(element.querySelector('p').innerHTML);
    setToggleDeleteConfirmation(true);
  };

  const handleGetBannerElement = (el) => {
    const element = el.parentNode.parentNode.parentNode;
    console.log(element);
    setSelectedBannerId(element.id);
    setSelectedBannerName(element.querySelector('p').innerHTML);
    setToggleDeleteConfirmation(true);
  };

  return (
    <Layout>
      <Head>
        <title>Promotions | Administrator - Canada Cannabyss</title>
      </Head>
      {promotionsSelected && toggleDeleteConfirmation && (
        <DeleteConfirmation
          promotionId={selectedPromotionId}
          promotionName={selectedPromotionName}
          handleCloseDeleteConfirmation={handleCloseDeleteConfirmation}
          handleGetNewPromotionsListOnDeletion={
            handleGetNewPromotionsListOnDeletion
          }
        />
      )}
      {bannersSelected && toggleDeleteConfirmation && (
        <DeleteBannerConfirmation
          bannerId={selectedBannerId}
          bannerName={selectedBannerName}
          handleCloseDeleteConfirmation={handleCloseDeleteConfirmation}
          handleGetNewBannersListOnDeletion={handleGetNewBannersListOnDeletion}
        />
      )}
      <Wrapper>
        <GridDiv>
          <DivMobile>
            <ListHead>
              <ButtonSelectionDiv>
                <ButtonSelection
                  className='selectButton selected'
                  onClick={(e) => {
                    handleSelectPromotions(e);
                  }}
                >
                  Promotions
                </ButtonSelection>
                <ButtonSelection
                  className='selectButton'
                  onClick={(e) => {
                    handleSelectBanners(e);
                  }}
                >
                  Banner
                </ButtonSelection>
              </ButtonSelectionDiv>
              <PromotionAdd>
                {promotionsSelected && (
                  <>
                    <PromotionsTitle>Promotions</PromotionsTitle>
                    <Link href='/admin/add/promotion' as='/admin/add/promotion'>
                      <PromotionsAddLink>
                        <FaPlus />
                      </PromotionsAddLink>
                    </Link>
                  </>
                )}
                {bannersSelected && (
                  <>
                    <PromotionsTitle>Banner</PromotionsTitle>
                    <Link href='/admin/add/banner' as='/admin/add/banner'>
                      <PromotionsAddLink>
                        <FaPlus />
                      </PromotionsAddLink>
                    </Link>
                  </>
                )}
              </PromotionAdd>
            </ListHead>
            <CategoryUl>
              <li>
                <AllPromotions
                  onClick={() => {
                    fetchAllPromotions();
                  }}
                >
                  All Promotions
                </AllPromotions>
              </li>
              <li>
                <AllPromotions
                  onClick={() => {
                    fetchAllBanners();
                  }}
                >
                  All Banners
                </AllPromotions>
              </li>
              {categories.map((category) => (
                <li key={category._id}>
                  <button
                    onClick={() => {
                      if (promotionsSelected) {
                        getPromotionsByCategory(category.slug);
                      }
                      if (bannersSelected) {
                        getBannersByCategory(category.slug);
                      }
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
              <ButtonSelectionDiv>
                <ButtonSelection
                  className='selectButton selected'
                  onClick={(e) => {
                    handleSelectPromotions(e);
                  }}
                >
                  Promotions
                </ButtonSelection>
                <ButtonSelection
                  className='selectButton'
                  onClick={(e) => {
                    handleSelectBanners(e);
                  }}
                >
                  Banner
                </ButtonSelection>
              </ButtonSelectionDiv>
              <PromotionAdd>
                {promotionsSelected && (
                  <>
                    <PromotionsTitle>Promotions</PromotionsTitle>
                    <Link href='/admin/add/promotion' as='/admin/add/promotion'>
                      <PromotionsAddLink>
                        <FaPlus />
                      </PromotionsAddLink>
                    </Link>
                  </>
                )}
                {bannersSelected && (
                  <>
                    <PromotionsTitle>Banner</PromotionsTitle>
                    <Link href='/admin/add/banner' as='/admin/add/banner'>
                      <PromotionsAddLink>
                        <FaPlus />
                      </PromotionsAddLink>
                    </Link>
                  </>
                )}
              </PromotionAdd>
            </ListHead>
            {promotionsSelected && (
              <AllPromotions
                onClick={() => {
                  fetchAllPromotions();
                }}
              >
                All Promotions
              </AllPromotions>
            )}
            {bannersSelected && (
              <AllPromotions
                onClick={() => {
                  fetchAllBanners();
                }}
              >
                All Banners
              </AllPromotions>
            )}
            <PromotionsUl>
              {categories.map((category) => (
                <li key={category._id}>
                  <button
                    onClick={() => {
                      if (promotionsSelected) {
                        getPromotionsByCategory(category.slug);
                      }
                      if (bannersSelected) {
                        getBannersByCategory(category.slug);
                      }
                    }}
                  >
                    {category.categoryName}
                  </button>
                </li>
              ))}
            </PromotionsUl>
          </Div>
          <DivProduct>
            {promotionsSelected && (
              <PromotionsList
                promotions={promotionList}
                handleGetElement={handleGetElement}
              />
            )}
            {bannersSelected && (
              <BannersList
                banners={bannerList}
                handleGetElement={handleGetBannerElement}
              />
            )}
          </DivProduct>
        </GridDiv>
      </Wrapper>
    </Layout>
  );
};

export default Promotions;

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { FaPlus } from 'react-icons/fa';
import {
  AllBundles,
  BundleAdd,
  BundlesAddLink,
  BundlesTitle,
  BundlesUl,
  BundleTitle,
  CategoryUl,
  Div,
  DivBundle,
  DivMobile,
  GridDiv,
  ListHead,
  Wrapper,
} from '../../../styles/Pages/Admin/Bundles';
import Layout from '../../AdminLayout';
import BundlesList from '../../UI/Lists/Admin/Bundles/BundlesList';
import DeleteConfirmation from '../../UI/Confirmations/DeleteBundleConfirmation';

const Bundles = () => {
  const [bundlesCategories, setBundlesCategories] = useState([]);
  const [bundleList, setBundleList] = useState([]);
  const [selectedBundleId, setSelectedBundleId] = useState('');
  const [selectedBundleName, setSelectedBundleName] = useState('');
  const [toggleDeleteConfirmation, setToggleDeleteConfirmation] = useState(
    false
  );

  const fetchCategories = async () => {
    const response = await fetch(
      `${process.env.mainApiEndpoint}/admin/panel/get/categories/bundles`,
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
    setBundlesCategories(data);
  };

  const fetchAllBundles = async () => {
    const res = await fetch(`${process.env.mainApiEndpoint}/bundles/`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    setBundleList(data);
  };

  useEffect(() => {
    fetchCategories();
    fetchAllBundles();
  }, []);

  const getProductsByCategory = async (category) => {
    const response = await fetch(
      `${process.env.mainApiEndpoint}/admin/panel/get/bundles/by/category/${category}`,
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
    setBundleList(data);
  };

  const handleGetElement = (el) => {
    const element = el.parentNode.parentNode.parentNode;
    console.log(element);
    setSelectedBundleId(element.id);
    setSelectedBundleName(element.querySelector('p').innerHTML);
    setToggleDeleteConfirmation(true);
  };

  const handleCloseDeleteConfirmation = () => {
    setToggleDeleteConfirmation(false);
  };

  const handleGetNewBundleListOnDeletion = (products) => {
    setBundleList(products);
  };

  return (
    <Layout>
      <Head>
        <title>Bundles | Administrator - Canada Cannabyss</title>
      </Head>
      {toggleDeleteConfirmation && (
        <DeleteConfirmation
          bundleId={selectedBundleId}
          bundleName={selectedBundleName}
          handleCloseDeleteConfirmation={handleCloseDeleteConfirmation}
          handleGetNewBundleListOnDeletion={handleGetNewBundleListOnDeletion}
        />
      )}
      <Wrapper>
        <GridDiv>
          <DivMobile>
            <ListHead>
              <BundleAdd>
                <BundleTitle>Bundles</BundleTitle>
                <Link href='/admin/add/bundle' as='/admin/add/bundle'>
                  <BundlesAddLink>
                    <FaPlus />
                  </BundlesAddLink>
                </Link>
              </BundleAdd>
            </ListHead>
            <CategoryUl>
              <li>
                <AllBundles
                  onClick={() => {
                    fetchAllBundles();
                  }}
                >
                  All Coupon
                </AllBundles>
              </li>
              {bundlesCategories.map((category) => (
                <li key={category._id}>
                  <button
                    onClick={() => {
                      getProductsByCategory(category.slug);
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
              <BundleAdd>
                <BundlesTitle>Bundles</BundlesTitle>
                <Link href='/admin/add/bundle' as='/admin/add/bundle'>
                  <BundlesAddLink>
                    <FaPlus />
                  </BundlesAddLink>
                </Link>
              </BundleAdd>
            </ListHead>
            <AllBundles
              onClick={() => {
                fetchAllBundles();
              }}
            >
              All Bundle
            </AllBundles>
            <BundlesUl>
              {bundlesCategories.map((category) => (
                <li key={category._id}>
                  <button
                    onClick={() => {
                      getProductsByCategory(category.slug);
                    }}
                  >
                    {category.categoryName}
                  </button>
                </li>
              ))}
            </BundlesUl>
          </Div>
          <DivBundle>
            {bundleList.length > 0 && (
              <BundlesList
                bundles={bundleList}
                handleGetElement={handleGetElement}
              />
            )}
          </DivBundle>
        </GridDiv>
      </Wrapper>
    </Layout>
  );
};

export default Bundles;

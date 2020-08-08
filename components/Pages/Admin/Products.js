import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { FaPlus } from 'react-icons/fa';
import DeleteConfirmation from '../../UI/Confirmations/DeleteProductConfirmation';
import {
  AllProducts,
  CategoryUl,
  Div,
  DivMobile,
  DivProduct,
  GridDiv,
  ListHead,
  ProductAdd,
  ProductsAddLink,
  ProductsTitle,
  ProductsUl,
  Wrapper,
} from '../../../styles/Pages/Admin/Products';
import Layout from '../../AdminLayout';
import ProductsList from '../../UI/Lists/Admin/Products/ProductsList';

const Products = () => {
  const [productCategories, setProductCategories] = useState([]);
  const [productList, setProductList] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState('');
  const [selectedProductName, setSelectedProductName] = useState('');
  const [toggleDeleteConfirmation, setToggleDeleteConfirmation] = useState(
    false
  );

  const handleDeleteProduct = () => {};

  const fetchCategories = async () => {
    const response = await fetch(
      `${process.env.mainApiEndpoint}/admin/panel/get/categories/products`,
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
    setProductCategories(data);
  };

  const fetchAllProducts = async () => {
    const res = await fetch(
      `${process.env.mainApiEndpoint}/products?page=2&limit=12`,
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
    setProductList(data);
  };

  useEffect(() => {
    fetchCategories();
    fetchAllProducts();
  }, []);

  const getProductsByCategory = async (category) => {
    const response = await fetch(
      `${process.env.mainApiEndpoint}/admin/panel/get/products/by/category/${category}`,
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
    setProductList(data);
  };

  const handleGetElement = (el) => {
    const element = el.parentNode.parentNode.parentNode;
    console.log(element);
    setSelectedProductId(element.id);
    setSelectedProductName(element.querySelector('p').innerHTML);
    setToggleDeleteConfirmation(true);
  };

  const handleCloseDeleteConfirmation = () => {
    setToggleDeleteConfirmation(false);
  };

  const handleGetNewProductsListOnDeletion = () => {
    console.log('handleGetNewProductsListOnDeletion');
    fetchCategories();
  };

  return (
    <Layout>
      <Head>
        <title>Products | Administrator - Canada Cannabyss</title>
      </Head>
      {toggleDeleteConfirmation && (
        <DeleteConfirmation
          productId={selectedProductId}
          productName={selectedProductName}
          handleCloseDeleteConfirmation={handleCloseDeleteConfirmation}
          handleGetNewProductsListOnDeletion={
            handleGetNewProductsListOnDeletion
          }
        />
      )}
      <Wrapper>
        <GridDiv>
          <DivMobile>
            <ListHead>
              <ProductAdd>
                <ProductsTitle>Products</ProductsTitle>
                <Link href='/admin/add/product' as='/admin/add/product'>
                  <ProductsAddLink>
                    <FaPlus />
                  </ProductsAddLink>
                </Link>
              </ProductAdd>
            </ListHead>
            <CategoryUl>
              <li>
                <AllProducts
                  onClick={() => {
                    fetchAllProducts();
                  }}
                >
                  All Product
                </AllProducts>
              </li>
              {productCategories.map((category) => (
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
              <ProductAdd>
                <ProductsTitle>Products</ProductsTitle>
                <Link href='/admin/add/product' as='/admin/add/product'>
                  <ProductsAddLink>
                    <FaPlus />
                  </ProductsAddLink>
                </Link>
              </ProductAdd>
            </ListHead>
            <AllProducts
              onClick={() => {
                fetchAllProducts();
              }}
            >
              All Product
            </AllProducts>
            <ProductsUl>
              {productCategories.map((category) => (
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
            </ProductsUl>
          </Div>
          <DivProduct>
            {!_.isEmpty(productList) && productList.results !== undefined && (
              <ProductsList
                products={productList.results}
                handleGetElement={handleGetElement}
              />
            )}
          </DivProduct>
        </GridDiv>
      </Wrapper>
    </Layout>
  );
};

export default Products;

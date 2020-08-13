import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { FaSortDown } from 'react-icons/fa';
import _ from 'lodash';

import {
  Div,
  Ul,
  ProductsDiv,
  ProductLi,
} from '../../../../../styles/Components/UI/Navbar/Tabs/Products/Product';

const Products = (props) => {
  const categories = useSelector((state) => state.productsCategories);

  const [products, setProducts] = useState([]);
  const [auxProducts, setAuxProducts] = useState([]);
  const [auxProductsSplitArray, setAuxProductsSplitArray] = useState([]);
  const [midProducts, setMidProducts] = useState(0);

  useEffect(() => {
    let tempProducts = products;
    if (products.length > 9) {
      let tempAuxProducts = tempProducts.splice(0, 9);
      setAuxProducts(tempAuxProducts);
      setAuxProductsSplitArray(tempProducts);
    } else {
      setAuxProducts(products);
    }
  }, [products]);

  const handleCloseTab = () => {
    const { handleClose } = props;
    const close = handleClose;
    close();
  };

  const fetchAllProducts = async () => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/products/navbar/all`,
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
    setProducts(data);
  };

  const fetchAllProductsCategory = async (categoryId) => {
    console.log('categoryId:', categoryId);
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/products/navbar/category/${categoryId}`,
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
    setProducts(data);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <Div>
      <Ul>
        <li
          onMouseEnter={() => {
            setAuxProducts([]);
            setAuxProductsSplitArray([]);
            fetchAllProducts();
          }}
        >
          <Link href='/products' as='/products'>
            <a>All Products</a>
          </Link>
          {/* <FaSortDown /> */}
        </li>
        {categories.loading ? (
          <>
            <p>Loading...</p>
          </>
        ) : (
          <>
            {categories.fetched && !_.isEmpty(categories.data) && (
              <>
                {categories.data.map((category) => (
                  <li
                    key={category.id}
                    onClick={handleCloseTab}
                    onMouseEnter={() => {
                      setAuxProducts([]);
                      setAuxProductsSplitArray([]);
                      fetchAllProductsCategory(category.id);
                    }}
                  >
                    <Link
                      href='/products/category/[slug]'
                      as={`/products/category/${category.slug}`}
                    >
                      <a>{category.categoryName}</a>
                    </Link>
                    {/* <FaSortDown /> */}
                  </li>
                ))}
              </>
            )}
          </>
        )}
      </Ul>
      <ProductsDiv>
        <ul>
          {auxProducts.length > 0 && (
            <>
              {auxProducts.map((product) => (
                <ProductLi onClick={handleCloseTab}>
                  <Link href='/product/[slug]' as={`/product/${product.slug}`}>
                    <a>{product.productName}</a>
                  </Link>
                </ProductLi>
              ))}
            </>
          )}
        </ul>
        <ul
          style={{
            borderLeft: '1px solid #f1f1f1',
          }}
        >
          {auxProductsSplitArray.length > 0 && (
            <>
              {auxProductsSplitArray.map((product) => (
                <ProductLi onClick={handleCloseTab}>
                  <Link href='/product/[slug]' as={`/product/${product.slug}`}>
                    <a>{product.productName}</a>
                  </Link>
                </ProductLi>
              ))}
            </>
          )}
        </ul>
      </ProductsDiv>
    </Div>
  );
};

export default Products;

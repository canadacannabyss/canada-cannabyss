import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import {
  Div,
  Ul,
} from '../../../../../styles/Components/UI/Navbar/Tabs/Products/Product';

const Products = (props) => {
  const categories = useSelector((state) => state.productsCategories);

  const handleCloseTab = () => {
    const { handleClose } = props;
    const close = handleClose;
    close();
  };

  return (
    <Div>
      <Ul>
        <li>
          <Link href='/products' as='/products'>
            <a>All Products</a>
          </Link>
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
                  <li key={category._id}>
                    <Link
                      href='/products/category/[slug]'
                      as={`/products/category/${category.slug}`}
                    >
                      <a onClick={handleCloseTab}>{category.categoryName}</a>
                    </Link>
                  </li>
                ))}
              </>
            )}
          </>
        )}
      </Ul>
    </Div>
  );
};

export default Products;

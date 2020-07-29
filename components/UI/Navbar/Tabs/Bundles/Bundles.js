import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import {
  Div,
  Ul,
} from '../../../../../styles/Components/UI/Navbar/Tabs/Bundles/Bundles';

const Bundles = (props) => {
  const categories = useSelector((state) => state.bundlesCategories);

  const handleCloseTab = () => {
    const { handleClose } = props;
    const close = handleClose;
    close();
  };

  return (
    <Div>
      <Ul>
        <li>
          <Link href='/bundles' as='/bundles'>
            <a>All Bundles</a>
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
                      href='/bundles/category/[slug]'
                      as={`/bundles/category/${category.slug}`}
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

export default Bundles;

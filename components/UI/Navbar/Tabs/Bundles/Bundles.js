import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { FaSortDown } from 'react-icons/fa';
import _ from 'lodash';

import {
  Div,
  Ul,
  BundlesDiv,
  BundleLi,
} from '../../../../../styles/Components/UI/Navbar/Tabs/Bundles/Bundles';

const Bundles = (props) => {
  const categories = useSelector((state) => state.bundlesCategories);

  const [bundles, setBundles] = useState([]);
  const [auxBundles, setAuxBundles] = useState([]);
  const [auxBundlesSplitArray, setAuxBundlesSplitArray] = useState([]);
  const [midBundles, setMidBundles] = useState(0);

  useEffect(() => {
    let tempBundles = bundles;
    if (bundles.length > 9) {
      let tempAuxBundles = tempBundles.splice(0, 9);
      setAuxBundles(tempAuxBundles);
      setAuxBundlesSplitArray(tempBundles);
    } else {
      setAuxBundles(bundles);
    }
  }, [bundles]);

  const handleCloseTab = () => {
    const { handleClose } = props;
    const close = handleClose;
    close();
  };

  const fetchAllBundles = async () => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/bundles/navbar/all`,
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
    setBundles(data);
  };

  const fetchAllBundlesCategory = async (categoryId) => {
    console.log('categoryId:', categoryId);
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/bundles/navbar/category/${categoryId}`,
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
    setBundles(data);
  };

  useEffect(() => {
    fetchAllBundles();
  }, []);

  return (
    <Div>
      <Ul>
        <li
          onMouseEnter={() => {
            setAuxBundles([]);
            setAuxBundlesSplitArray([]);
            fetchAllBundles();
          }}
        >
          <Link href='/bundles' as='/bundles'>
            <a>All Bundles</a>
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
                      setAuxBundles([]);
                      setAuxBundlesSplitArray([]);
                      fetchAllBundlesCategory(category.id);
                    }}
                  >
                    <Link
                      href='/bundles/category/[slug]'
                      as={`/bundles/category/${category.slug}`}
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
      <BundlesDiv>
        <ul>
          {auxBundles.length > 0 && (
            <>
              {auxBundles.map((bundle) => (
                <BundleLi onClick={handleCloseTab}>
                  <Link href='/bundle/[slug]' as={`/bundle/${bundle.slug}`}>
                    <a>{bundle.bundleName}</a>
                  </Link>
                </BundleLi>
              ))}
            </>
          )}
        </ul>
        <ul
          style={{
            borderLeft: '1px solid #f1f1f1',
          }}
        >
          {auxBundlesSplitArray.length > 0 && (
            <>
              {auxBundlesSplitArray.map((bundle) => (
                <BundleLi onClick={handleCloseTab}>
                  <Link href='/bundle/[slug]' as={`/bundle/${bundle.slug}`}>
                    <a>{bundle.bundleName}</a>
                  </Link>
                </BundleLi>
              ))}
            </>
          )}
        </ul>
      </BundlesDiv>
    </Div>
  );
};

export default Bundles;

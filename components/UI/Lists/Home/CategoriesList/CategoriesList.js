import Link from 'next/link';
import React, { Fragment } from 'react';
import {
  CategoryName,
  LinkTo,
  Wrapper,
  CategoryImage,
} from '../../../../../styles/Components/UI/Lists/CategoriesList/CategoriesList';

const CategoriesList = (props) => {
  const { categories } = props;

  return (
    <>
      {categories.map((category) => (
        <Fragment key={category._id}>
          <Link href='/category/[slug]' as={`/category/${category.slug}`}>
            <LinkTo>
              <Wrapper>
                <CategoryName>
                  <span>{category.categoryName}</span>
                </CategoryName>
                <CategoryImage className='bgImage' src={category.media.url} />
              </Wrapper>
            </LinkTo>
          </Link>
        </Fragment>
      ))}
    </>
  );
};

export default CategoriesList;

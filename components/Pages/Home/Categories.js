import _ from 'lodash';
import Link from 'next/link';
import React from 'react';
import {
  AllCategories,
  H1,
  LoadingH1,
  ListDiv,
  Wrapper,
  LoadingCategoryWrapper,
  LoadingAllCategories,
} from '../../../styles/Pages/Home/Categories';
import CategoriesList from '../../UI/Lists/Home/CategoriesList/CategoriesList';

const Categories = (props) => {
  const { categories } = props;
  return (
    <Wrapper>
      {categories.loading && (
        <>
          <LoadingH1 />
          <ListDiv>
            <LoadingCategoryWrapper />
            <LoadingCategoryWrapper />
            <LoadingCategoryWrapper />
            <LoadingCategoryWrapper />
            <LoadingCategoryWrapper />
            <LoadingCategoryWrapper />
            <LoadingCategoryWrapper />
            <LoadingCategoryWrapper />
          </ListDiv>
          <LoadingAllCategories />
        </>
      )}
      {categories.fetched &&
        !_.isEmpty(categories.data) &&
        !categories.loading &&
        !categories.error && (
          <>
            <H1>Popular Categories</H1>
            <ListDiv>
              {categories.fetched && !_.isEmpty(categories.data) && (
                <CategoriesList categories={categories.data} />
              )}
            </ListDiv>
            <Link href='/categories' as='/categories'>
              <AllCategories>All Categories</AllCategories>
            </Link>
          </>
        )}
    </Wrapper>
  );
};

export default Categories;

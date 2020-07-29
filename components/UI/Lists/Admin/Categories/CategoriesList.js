import Link from 'next/link';
import React from 'react';
import { FaEdit } from 'react-icons/fa';
import {
  Container,
  Edit,
  ProductImage,
  ProductName,
} from '../../../../../styles/Components/UI/Lists/Admin/Categories/Categories';

const CategoriesList = (props) => {
  const { categories } = props;
  return (
    <>
      {categories.map((category) => (
        <Container key={category._id}>
          <ProductImage src={category.img.url} />
          <ProductName>{category.name}</ProductName>
          <Link
            href='/admin/edit/promotion/[slug]'
            as={`/admin/edit/promotion/${category.slug}`}
          >
            <Edit>
              <FaEdit />
            </Edit>
          </Link>
        </Container>
      ))}
    </>
  );
};

export default CategoriesList;

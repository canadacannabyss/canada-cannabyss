import Link from 'next/link';
import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import {
  Container,
  DivButtons,
  Edit,
  Div,
  DivImage,
  Delete,
  ProductImage,
  ProductName,
} from '../../../../../styles/Components/UI/Lists/Admin/Products/ProductsList';

const ProductsList = (props) => {
  const { products, handleGetElement } = props;

  const handleSelectProduct = (e) => {
    const getter = handleGetElement;
    getter(e.currentTarget);
  };

  return (
    <>
      {products.map((product) => (
        <Container key={product._id} id={product._id}>
          <Div>
            <Link href='/product/[slug]' as={`/product/${product.slug}`}>
              <a>
                <DivImage
                  key={product._id}
                  backgroundImage={product.media[0].url}
                />
              </a>
            </Link>
          </Div>
          <ProductName>{product.productName}</ProductName>
          <DivButtons>
            <div>
              <Link
                href='/admin/edit/product/[slug]'
                as={`/admin/edit/product/${product.slug}`}
              >
                <Edit>
                  <FaEdit />
                </Edit>
              </Link>
            </div>
            <div>
              <Delete
                onClick={(e) => {
                  handleSelectProduct(e);
                }}
              >
                <FaTrashAlt />
              </Delete>
            </div>
          </DivButtons>
        </Container>
      ))}
    </>
  );
};

export default ProductsList;

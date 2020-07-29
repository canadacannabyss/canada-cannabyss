import React from 'react';
import {
  Container,
  ProductImage,
  ProductName,
} from '../../../../../../styles/Components/UI/Lists/Admin/Add/Coupon/ProductsList';

const ProductsList = (props) => {
  const { products, handleGetElement } = props;

  const handleSelectProduct = (e) => {
    const getter = handleGetElement;
    getter(e.currentTarget);
  };

  return (
    <>
      {products.map((product) => (
        <Container
          key={product._id}
          id={product._id}
          onClick={handleSelectProduct}
        >
          <ProductImage src={product.media[0].url} />
          <ProductName>{product.productName}</ProductName>
        </Container>
      ))}
    </>
  );
};

export default ProductsList;

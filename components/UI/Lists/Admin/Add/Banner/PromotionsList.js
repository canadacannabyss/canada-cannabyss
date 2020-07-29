import React from 'react';
import {
  Container,
  ProductImage,
  ProductName,
} from '../../../../../../styles/Components/UI/Lists/Admin/Promotions/Banner/Banner';

const ProductsList = (props) => {
  const { promotions, handleGetElement } = props;

  const handleSelectProduct = (e) => {
    const getter = handleGetElement;
    getter(e.currentTarget);
  };

  return (
    <>
      {promotions.map((promotion) => (
        <Container
          key={promotion._id}
          id={promotion._id}
          onClick={handleSelectProduct}
        >
          <ProductImage src={promotion.media.url} />
          <ProductName>{promotion.promotionName}</ProductName>
        </Container>
      ))}
    </>
  );
};

export default ProductsList;

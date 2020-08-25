import React from 'react';
import _ from 'lodash';
import {
  Container,
  Delete,
  Div,
  DivButtons,
  DivGrid,
  DivImage,
  Edit,
  ProductImage,
  ProductName,
} from '../../../../../../styles/Components/UI/Lists/Admin/Add/Coupon/BundlesList';

const BundlesList = (props) => {
  const { bundles, handleGetElement } = props;

  const handleSelectProduct = (e) => {
    const getter = handleGetElement;
    getter(e.currentTarget);
  };

  return (
    <>
      {!_.isEmpty(bundles) && (
        <>
          {bundles.map((bundle) => (
            <Container
              key={bundle._id}
              id={bundle._id}
              onClick={handleSelectProduct}
            >
              <Div>
                {bundle.products.length > 0 && (
                  <DivImage
                    key={bundle._id}
                    backgroundImage={bundle.products[0].media[0].url}
                  />
                )}
              </Div>
              <ProductName>{bundle.bundleName}</ProductName>
            </Container>
          ))}
        </>
      )}
    </>
  );
};

export default BundlesList;

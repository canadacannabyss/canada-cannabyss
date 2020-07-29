import React from 'react';

import { Div } from '../../../../styles/Components/UI/Lists/Product/FeaturesList';

const FeaturesList = (props) => {
  const { features } = props;
  return (
    <>
      {features.map((feature) => (
        <Div key={key}>{feature}</Div>
      ))}
    </>
  );
};

export default FeaturesList;

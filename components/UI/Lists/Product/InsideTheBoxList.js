import React from 'react';

import { Div } from '../../../../styles/Components/UI/Lists/Product/FeaturesList';

const InsideTheBoxList = (props) => {
  const { insideTheBox } = props;
  return (
    <>
      {insideTheBox.map((inside, key) => (
        <Div key={key}>{inside}</Div>
      ))}
    </>
  );
};

export default InsideTheBoxList;

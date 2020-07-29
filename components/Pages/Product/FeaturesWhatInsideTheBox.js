import _ from 'lodash';
import React from 'react';
import {
  Container,
  Features,
  FeaturesDiv,
  FeaturesInsideTheBoxH3,
  InsideTheBox,
  InsideTheBoxDiv,
} from '../../../styles/Pages/Product/FeaturesWhatInsideTheBox';

const FeaturesWhatInsideTheBox = (props) => {
  const { features, insideTheBox } = props;
  return (
    <Container>
      <FeaturesDiv>
        <FeaturesInsideTheBoxH3>Features</FeaturesInsideTheBoxH3>
        {!_.isEmpty(features) && (
          <Features dangerouslySetInnerHTML={{ __html: features }} />
        )}
      </FeaturesDiv>
      <InsideTheBoxDiv>
        <FeaturesInsideTheBoxH3>What's inside the box</FeaturesInsideTheBoxH3>
        {!_.isEmpty(insideTheBox) && (
          <InsideTheBox dangerouslySetInnerHTML={{ __html: insideTheBox }} />
        )}
      </InsideTheBoxDiv>
    </Container>
  );
};

export default FeaturesWhatInsideTheBox;

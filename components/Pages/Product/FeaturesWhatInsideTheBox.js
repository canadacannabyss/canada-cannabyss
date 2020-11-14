import _ from 'lodash';
import React from 'react';
import sanitizeHtml from 'sanitize-html';
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
          <Features dangerouslySetInnerHTML={{ __html: sanitizeHtml(features) }} />
        )}
      </FeaturesDiv>
      <InsideTheBoxDiv>
        <FeaturesInsideTheBoxH3>What's inside the box</FeaturesInsideTheBoxH3>
        {!_.isEmpty(insideTheBox) && (
          <InsideTheBox dangerouslySetInnerHTML={{ __html: sanitizeHtml(insideTheBox) }} />
        )}
      </InsideTheBoxDiv>
    </Container>
  );
};

export default FeaturesWhatInsideTheBox;

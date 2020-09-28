import React from 'react';
import { FaPlus } from 'react-icons/fa';

import {
  Background,
  Wrapper,
  HeadingCloseButtonDiv,
  CloseBtn,
  Heading,
  BeforeStatement,
  Ol,
} from '../../../../styles/Components/UI/Modal/ETransferTutorial/ETransferTutorial';

const ETransferTutorial = (props) => {
  const { handleToggleETransfer, transferAmount } = props;

  return (
    <Background
      onClick={() => {
        handleToggleETransfer();
      }}
    >
      <Wrapper>
        <HeadingCloseButtonDiv>
          <Heading>e-Transfer</Heading>
          <CloseBtn>
            <FaPlus />
          </CloseBtn>
        </HeadingCloseButtonDiv>
        <BeforeStatement>
          Before you proceed make sure to follow the following steps:
        </BeforeStatement>
        <Ol>
          <li>
            Send <span>C$ {transferAmount}</span> to{' '}
            <span>payments@canadacannabyss.com</span> using your online banking
            app.
          </li>
          <li>Screenshot or download your e-Transfer receipt.</li>
          <li>
            Append the e-Transfer receipt to the current order before finishing
            the checkout process.
          </li>
          <li>Accept our terms of use agreement</li>
          <li>
            Press the <span>'Finish Checkout'</span> button to complete the
            checkout process and finally place your order
          </li>
        </Ol>
      </Wrapper>
    </Background>
  );
};

export default ETransferTutorial;

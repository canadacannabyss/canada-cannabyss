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
  const {
    handleToggleCryptocurrency,
    transferCryptocurrencyAmount,
    transferCryptocurrencySymbol,
    cryptocurrencyName,
    cryptocurrencyCompanyAddress,
    cryptocurrencyCustomerAddress
  } = props;

  return (
    <Background
      onClick={() => {
        handleToggleCryptocurrency();
      }}
    >
      <Wrapper>
        <HeadingCloseButtonDiv>
          <Heading>Cryptocurrency</Heading>
          <CloseBtn>
            <FaPlus />
          </CloseBtn>
        </HeadingCloseButtonDiv>
        <BeforeStatement>
          Before you proceed make sure to follow the following steps:
        </BeforeStatement>
        <Ol>
          <li>
            Send <span>{transferCryptocurrencyAmount} {transferCryptocurrencySymbol}</span> to the <span>{cryptocurrencyName}</span> wallet {' '}
    <span>{cryptocurrencyCompanyAddress}</span> from your <span>{cryptocurrencyName}</span> wallet <span>{cryptocurrencyCustomerAddress}</span>.
          </li>
          <li>Screenshot or download your <span>{cryptocurrencyName}</span> transfer receipt.</li>
          <li>
            Append the <span>{cryptocurrencyName}</span> transfer receipt to the current order before finishing
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

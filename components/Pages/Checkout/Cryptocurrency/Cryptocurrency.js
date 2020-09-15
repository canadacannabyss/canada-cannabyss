import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaEthereum } from 'react-icons/fa';
import {
  CryptocurrencyFlex,
  CryptoAddress,
  ChoosePaymentBtn,
  ChoosePaymentBtnDisabled,
} from '../../../../styles/Pages/Checkout/PaymentMethod';

const Cryptocurrency = (props) => {
  const {
    cryptocurrencyWalletAddress,
    onChangeCryptocurrencyWalletAddress,
    handleChooseCryptocurrency,
  } = props;

  const [ethereumSelected, setEthereumSelected] = useState(false);
  const [currentEthereumPrice, setCurrentEthereumPrice] = useState('');

  const getCurrentEthereumPrice = async () => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/cryptocurrencies/get/eth/price`,
      {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();
    console.log('data eth:', data);
    setCurrentEthereumPrice(data);
  };

  const removeAllSelectedClass = () => {
    const cryptos = document.querySelectorAll('.crypto');
    cryptos.forEach((crypto) => {
      crypto.classList.remove('selected');
    });
  };

  const onClickSelected = (e) => {
    removeAllSelectedClass();
    e.currentTarget.classList.add('selected');
    setEthereumSelected(true);
  };

  useEffect(() => {
    getCurrentEthereumPrice();
  }, []);

  return (
    <>
      <CryptocurrencyFlex>
        <div
          className='crypto'
          onClick={(e) => {
            onClickSelected(e);
          }}
        >
          <FaEthereum />
          <p>Ethereum</p>
        </div>
      </CryptocurrencyFlex>
      {ethereumSelected && (
        <CryptoAddress>
          <p>
            Enter your ethereum wallet address to charge the corresponding
            amount in ETH.
          </p>
          <p>
            The transfer will only be finalize once the checkout process is
            completed.
          </p>
          <p className='price'>
            <strong>Current ETH Price:</strong> {currentEthereumPrice}
          </p>
          <h4>Ethereum Wallet Address</h4>
          <input type='text' onChange={onChangeCryptocurrencyWalletAddress} />

          {cryptocurrencyWalletAddress.length > 0 ? (
            <ChoosePaymentBtn
              onClick={() => {
                handleChooseCryptocurrency();
              }}
            >
              Choose ETH
            </ChoosePaymentBtn>
          ) : (
            <ChoosePaymentBtnDisabled disabled>
              Choose ETH
            </ChoosePaymentBtnDisabled>
          )}
        </CryptoAddress>
      )}
    </>
  );
};

Cryptocurrency.propTypes = {
  onChangeCryptocurrencyWalletAddress: PropTypes.func.isRequired,
  handleChooseCryptocurrency: PropTypes.func.isRequired,
};

export default Cryptocurrency;

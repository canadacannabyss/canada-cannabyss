import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaEthereum, FaBitcoin } from 'react-icons/fa';
import {
  CryptocurrencyFlex,
  CryptoAddress,
  ChoosePaymentBtn,
  ChoosePaymentBtnDisabled,
} from '../../../../styles/Pages/Checkout/PaymentMethod';

const Cryptocurrency = (props) => {
  const {
    cryptocurrencies,
    handleChooseCryptocurrency,
    handleSetCryptoLogoSelected,
    cryptoLogoSelected,
    handleSetCryptoSymbolSelected,
    cryptoSymbolSelected,
    handleSetCryptoNameSelected,
    cryptoNameSelected,
    handleonChangeCryptoWalletSelectedCustomer,
    selectedCryptocurrencyWalletCustomer,
    handleonChangeCryptoWalletSelectedCompany,
  } = props;

  const [cryptoSeleted, setCryptoSelected] = useState('');
  const [currentCryptoPrice, setCurrentCryptoPrice] = useState('');

  const getCurrentCryptoPrice = async () => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/cryptocurrencies/get/price?symbol=${cryptoSymbolSelected}`,
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
    setCurrentCryptoPrice(data);
  };

  const removeAllSelectedClass = () => {
    const cryptos = document.querySelectorAll('.crypto');
    cryptos.forEach((crypto) => {
      crypto.classList.remove('selected');
    });
  };

  const onClickCryptoSelected = (e, id) => {
    removeAllSelectedClass();
    e.currentTarget.classList.add('selected');
    const result = cryptocurrencies.filter((obj) => {
      return obj._id === id;
    });
    console.log('result:', result);
    setCryptoSelected(true);
    handleSetCryptoLogoSelected(result[0].cryptocurrency.logo);
    handleSetCryptoSymbolSelected(result[0].cryptocurrency.symbol);
    handleSetCryptoNameSelected(result[0].cryptocurrency.name);
    handleonChangeCryptoWalletSelectedCompany(result[0].cryptocurrency.address);
  };

  useEffect(() => {
    if (cryptoSeleted) {
      getCurrentCryptoPrice();
    }
  }, [cryptoSeleted, cryptoSymbolSelected]);

  return (
    <>
      <CryptocurrencyFlex>
        {cryptocurrencies.map((cryptocurrency) => (
          <div
            className='crypto'
            onClick={(e) => {
              onClickCryptoSelected(e, cryptocurrency._id);
            }}
          >
            <img src={cryptocurrency.cryptocurrency.logo} />
            <p>{cryptocurrency.cryptocurrency.name}</p>
          </div>
        ))}
      </CryptocurrencyFlex>
      {cryptoSeleted && (
        <CryptoAddress>
          <p>
            Enter your <strong>{cryptoNameSelected}</strong> wallet address to
            charge the corresponding amount in{' '}
            <strong>{cryptoSymbolSelected}</strong>.
          </p>
          <p className='price'>
            <strong>Current {cryptoSymbolSelected} Price:</strong> C${' '}
            {currentCryptoPrice}
          </p>
          <h4>{cryptoNameSelected} Wallet Address</h4>
          <input
            type='text'
            onChange={(e) => {
              handleonChangeCryptoWalletSelectedCustomer(e);
            }}
          />

          {selectedCryptocurrencyWalletCustomer.length > 0 ? (
            <ChoosePaymentBtn
              onClick={() => {
                handleChooseCryptocurrency(
                  cryptoLogoSelected,
                  cryptoSymbolSelected,
                  cryptoNameSelected,
                  selectedCryptocurrencyWalletCustomer
                );
              }}
            >
              Choose {cryptoNameSelected}
            </ChoosePaymentBtn>
          ) : (
            <ChoosePaymentBtnDisabled disabled>
              Choose {cryptoNameSelected}
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

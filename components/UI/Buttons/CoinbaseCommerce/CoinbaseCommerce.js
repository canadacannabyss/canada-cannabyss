import React from "react";
import CoinbaseCommerceButton from "react-coinbase-commerce";
import "react-coinbase-commerce/dist/coinbase-commerce-button.css";

const CoinbaseCommerce = () => {
  return <CoinbaseCommerceButton checkoutId={"My checkout ID"} />;
};

export default CoinbaseCommerce;

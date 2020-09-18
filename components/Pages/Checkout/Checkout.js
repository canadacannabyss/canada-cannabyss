import _ from 'lodash';
import Router from 'next/router';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import {
  FaPlus,
  FaSpinner,
  FaCreditCard,
  FaStream,
  FaFile,
} from 'react-icons/fa';
import { connect, useDispatch } from 'react-redux';
import {
  createBillingCheckout,
  setBillingAddress,
} from '../../../store/actions/billing/billing';
import {
  createShippingCheckout,
  setShippingAddress,
} from '../../../store/actions/shipping/shipping';
import {
  updateBillingOrder,
  updateShippingOrder,
} from '../../../store/actions/order/order';
import { getBillingAddresses } from '../../../store/actions/billing/billingList';
import { getShippingAddresses } from '../../../store/actions/shipping/shippingList';
import {
  CheckoutProcessStep,
  CheckoutFlex,
  AddressesListWrapper,
  Button,
  CheckoutDiv,
  Div,
  Form,
  Input,
  Label,
  Loading,
  Select,
  ShippingBillingClose,
  BillingShippingButton,
  ShippingBillingH2,
  ShippingBillingH2CloseDiv,
  Submit,
  SubmitDisabled,
  Warning,
  Wrapper,
} from '../../../styles/Pages/Checkout/Checkout';
import ListLocation from '../../../utils/ListLocation';
import Layout from '../../Layout';

const mapStateToProps = (state) => {
  const { user, billing, billingList, shipping, shippingList, order } = state;
  return {
    user,
    billing,
    billingList,
    shipping,
    shippingList,
    order,
  };
};

const Checkout = (props) => {
  const { user, billing, billingList, shipping, shippingList, order } = props;
  const dispatch = useDispatch();

  const [shippingId, setShippingId] = useState('');
  const [shippingFirstName, setShippingFirstName] = useState('');
  const [shippingLastName, setShippingLastName] = useState('');
  const [shippingCountry, setShippingCountry] = useState('');
  const [
    shippingProvincesStatesList,
    setShippingProvincesStatesList,
  ] = useState([]);
  const [shippingProvinceState, setShippingProvinceState] = useState('');
  const [shippingCitiesList, setShippingCitiesList] = useState([]);
  const [shippingCity, setShippingCity] = useState('');
  const [shippingAddressLine1, setShippingAddressLine1] = useState('');
  const [shippingAddressLine2, setShippingAddressLine2] = useState('');
  const [shippingPostalCode, setShippingPostalCode] = useState('');

  const [billingId, setBillingId] = useState('');
  const [billingFirstName, setBillingFirstName] = useState('');
  const [billingLastName, setBillingLastName] = useState('');
  const [billingCountry, setBillingCountry] = useState('');
  const [billingProvincesStatesList, setBillingProvincesStatesList] = useState(
    []
  );
  const [billingProvinceState, setBillingProvinceState] = useState('');
  const [billingCitiesList, setBillingCitiesList] = useState([]);
  const [billingCity, setBillingCity] = useState('');
  const [billingAddressLine1, setBillingAddressLine1] = useState('');
  const [billingAddressLine2, setBillingAddressLine2] = useState('');
  const [billingPostalCode, setBillingPostalCode] = useState('');

  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [warning, setWarning] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [shippingNewAddress, setShippingNewAddress] = useState(false);
  const [billingNewAddress, setBillingNewAddress] = useState(false);

  const listLocation = new ListLocation();

  const isAllFieldsFilled = () => {
    if (
      shippingFirstName.length > 0 &&
      shippingLastName.length > 0 &&
      shippingCountry.length > 0 &&
      shippingCountry !== '-' &&
      shippingProvinceState.length > 0 &&
      shippingProvinceState !== '-' &&
      shippingCity.length > 0 &&
      shippingCity !== '-' &&
      shippingAddressLine1.length > 0 &&
      shippingPostalCode.length > 0 &&
      billingFirstName.length > 0 &&
      billingLastName.length > 0 &&
      billingCountry.length > 0 &&
      billingCountry !== '-' &&
      billingProvinceState.length > 0 &&
      billingProvinceState !== '-' &&
      billingCity.length > 0 &&
      billingCity !== '-' &&
      billingAddressLine1.length > 0 &&
      billingPostalCode.length > 0
    ) {
      setAllFieldsFilled(true);
      return true;
    } else {
      setAllFieldsFilled(false);
      return false;
    }
  };

  useEffect(() => {
    if (shippingList.fetched && shippingList.data.length === 0) {
      setShippingNewAddress(true);
    } else {
      setShippingNewAddress(false);
    }
    if (billingList.fetched && shippingList.data.length === 0) {
      setBillingNewAddress(true);
    } else {
      setBillingNewAddress(false);
    }
  }, [shippingList, billingList]);

  useEffect(() => {
    if (
      billing.fetched &&
      !_.isEmpty(billing.data) &&
      shipping.fetched &&
      !_.isEmpty(shipping.data)
    ) {
      dispatch(updateShippingOrder(shipping.data));
      dispatch(updateBillingOrder(billing.data));
      setSubmitted(true);
    }
  }, [billing, shipping]);

  useEffect(() => {
    if (!_.isEmpty(user.data) && user.fetched) {
      dispatch(getBillingAddresses(user.data._id));
      dispatch(getShippingAddresses(user.data._id));
    }
  }, [user]);

  useEffect(() => {
    if (submitted) {
      Router.push('/checkout/payment-method');
    }
  }, [submitted]);

  useEffect(() => {
    isAllFieldsFilled();
  }, [
    shippingFirstName,
    shippingLastName,
    shippingCountry,
    shippingProvinceState,
    shippingProvincesStatesList,
    shippingCity,
    shippingCitiesList,
    shippingAddressLine1,
    shippingAddressLine2,
    shippingPostalCode,
    billingFirstName,
    billingLastName,
    billingCountry,
    billingProvinceState,
    billingProvincesStatesList,
    billingCity,
    billingCitiesList,
    billingAddressLine1,
    billingAddressLine2,
    billingPostalCode,
  ]);

  const handleNewShippingAddress = () => {
    setShippingNewAddress(!shippingNewAddress);
  };

  const handleNewBillingAddress = () => {
    setBillingNewAddress(!billingNewAddress);
  };

  const handleShippingCountrySelect = async (e) => {
    if (e.target.value === 'CA') {
      setShippingCountry(e.target.value);
      setShippingProvincesStatesList(
        await listLocation.mapThroughtCanadaProvinces()
      );
    } else if (e.target.value === 'US') {
      setShippingCountry(e.target.value);
      // mapThroughtUnitedStateStates();
    } else if (e.target.value === '-') {
      setShippingCountry(e.target.value);
    }
  };

  const handleShippingProvinceStateSelect = async (e) => {
    setShippingProvinceState(e.target.value);
    if (e.target.value !== '-') {
      setShippingCitiesList(
        await listLocation.mapThroughtCanadaCities(e.target.value)
      );
    }
  };

  const handleShippingCitySelect = (e) => {
    setShippingCity(e.target.value);
  };

  const handleShippingFirstName = (e) => {
    setShippingFirstName(e.target.value);
  };

  const handleShippingLastName = (e) => {
    setShippingLastName(e.target.value);
  };

  const handleShippingAddressLine1 = (e) => {
    setShippingAddressLine1(e.target.value);
  };

  const handleShippingAddressLine2 = (e) => {
    setShippingAddressLine2(e.target.value);
  };

  const handleShippingPostalCode = (e) => {
    setShippingPostalCode(e.target.value);
  };

  const handleBillingCountrySelect = async (e) => {
    if (e.target.value === 'CA') {
      setBillingCountry(e.target.value);
      setBillingProvincesStatesList(
        await listLocation.mapThroughtCanadaProvinces()
      );
    } else if (e.target.value === 'US') {
      setBillingCountry(e.target.value);
      // mapThroughtUnitedStateStates();
    } else if (e.target.value === '-') {
      setBillingCountry(e.target.value);
    }
  };

  const handleBillingProvinceStateSelect = async (e) => {
    setBillingProvinceState(e.target.value);
    if (e.target.value !== '-') {
      setBillingCitiesList(
        await listLocation.mapThroughtCanadaCities(e.target.value)
      );
    }
  };

  const handleBillingCitySelect = (e) => {
    setBillingCity(e.target.value);
  };

  const handleBillingFirstName = (e) => {
    setBillingFirstName(e.target.value);
  };

  const handleBillingLastName = (e) => {
    setBillingLastName(e.target.value);
  };

  const handleBillingAddressLine1 = (e) => {
    setBillingAddressLine1(e.target.value);
  };

  const handleBillingAddressLine2 = (e) => {
    setBillingAddressLine2(e.target.value);
  };

  const handleBillingPostalCode = (e) => {
    setBillingPostalCode(e.target.value);
  };

  const hanldeEmptyAllFieldsShipping = () => {
    setShippingFirstName('');
    setShippingLastName('');
    setShippingCountry('');
    setShippingProvinceState('');
    setShippingCity('');
    setShippingAddressLine1('');
    setShippingAddressLine2('');
    setShippingPostalCode('');
  };

  const handleEmptyAllFieldsBilling = () => {
    setBillingFirstName('');
    setBillingLastName('');
    setBillingCountry('');
    setBillingProvinceState('');
    setBillingCity('');
    setBillingAddressLine1('');
    setBillingAddressLine2('');
    setBillingPostalCode('');
  };

  const getStringfiedAddress = (address) => {
    return `${address.name.first} ${address.name.last}, ${
      address.addressLine1
    }, ${address.addressLine2.length > 0 && `${address.addressLine2}`}, ${
      address.city
    }, ${address.provinceState}, ${address.country}, ${address.postalCode}`;
  };

  const handleSelectExistingShippingAddress = (id) => {
    const selectedAddress = shippingList.data.filter((x) => x._id === id);
    setShippingId(selectedAddress[0]._id);
    setShippingFirstName(selectedAddress[0].name.first);
    setShippingLastName(selectedAddress[0].name.last);
    setShippingCountry(selectedAddress[0].country);
    setShippingProvinceState(selectedAddress[0].provinceState);
    setShippingCity(selectedAddress[0].city);
    setShippingAddressLine1(selectedAddress[0].addressLine1);
    setShippingAddressLine2(selectedAddress[0].addressLine2);
    setShippingPostalCode(selectedAddress[0].postalCode);
  };

  const handleSelectExistingBillingAddress = (id) => {
    const selectedAddress = billingList.data.filter((x) => x._id === id);
    setBillingId(selectedAddress[0]._id);
    setBillingFirstName(selectedAddress[0].name.first);
    setBillingLastName(selectedAddress[0].name.last);
    setBillingCountry(selectedAddress[0].country);
    setBillingProvinceState(selectedAddress[0].provinceState);
    setBillingCity(selectedAddress[0].city);
    setBillingAddressLine1(selectedAddress[0].addressLine1);
    setBillingAddressLine2(selectedAddress[0].addressLine2);
    setBillingPostalCode(selectedAddress[0].postalCode);
  };

  const selectShippingAddressButton = (e) => {
    const shippingBtns = document.querySelectorAll('.existingShippingButton');
    shippingBtns.forEach((shippingBtn) => {
      shippingBtn.classList.remove('selected');
    });
    e.target.classList.add('selected');
  };

  const selectBillingAddressButton = (e) => {
    const billingBtns = document.querySelectorAll('.existingBillingButton');
    console.log(billingBtns);
    billingBtns.forEach((billingBtn) => {
      billingBtn.classList.remove('selected');
    });
    e.target.classList.add('selected');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isAllFieldsFilled()) {
      setWarning(false);
      const shippingAddressInfo = {
        _id: shippingId,
        user: user.data._id,
        name: {
          first: shippingFirstName.toUpperCase(),
          last: shippingLastName.toUpperCase(),
        },
        country: shippingCountry,
        provinceState: shippingProvinceState,
        city: shippingCity,
        addressLine1: shippingAddressLine1.toUpperCase(),
        addressLine2: shippingAddressLine2.toUpperCase(),
        postalCode: shippingPostalCode.toUpperCase(),
      };
      const billingAddressInfo = {
        _id: billingId,
        user: user.data._id,
        name: {
          first: billingFirstName.toUpperCase(),
          last: billingLastName.toUpperCase(),
        },
        country: billingCountry,
        provinceState: billingProvinceState,
        city: billingCity,
        addressLine1: billingAddressLine1.toUpperCase(),
        addressLine2: billingAddressLine2.toUpperCase(),
        postalCode: billingPostalCode.toUpperCase(),
      };

      if (shippingNewAddress) {
        dispatch(
          createShippingCheckout(
            order.data._id,
            shippingAddressInfo,
            shippingAddressInfo._id
          )
        );
      } else {
        dispatch(setShippingAddress(order.data._id, shippingAddressInfo._id));
      }

      if (billingNewAddress) {
        dispatch(createBillingCheckout(order.data._id, billingAddressInfo));
      } else {
        dispatch(setBillingAddress(order.data._id, billingAddressInfo._id));
      }
      setSubmitted(true);
    } else {
      setWarning(true);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Address | Checkout - Canada Cannabysss</title>
      </Head>
      <Wrapper>
        <CheckoutProcessStep>
          <CheckoutFlex>
            <div className='div'>
              <div className='current'>
                <FaStream />
              </div>
              <p className='letter'>Billing | Shipping</p>
            </div>
            <div className='div'>
              <div className='step'>
                <FaCreditCard />
              </div>
              <p className='letter'>Payment Method</p>
            </div>
            <div className='div'>
              <div className='step'>
                <FaFile />
              </div>
              <p className='letter'>Review Order</p>
            </div>
          </CheckoutFlex>
        </CheckoutProcessStep>
        <CheckoutDiv>
          <Div id='firstDiv'>
            {shippingList.loading ? (
              <>
                <Loading>
                  <FaSpinner />
                </Loading>
              </>
            ) : (
              <>
                {shippingList.fetched &&
                !shippingNewAddress &&
                Array.isArray(shippingList.data) ? (
                  <AddressesListWrapper>
                    <ShippingBillingH2>Shipping Addresses</ShippingBillingH2>
                    <br />
                    {shippingList.data.map((address) => (
                      <BillingShippingButton
                        key={address._id}
                        className='existingShippingButton'
                        onClick={(e) => {
                          handleSelectExistingShippingAddress(address._id);
                          selectShippingAddressButton(e);
                        }}
                      >
                        {getStringfiedAddress(address)}
                      </BillingShippingButton>
                    ))}
                    <Button
                      onClick={() => {
                        handleNewShippingAddress();
                        hanldeEmptyAllFieldsShipping();
                      }}
                    >
                      New Shipping
                    </Button>
                  </AddressesListWrapper>
                ) : (
                  <>
                    <Form autoComplete='off'>
                      <ShippingBillingH2CloseDiv>
                        <ShippingBillingH2>Shipping Address</ShippingBillingH2>

                        <ShippingBillingClose
                          onClick={() => {
                            handleNewShippingAddress();
                            hanldeEmptyAllFieldsShipping();
                          }}
                        >
                          <FaPlus />
                        </ShippingBillingClose>
                      </ShippingBillingH2CloseDiv>
                      <br />
                      <Label htmlFor='shipping_first_name'>First Name</Label>
                      <br />
                      <Input
                        type='text'
                        id='shipping_first_name'
                        autoComplete='off'
                        value={shippingFirstName}
                        onChange={handleShippingFirstName}
                      />
                      <br />
                      <Label htmlFor='shipping_last_name'>Last Name</Label>
                      <br />
                      <Input
                        type='text'
                        id='shipping_last_name'
                        autoComplete='off'
                        value={shippingLastName}
                        onChange={handleShippingLastName}
                      />
                      <br />
                      <Label htmlFor='shipping_country'>Country</Label>
                      <br />
                      <Select
                        onChange={handleShippingCountrySelect}
                        value={shippingCountry}
                        id='shipping_country'
                      >
                        <option value='-'>CHOOSE COUNTRY</option>
                        <option value='CA'>CANADA</option>
                        {/* <option value="US">UNITED STATES</option> */}
                      </Select>
                      <br />
                      <Label htmlFor='shipping_province_state'>
                        Province/State
                      </Label>
                      <br />
                      <Select
                        onChange={handleShippingProvinceStateSelect}
                        value={shippingProvinceState}
                        id='shipping_province_state'
                      >
                        <option value='-'>PROVINCE/STATE</option>
                        {shippingProvincesStatesList.map((province) => (
                          <option
                            key={province.abbr}
                            value={province.abbr}
                            key={province.abbr}
                          >
                            {province.name}
                          </option>
                        ))}
                      </Select>
                      <br />
                      <Label htmlFor='shipping_city'>City</Label>
                      <br />
                      <Select
                        onChange={handleShippingCitySelect}
                        value={shippingCity}
                        id='shipping_city'
                      >
                        <option value='-'>CITY</option>
                        {shippingCitiesList.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </Select>
                      <br />
                      <Label htmlFor='shipping_address_line_1'>
                        Address Line 1
                      </Label>
                      <br />
                      <Input
                        type='text'
                        id='shipping_address_line_1'
                        value={shippingAddressLine1}
                        onChange={handleShippingAddressLine1}
                      />
                      <br />
                      <Label htmlFor='shipping_address_line_2'>
                        Address Line 2
                      </Label>
                      <br />
                      <Input
                        type='text'
                        id='shipping_address_line_2'
                        value={shippingAddressLine2}
                        onChange={handleShippingAddressLine2}
                      />
                      <br />
                      <Label htmlFor='shipping_postal_code'>Postal Code</Label>
                      <br />
                      <Input
                        type='text'
                        id='shipping_postal_code'
                        value={shippingPostalCode}
                        onChange={handleShippingPostalCode}
                      />
                      <br />
                    </Form>
                  </>
                )}
              </>
            )}
          </Div>
          <Div>
            {billingList.loading ? (
              <>
                <Loading>
                  <FaSpinner />
                </Loading>
              </>
            ) : (
              <>
                {billingList.fetched &&
                !billingNewAddress &&
                Array.isArray(billingList.data) ? (
                  <AddressesListWrapper>
                    <ShippingBillingH2>Billing Addresses</ShippingBillingH2>
                    <br />
                    {billingList.data.map((address) => (
                      <BillingShippingButton
                        key={address._id}
                        className='existingBillingButton'
                        id={address._id}
                        onClick={(e) => {
                          handleSelectExistingBillingAddress(address._id);
                          selectBillingAddressButton(e);
                        }}
                      >
                        {getStringfiedAddress(address)}
                      </BillingShippingButton>
                    ))}
                    <Button
                      onClick={() => {
                        handleNewBillingAddress();
                        handleEmptyAllFieldsBilling();
                      }}
                    >
                      New Billing
                    </Button>
                  </AddressesListWrapper>
                ) : (
                  <>
                    <Form onSubmit={onSubmit}>
                      <ShippingBillingH2CloseDiv>
                        <ShippingBillingH2>Billing Address</ShippingBillingH2>

                        <ShippingBillingClose
                          onClick={() => {
                            handleNewBillingAddress();
                            handleEmptyAllFieldsBilling();
                          }}
                        >
                          <FaPlus />
                        </ShippingBillingClose>
                      </ShippingBillingH2CloseDiv>
                      <br />
                      <Label htmlFor='billing_first_name'>First Name</Label>
                      <br />
                      <Input
                        type='text'
                        id='billing_first_name'
                        value={billingFirstName}
                        onChange={handleBillingFirstName}
                      />
                      <br />
                      <Label htmlFor='billing_last_name'>Last Name</Label>
                      <br />
                      <Input
                        type='text'
                        id='billing_last_name'
                        value={billingLastName}
                        onChange={handleBillingLastName}
                      />
                      <br />
                      <Label htmlFor='billing_country'>Country</Label>
                      <br />
                      <Select
                        onChange={handleBillingCountrySelect}
                        value={billingCountry}
                        id='billing_country'
                      >
                        <option value='-'>CHOOSE COUNTRY</option>
                        <option value='CA'>CANADA</option>
                        {/* <option value="US">UNITED STATES</option> */}
                      </Select>
                      <br />
                      <Label htmlFor='billing_province_state'>
                        Province/State
                      </Label>
                      <br />
                      <Select
                        onChange={handleBillingProvinceStateSelect}
                        value={billingProvinceState}
                        id='billing_province_state'
                      >
                        <option value='-'>PROVINCE/STATE</option>
                        {billingProvincesStatesList.map((province) => (
                          <option key={province.abbr} value={province.abbr}>
                            {province.name}
                          </option>
                        ))}
                      </Select>
                      <br />
                      <Label htmlFor='billing_city'>City</Label>
                      <br />
                      <Select
                        onChange={handleBillingCitySelect}
                        value={billingCity}
                        id='billing_city'
                      >
                        <option value='-'>CITY</option>
                        {billingCitiesList.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </Select>
                      <br />
                      <Label htmlFor='billing_address_line_1'>
                        Address Line 1
                      </Label>
                      <br />
                      <Input
                        type='text'
                        id='billing_address_line_1'
                        value={billingAddressLine1}
                        onChange={handleBillingAddressLine1}
                      />
                      <br />
                      <Label htmlFor='billing_address_line_2'>
                        Address Line 2
                      </Label>
                      <br />
                      <Input
                        type='text'
                        id='billing_address_line_2'
                        value={billingAddressLine2}
                        onChange={handleBillingAddressLine2}
                      />
                      <br />
                      <Label htmlFor='billing_postal_code'>Postal Code</Label>
                      <br />
                      <Input
                        type='text'
                        id='billing_postal_code'
                        value={billingPostalCode}
                        onChange={handleBillingPostalCode}
                      />
                    </Form>
                  </>
                )}
              </>
            )}
          </Div>
        </CheckoutDiv>
        {warning && <Warning>Fill all required fields</Warning>}
        <br />
        {allFieldsFilled ? (
          <Submit type='submit' onClick={onSubmit}>
            Payment Method
          </Submit>
        ) : (
          <SubmitDisabled type='button'>Payment Method</SubmitDisabled>
        )}
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(Checkout);

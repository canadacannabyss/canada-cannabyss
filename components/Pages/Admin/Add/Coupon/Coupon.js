import React, { useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Head from 'next/head';
import Router from 'next/router';
import { FaTag } from 'react-icons/fa';
import {
  Button,
  CouponInfoDiv,
  DiscountDiv,
  DiscountOnTagP,
  DiscountOnTagPDiv,
  Grid,
  Input,
  Label,
  Select,
  SelectDiv,
  TagDiv,
  TagWrapper,
  ProductListDiv,
  CouponDescription,
  Warning,
  Wrapper,
} from '../../../../../styles/Pages/Admin/Add/Coupon';
import Location from '../../../../../utils/ListLocation';
import Layout from '../../../../AdminLayout';
import ProductsList from '../../../../UI/Lists/Admin/Add/Coupon/ProductsList';
import BundlesList from '../../../../UI/Lists/Admin/Add/Coupon/BundlesList';
import FeaturedCheckbox from '../../../../UI/Buttons/Checkbox/Featured';
import FreeShippingCheckbox from '../../../../UI/Buttons/Checkbox/FreeShippingCheckbox';

const Coupon = () => {
  const [couponCode, setCouponCode] = useState('');
  const [discountAmount, setdiscountAmount] = useState('');
  const [discountType, setDiscountType] = useState('percent');
  const [applyCouponOn, setApplyCouponOn] = useState('items');
  const [availableAt, setAvailableAt] = useState('canada');
  // const [provincesList, setProvincesList] = useState([]);
  const [itemsOnCoupon, setItemsOnCoupon] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [bundlesList, setBundlesList] = useState([]);
  const [description, setDescription] = useState('');
  const [featured, setFeatured] = useState(false);
  const [freeShipping, setFreeShipping] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [warning, setWarning] = useState(false);

  const locationList = new Location();

  // useEffect(() => {
  //   const provinces = locationList.mapThroughtCanadaProvinces();
  //   setProvincesList(provinces);
  // }, []);

  const fetchAllProducts = async () => {
    const res = await fetch(`${process.env.MAIN_API_ENDPOINT}/products/`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    setProductsList(data);
  };

  const fetchAllBunlde = async () => {
    const res = await fetch(`${process.env.MAIN_API_ENDPOINT}/bundles/`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    setProductsList(data);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchValidateCouponName = async () => {
    const res = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/coupons/validate/couponName/${couponCode}`,
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    if (applyCouponOn === 'items') {
      setProductsList([]);
      setBundlesList([]);
      setItemsOnCoupon([]);
      const fetchAllProductsBundlesCategoriesOnChange = async () => {
        const resProducts = await fetch(
          `${process.env.MAIN_API_ENDPOINT}/products/`,
          {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        const resBundles = await fetch(
          `${process.env.MAIN_API_ENDPOINT}/bundles/`,
          {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        const dataProducts = await resProducts.json();
        const dataBundles = await resBundles.json();
        setProductsList(dataProducts);
        setBundlesList(dataBundles);
      };
      fetchAllProductsBundlesCategoriesOnChange();
    }
    if (applyCouponOn === 'products') {
      setProductsList([]);
      setBundlesList([]);
      setItemsOnCoupon([]);
      const fetchAllProductsOnChange = async () => {
        const res = await fetch(`${process.env.MAIN_API_ENDPOINT}/products/`, {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        setProductsList(data);
      };
      fetchAllProductsOnChange();
    }
    if (applyCouponOn === 'bundles') {
      setProductsList([]);
      setBundlesList([]);
      setItemsOnCoupon([]);
      const fetchAllBundlesOnChange = async () => {
        const res = await fetch(`${process.env.MAIN_API_ENDPOINT}/bundles/`, {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        setBundlesList(data);
      };
      fetchAllBundlesOnChange();
    }
    // if (applyCouponOn === 'categories') {
    //   setProductsList([]);
    // }
  }, [applyCouponOn]);

  const removeElementFromArray = (arr, element) => {
    const index = arr.indexOf(element);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  };

  const handleGetElement = (el) => {
    const element = el;
    if (!itemsOnCoupon.includes(element.id)) {
      setItemsOnCoupon((itemsOnCoupon) => itemsOnCoupon.concat(element.id));
      element.style.backgroundColor = '#f2f2f2';
      element.style.border = '1px solid #c8d231';
    } else {
      setItemsOnCoupon(removeElementFromArray(itemsOnCoupon, element.id));
      element.style.backgroundColor = '#fff';
      element.style.border = '1px solid #18840f';
    }
  };

  const handleCheckFeatured = () => {
    setFeatured(!featured);
  };

  const handleCheckFreeShipping = () => {
    setFreeShipping(!freeShipping);
  };

  const onChangeCounponCode = (e) => {
    setCouponCode(e.target.value);
  };

  const onChangeDiscountAmount = (e) => {
    setdiscountAmount(e.target.value);
  };

  const onChangeDiscountType = (e) => {
    setDiscountType(e.target.value);
  };

  const onChangeAvailableAt = (e) => {
    setAvailableAt(e.target.value);
  };

  const onChangeApplyOn = (e) => {
    setApplyCouponOn(e.target.value);
  };

  const handleCouponDescription = (e) => {
    setDescription(e.target.getContent());
  };

  const onChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const disabledSubmitButton = () => {
    if (
      quantity > 0 &&
      couponCode.length > 0 &&
      description.length > 0 &&
      discountAmount > 0 &&
      (discountType === 'percent' || discountType === 'cash') &&
      (applyCouponOn === 'items' ||
        applyCouponOn === 'products' ||
        applyCouponOn === 'bundles') &&
      availableAt === 'canada' &&
      itemsOnCoupon.length > 0 &&
      (featured || !featured) &&
      (freeShipping || !freeShipping)
    ) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  };

  useEffect(() => {
    disabledSubmitButton();
  }, [
    couponCode,
    description,
    discountAmount,
    discountType,
    applyCouponOn,
    availableAt,
    itemsOnCoupon,
    productsList,
    bundlesList,
    featured,
    quantity,
    freeShipping,
  ]);

  const fetchNewCoupon = async (couponObj) => {
    const res = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/coupons/create`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(couponObj),
      }
    );
    const data = await res.json();
    return data;
  };

  const handleSubmit = async () => {
    disabledSubmitButton();
    if (allFieldsFilled) {
      const fetchedValidCouponNameRes = await fetchValidateCouponName();
      console.log('fetchedValidCouponNameRes:', fetchedValidCouponNameRes);
      if (fetchedValidCouponNameRes) {
        const couponObj = {
          couponName: couponCode,
          description: description,
          featured: featured,
          freeShipping: freeShipping,
          availableAt: availableAt,
          quantity: parseInt(quantity),
          itemsOnCoupon,
          discount: {
            type: discountType,
            amount: discountAmount,
          },
        };
        const fetchedCoupon = await fetchNewCoupon(couponObj);
        if (fetchedCoupon.ok === true) {
          Router.push('/admin/coupons');
        }
      }
    } else {
      setWarning(true);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Add Coupon | Administration - Cananda Cannabyss</title>
      </Head>
      <Wrapper>
        <Grid></Grid>
        <div>
          <ProductListDiv>
            {applyCouponOn === 'items' && (
              <>
                <ProductsList
                  products={productsList.results}
                  handleGetElement={handleGetElement}
                />
                <BundlesList
                  bundles={bundlesList.results}
                  handleGetElement={handleGetElement}
                />
              </>
            )}
            {applyCouponOn === 'products' && (
              <ProductsList
                products={productsList.results}
                handleGetElement={handleGetElement}
              />
            )}
            {applyCouponOn === 'bundles' && (
              <BundlesList
                bundles={bundlesList.results}
                handleGetElement={handleGetElement}
              />
            )}
          </ProductListDiv>
        </div>
        <CouponInfoDiv>
          <Grid>
            <div>
              <Label>Coupon Code</Label>
              <br />
              <Input type='text' onChange={onChangeCounponCode} />

              <Label>Discount</Label>
              <br />
              <SelectDiv>
                <Input type='number' onChange={onChangeDiscountAmount} />
                <Select onChange={onChangeDiscountType}>
                  <option value='percent'>Percent</option>
                  <option value='cash'>Cash</option>
                </Select>
              </SelectDiv>
              <Label>Quantity</Label>
              <br />
              <Input
                type='number'
                step='1'
                onChange={onChangeQuantity}
                style={{
                  width: '150px',
                }}
              />
              <Label>Apply Counpon on</Label>
              <br />
              <Select onChange={onChangeApplyOn}>
                <option value='items'>All Items</option>
                <option value='products'>Products</option>
                <option value='bundles'>Bundles</option>
                {/* <option value='categories'>Categories</option> */}
              </Select>
              <br />
              <Label>Available at</Label>
              <br />
              <Select onChange={onChangeAvailableAt}>
                <option value='canada'>Canadawide</option>
                {/* {provincesList.map((province) => (
                  <option value={province.abbr} key={province.abbr}>
                    {province.name}
                  </option>
                ))} */}
              </Select>
              <FeaturedCheckbox
                handleCheckFeatured={handleCheckFeatured}
                featured={featured}
              />
              <FreeShippingCheckbox
                handleCheckFreeShipping={handleCheckFreeShipping}
                freeShipping={freeShipping}
              />
            </div>
            <div>
              <CouponDescription>
                <Editor
                  apiKey='z1imaefgqfqi5gkj9tp9blogndyf2gp0aj3fgubdtz73p658'
                  init={{
                    height: 300,
                    menubar: false,
                    plugins: [
                      'advlist autolink lists link image charmap print preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media table paste code help wordcount',
                    ],
                    toolbar:
                      'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                  }}
                  onChange={handleCouponDescription}
                />
              </CouponDescription>
            </div>
          </Grid>
          {warning && <Warning>Fill all fields before submit</Warning>}
          <Button
            onClick={() => {
              handleSubmit();
            }}
          >
            Create Coupon
          </Button>
        </CouponInfoDiv>
      </Wrapper>
    </Layout>
  );
};

export default Coupon;

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { FaPlus } from 'react-icons/fa';
import {
  AllCoupons,
  CategoryUl,
  CouponAdd,
  CouponsAddLink,
  CouponsTitle,
  CouponsUl,
  Div,
  DivMobile,
  DivProduct,
  GridDiv,
  ListHead,
  Wrapper,
} from '../../../styles/Pages/Admin/Coupons';
import Layout from '../../AdminLayout';
import CouponList from '../../UI/Lists/Admin/Coupons/CouponsList';
import DeleteConfirmation from '../../UI/Confirmations/DeleteCouponConfirmation';

const Coupons = () => {
  const [couponList, setCouponList] = useState([]);
  const [selectedCouponId, setSelectedCouponId] = useState('');
  const [selectedCouponName, setSelectedCouponName] = useState('');
  const [toggleDeleteConfirmation, setToggleDeleteConfirmation] = useState(
    false
  );

  const fetchAllCoupons = async () => {
    const res = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/coupons/get/all`,
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
    setCouponList(data);
  };

  useEffect(() => {
    fetchAllCoupons();
  }, []);

  const handleGetElement = (el) => {
    const element = el.parentNode.parentNode.parentNode;
    console.log(element);
    setSelectedCouponId(element.id);
    setSelectedCouponName(element.querySelector('p').innerHTML);
    setToggleDeleteConfirmation(true);
  };

  const handleCloseDeleteConfirmation = () => {
    setToggleDeleteConfirmation(false);
  };

  const handleGetNewCouponsListOnDeletion = () => {
    console.log('handleGetNewCouponsListOnDeletion');
    fetchAllCoupons();
  };

  return (
    <Layout>
      <Head>
        <title>Coupons | Administrator - Canada Cannabyss</title>
      </Head>
      {toggleDeleteConfirmation && (
        <DeleteConfirmation
          couponId={selectedCouponId}
          couponName={selectedCouponName}
          handleCloseDeleteConfirmation={handleCloseDeleteConfirmation}
          handleGetNewCouponsListOnDeletion={handleGetNewCouponsListOnDeletion}
        />
      )}
      <Wrapper>
        <GridDiv>
          <DivMobile>
            <ListHead>
              <CouponAdd>
                <CouponsTitle>Coupons</CouponsTitle>
                <Link href='/admin/add/coupon' as='/admin/add/coupon'>
                  <CouponsAddLink>
                    <FaPlus />
                  </CouponsAddLink>
                </Link>
              </CouponAdd>
            </ListHead>
            <CategoryUl>
              <li>
                <AllCoupons>All Coupon</AllCoupons>
              </li>
            </CategoryUl>
          </DivMobile>
          <Div>
            <ListHead>
              <CouponAdd>
                <CouponsTitle>Coupons</CouponsTitle>
                <Link href='/admin/add/coupon' as='/admin/add/coupon'>
                  <CouponsAddLink>
                    <FaPlus />
                  </CouponsAddLink>
                </Link>
              </CouponAdd>
            </ListHead>
            <AllCoupons>All Coupon</AllCoupons>
          </Div>
          <DivProduct>
            <CouponList
              coupons={couponList}
              handleGetElement={handleGetElement}
            />
          </DivProduct>
        </GridDiv>
      </Wrapper>
    </Layout>
  );
};

export default Coupons;

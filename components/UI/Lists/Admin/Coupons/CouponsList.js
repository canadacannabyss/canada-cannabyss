import Link from 'next/link';
import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import {
  Container,
  Edit,
  ProductImage,
  ProductName,
  Delete,
  DivButtons,
} from '../../../../../styles/Components/UI/Lists/Admin/Coupons/CouponsList';

const CouponsList = (props) => {
  const { coupons, handleGetElement } = props;

  const handleSelectCoupon = (e) => {
    const getter = handleGetElement;
    getter(e.currentTarget);
  };

  return (
    <>
      {coupons.map((coupon) => (
        <Container key={coupon._id} id={coupon._id}>
          <ProductName>{coupon.couponName}</ProductName>
          <DivButtons>
            <div>
              <Link
                href='/admin/edit/coupon/[slug]'
                as={`/admin/edit/coupon/${coupon.slug}`}
              >
                <Edit>
                  <FaEdit />
                </Edit>
              </Link>
            </div>
            <div>
              <Delete
                onClick={(e) => {
                  handleSelectCoupon(e);
                }}
              >
                <FaTrashAlt />
              </Delete>
            </div>
          </DivButtons>
        </Container>
      ))}
    </>
  );
};

export default CouponsList;

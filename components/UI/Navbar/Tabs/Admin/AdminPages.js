import Link from 'next/link';
import React from 'react';
import {
  Div,
  Ul,
} from '../../../../../styles/Components/UI/Navbar/Tabs/Admin/AdminPages/AdminPages';

const AdminPages = (props) => {
  const handleCloseTab = () => {
    const { handleCloseProducts } = props;
    const close = handleCloseProducts;
    close();
  };

  return (
    <Div>
      <Ul>
        <li>
          <Link href='/admin/products' as='/admin/products'>
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href='/admin/bundles' as='/admin/bundles'>
            <a>Bundles</a>
          </Link>
        </li>
        <li>
          <Link href='/admin/promotions' as='/admin/promotions'>
            <a>Promotions</a>
          </Link>
        </li>
        <li>
          <Link href='/admin/coupons' as='/admin/coupons'>
            <a>Coupons</a>
          </Link>
        </li>
        <li>
          <Link href='/admin/analytics' as='/admin/analytics'>
            <a>Analytics</a>
          </Link>
        </li>
        <li>
          <Link href='/admin/categories' as='/admin/categories'>
            <a>Categories</a>
          </Link>
        </li>
        <li>
          <Link href='/admin/orders' as='/admin/orders'>
            <a>Orders</a>
          </Link>
        </li>
      </Ul>
    </Div>
  );
};

export default AdminPages;

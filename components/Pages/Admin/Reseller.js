import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';
import {
  Wrapper,
  Title,
  ToCreateReseller,
} from '../../../styles/Pages/Admin/Resellers';
import AdminLayout from '../../AdminLayout';

const Resellers = (props) => {
  return (
    <AdminLayout>
      <Head>
        <title>Resellers | Administrator - Canada Cannabyss</title>
      </Head>
      <Wrapper>
        <Title>Resellers</Title>
        <Link href='/admin/add/reseller' as='/admin/add/reseller'>
          <ToCreateReseller>
            Create Reseller
            <FaPlus />
          </ToCreateReseller>
        </Link>
      </Wrapper>
    </AdminLayout>
  );
};

export default Resellers;

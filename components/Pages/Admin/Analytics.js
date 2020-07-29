import React from 'react';
import Head from 'next/head';
import { Wrapper } from '../../../styles/Pages/Admin/Analytics';
import Layout from '../../AdminLayout';

const Analytics = () => {
  return (
    <Layout>
      <Head>
        <title>Analytics | Administrator - Canada Cannabyss</title>
      </Head>
      <Wrapper>
        <h1>Analytics</h1>
      </Wrapper>
    </Layout>
  );
};

export default Analytics;

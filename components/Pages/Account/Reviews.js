import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import { FaSpinner, FaSadTear } from 'react-icons/fa';
import { Wrapper, Title } from '../../../styles/Pages/Account/Reviews';
import Layout from '../../Layout';
import ReviewsList from '../../UI/Lists/Account/Reviews/ReviewsList';

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    user,
  };
};

const Orders = (props) => {
  const { user } = props;

  const [reviews, setReviews] = useState([]);

  const fetchAllUserReviews = async () => {
    const response = await fetch(
      `${process.env.mainApiEndpoint}/customers/billing/create`,
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(billingObj),
      }
    );
    const data = await response.json();
    setReviews(data);
  };

  useEffect(() => {
    // fetchAllUserReviews()
  }, []);

  return (
    <Layout>
      <Head>
        <title>Reviews | Account - Canada Cannabyss</title>
      </Head>
      <Wrapper>
        <Title>Reviews</Title>
        <ReviewsList reviews={reviews} />
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(Orders);

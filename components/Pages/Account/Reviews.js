import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import _ from 'lodash';
import { FaSpinner, FaSadTear } from 'react-icons/fa';
import { Wrapper, Title } from '../../../styles/Pages/Account/Reviews';
import Layout from '../../Layout';
import ReviewsList from '../../UI/Lists/Account/Reviews/ReviewsList';
import Logo from '../../../assets/img/canada-cannabyss-logo.webp';

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    user,
  };
};

const Reviews = (props) => {
  const { user } = props;

  const [reviews, setReviews] = useState([]);

  const fetchAllUserReviews = async () => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/customers/comments/user/${user.data._id}`,
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
    const data = await response.json();
    setReviews(data);
  };

  useEffect(() => {
    fetchAllUserReviews();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Reviews | Account - Canada Cannabyss</title>
        <meta
          name='description'
          content='Reviews | Account - Canada Cannabyss.'
        />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Reviews | Account - Canada Cannabyss'
        />
        <meta property='og:type' content='article' />
        <meta
          property='og:url'
          content={`${process.env.SECURED_MAIN_DOMAIN}/account/reviews`}
        />
        <meta
          property='og:description'
          content='Reviews | Account - Canada Cannabyss.'
        />
        <meta property='og:image' content={Logo} />
        <meta property='og:site_name' content='Canada Cannabyss' />

        {/* Google+ */}
        <meta itemprop='name' content='Reviews | Account - Canada Cannabyss' />
        <meta
          itemprop='description'
          content='Reviews | Account - Canada Cannabyss'
        />
        <meta itemprop='image' content={Logo} />

        {/* Twitter */}
        <meta name='twitter:card' content='product' />
        <meta name='twitter:site' content='@canadacannabyss' />
        <meta
          name='twitter:title'
          content='Reviews | Account - Canada Cannabyss'
        />
        <meta
          name='twitter:description'
          content='Reviews | Account - Canada Cannabyss.'
        />
        <meta name='twitter:creator' content='@canadacannabyss' />
        <meta name='twitter:image' content={Logo} />
      </Head>
      <Wrapper>
        <Title>Reviews</Title>
        {!_.isEmpty(reviews) && <ReviewsList reviews={reviews} />}
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(Reviews);

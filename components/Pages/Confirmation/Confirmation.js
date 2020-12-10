import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { FaSpinner } from 'react-icons/fa';
import _ from 'lodash';
import Layout from '../../Layout';
import {
  Wrapper,
  Title,
  ConfirmationMessage,
  ConfirmationMessageError,
  Loading,
  LoadingSpinner,
} from '../../../styles/Pages/Confirmation/Confirmation';
import Logo from '../../../assets/img/canada-cannabyss-logo.webp';

const Confirmation = (props) => {
  const { token } = props;
  const [user, setUser] = useState({});
  const [warning, setWarning] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState([]);
  const [invalid, setInvalid] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverErrorMessage, setServerErrorMessage] = useState('');

  useEffect(() => {
    const fetchConfirmAccount = async () => {
      setLoading(true);
      const response = await fetch(
        `${process.env.USER_API_ENDPOINT}/customers/auth/confirmation/${token}`,
        {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      console.log('confirmation:', data);
      if (data.statusCode === 200) {
        setSuccess(true);
        setUser(data.results);
      }
      if (data.errors.length > 0) {
        setWarning(true);
        setError(true);
        setErrorMsg(data.errors);
      }
      setLoading(false);
    };
    fetchConfirmAccount();
  }, []);

  console.log('warning:', warning);

  return (
    <Layout>
      <Head>
        <title>Account Confirmation - Canada Cannabyss</title>
        <meta
          name="description"
          content="Account Confirmation - Canada Cannabyss."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Account Confirmation - Canada Cannabyss"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`${process.env.SECURED_MAIN_DOMAIN}/confirmation`}
        />
        <meta
          property="og:description"
          content="Account Confirmation - Canada Cannabyss."
        />
        <meta property="og:image" content={Logo} />
        <meta property="og:site_name" content="Canada Cannabyss" />

        {/* Google+ */}
        <meta
          itemprop="name"
          content="Account Confirmation - Canada Cannabyss"
        />
        <meta
          itemprop="description"
          content="Account Confirmation - Canada Cannabyss"
        />
        <meta itemprop="image" content={Logo} />

        {/* Twitter */}
        <meta name="twitter:card" content="product" />
        <meta name="twitter:site" content="@canadacannabyss" />
        <meta
          name="twitter:title"
          content="Account Confirmation - Canada Cannabyss"
        />
        <meta
          name="twitter:description"
          content="Account Confirmation - Canada Cannabyss."
        />
        <meta name="twitter:creator" content="@canadacannabyss" />
        <meta name="twitter:image" content={Logo} />
      </Head>
      <Wrapper>
        <Title>Account Confirmation</Title>
        {loading && (
          <Loading>
            <LoadingSpinner>
              <FaSpinner />
            </LoadingSpinner>
          </Loading>
        )}
        {warning && error && (
          <>
            {errorMsg.map((msg) => (
              <ConfirmationMessageError>
                <p>{msg}</p>
              </ConfirmationMessageError>
            ))}
          </>
        )}
        {success && !_.isEmpty(user) && (
          <ConfirmationMessage>
            <p>
              Welcome to Canada Cannabyss{' '}
              <span>{`${user.names.firstName} ${user.names.lastName}`}</span>.
            </p>
            <br />
            <p>Your Account has been successfully verified.</p>
          </ConfirmationMessage>
        )}
      </Wrapper>
    </Layout>
  );
};

export default Confirmation;

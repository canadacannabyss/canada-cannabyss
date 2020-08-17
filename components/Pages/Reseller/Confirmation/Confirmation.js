import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { FaSpinner } from 'react-icons/fa';
import _ from 'lodash';

import Layout from '../../../Layout';

import {
  Wrapper,
  Title,
  ConfirmationMessage,
  ConfirmationMessageError,
  Loading,
  LoadingSpinner,
} from '../../../../styles/Pages/Confirmation/Confirmation';

const Confirmation = (props) => {
  const { token } = props;
  const [user, setUser] = useState({});
  const [warning, setWarning] = useState(false);
  const [error, setError] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverErrorMessage, setServerErrorMessage] = useState('');

  useEffect(() => {
    const fetchConfirmAccount = async () => {
      setLoading(true);
      const response = await fetch(
        `${process.env.USER_API_ENDPOINT}/resellers/confirmation/${token}`,
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

      if (data._id) {
        setSuccess(true);
        setUser(data);
      }
      if (data.error) {
        setWarning(true);
        setError(true);
      }
      if (data.notValid) {
        setWarning(true);
        setInvalid(true);
      }
      setLoading(false);
    };
    fetchConfirmAccount();
  }, []);

  console.log('warning:', warning);

  return (
    <Layout>
      <Head>
        <title>Reseller Account Confirmation - Canada Cannabyss</title>
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
          <ConfirmationMessageError>
            <p>This link is expired</p>
          </ConfirmationMessageError>
        )}
        {warning && invalid && (
          <ConfirmationMessageError>
            <p>This link is not valid</p>
          </ConfirmationMessageError>
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

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { FaSpinner, FaUser } from 'react-icons/fa';
import _ from 'lodash';

import Layout from '../../Layout';

import {
  Form,
  Input,
  Label,
  Submit,
  Title,
  TitleDiv,
  Wrapper,
  ConfirmationMessage,
  ConfirmationMessageError,
  Loading,
  LoadingSpinner,
  Warning,
} from '../../../styles/Pages/ResetPassword/ResetPassword';
import Logo from '../../../assets/img/canada-cannabyss-logo.webp';

const ResetPassword = (props) => {
  const { token } = props;
  const [user, setUser] = useState({});
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [warning, setWarning] = useState(false);
  const [error, setError] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverErrorMessage, setServerErrorMessage] = useState('');
  const [successPasswordUpdated, setSuccessPasswordUpdated] = useState(false);

  useEffect(() => {
    const fetchValidationToken = async () => {
      setLoading(true);
      const response = await fetch(
        `${process.env.USER_API_ENDPOINT}/auth/reset-password/validating/token/${token}`,
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
        setServerErrorMessage(data.error);
      }
      if (data.notValid) {
        setWarning(true);
        setInvalid(true);
        setServerErrorMessage(data.notValid);
      }
      setLoading(false);
    };
    fetchValidationToken();
  }, []);

  const fetchUpdatePassword = async () => {
    const response = await fetch(
      `${process.env.USER_API_ENDPOINT}/auth/reset-password`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, password, password2 }),
      }
    );
    const data = await response.json();
    console.log('updatedPassword:', data);
    if (data.ok) {
      setSuccessPasswordUpdated(true);
    }
    if (data.error) {
      setWarning(true);
      setError(true);
      setServerErrorMessage(data.error);
    }
    return data;
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  const handleSendResetPasswordEmail = async (e) => {
    e.preventDefault();
    fetchUpdatePassword();
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Reset Password - Canada Cannabyss</title>
          <meta
            name='description'
            content='Reset Password - Canada Cannabyss.'
          />

          {/* Open Graph */}
          <meta
            property='og:title'
            content='Reset Password - Canada Cannabyss'
          />
          <meta property='og:type' content='article' />
          <meta
            property='og:url'
            content={`${process.env.MAIN_DOMAIN}/reset-password`}
          />
          <meta
            property='og:description'
            content='Reset Password - Canada Cannabyss.'
          />
          <meta property='og:image' content={Logo} />
          <meta property='og:site_name' content='Canada Cannabyss' />

          {/* Google+ */}
          <meta itemprop='name' content='Reset Password - Canada Cannabyss' />
          <meta
            itemprop='description'
            content='Reset Password - Canada Cannabyss'
          />
          <meta itemprop='image' content={Logo} />

          {/* Twitter */}
          <meta name='twitter:card' content='product' />
          <meta name='twitter:site' content='@canadacannabyss' />
          <meta
            name='twitter:title'
            content='Reset Password - Canada Cannabyss'
          />
          <meta
            name='twitter:description'
            content='Reset Password - Canada Cannabyss.'
          />
          <meta name='twitter:creator' content='@canadacannabyss' />
          <meta name='twitter:image' content={Logo} />
        </Head>
        <Wrapper>
          {loading && (
            <Loading>
              <LoadingSpinner>
                <FaSpinner />
              </LoadingSpinner>
            </Loading>
          )}
          {warning && error && serverErrorMessage === 'This link is expired' && (
            <ConfirmationMessageError>
              <p>This link is expired</p>
            </ConfirmationMessageError>
          )}
          {warning &&
            invalid &&
            serverErrorMessage === 'This link is not valid' && (
              <ConfirmationMessageError>
                <p>This link is not valid</p>
              </ConfirmationMessageError>
            )}
          {success && !successPasswordUpdated && !_.isEmpty(user) && (
            <Form method='post' onSubmit={handleSendResetPasswordEmail}>
              <FaUser />
              <h2>Reset Password</h2>
              <Label htmlFor='password'>New Password</Label>
              <Input
                type='password'
                name='password'
                id='password'
                value={password}
                autoComplete='off'
                onChange={handlePassword}
              />
              <Label htmlFor='password'>Confirm New Password</Label>
              <Input
                type='password'
                name='password2'
                id='password2'
                value={password2}
                autoComplete='off'
                onChange={handlePassword2}
              />
              {warning &&
                error &&
                serverErrorMessage === 'Passwords does not match.' && (
                  <Warning>
                    <p>Passwords does not match</p>
                  </Warning>
                )}
              <Submit className='resetPassword' type='submit'>
                Reset Password
              </Submit>
            </Form>
          )}
          {successPasswordUpdated && (
            <ConfirmationMessage>
              <p>Your password was successfully updated.</p>
            </ConfirmationMessage>
          )}
        </Wrapper>
      </Layout>
    </>
  );
};

export default ResetPassword;

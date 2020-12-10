import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Head from 'next/head';
import Router from 'next/router';
import { FaSpinner, FaUser } from 'react-icons/fa';
import _ from 'lodash';
import Logo from '../../../assets/img/canada-cannabyss-logo.svg';

import Layout from '../../Layout';

import {
  Form,
  Input,
  Label,
  Submit,
  BrandDiv,
  Title,
  TitleDiv,
  Wrapper,
  ConfirmationMessage,
  ConfirmationMessageError,
  Loading,
  LoadingSpinner,
  Warning,
} from '../../../styles/Pages/ResetPassword/ResetPassword';

import { openLoginForm } from '../../../store/actions/navbar/navbar';

const ResetPassword = (props) => {
  const { token } = props;

  const [user, setUser] = useState({});
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [warning, setWarning] = useState(false);
  const [error, setError] = useState(false);
  const [warningMsg, setWarningMsg] = useState([]);
  const [invalid, setInvalid] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverErrorMessage, setServerErrorMessage] = useState('');
  const [successPasswordUpdated, setSuccessPasswordUpdated] = useState(false);

  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (success && !successPasswordUpdated && !_.isEmpty(user)) {
      inputRef.current.focus();
    }
  }, [success && !successPasswordUpdated && !_.isEmpty(user)]);

  function resetWarnings(): void {
    setWarning(false);
    setWarningMsg([]);
    setError(false);
  }

  useEffect(() => {
    const fetchValidationToken = async () => {
      setLoading(true);
      const response = await fetch(
        `${process.env.USER_API_ENDPOINT}/customers/auth/reset-password/validating/token/${token}`,
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

      if (data.errors && data.errors.length > 0) {
        const arrayMsgs = [];
        data.errors.map((errorMsg) => {
          arrayMsgs.push(errorMsg);
        });
        setWarningMsg(arrayMsgs);
        setWarning(true);
      }

      if (data.statusCode === 200) {
        setSuccess(true);
        setUser(data);
      }

      setLoading(false);
    };

    fetchValidationToken();
  }, []);

  const fetchUpdatePassword = async () => {
    resetWarnings();

    const response = await fetch(
      `${process.env.USER_API_ENDPOINT}/customers/auth/reset-password`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, password, password2 }),
      },
    );
    const data = await response.json();

    console.log('data reset:', data);

    if (data.errors && data.errors.length > 0) {
      setWarning(true);
      setError(true);

      const arrayMsgs = [];
      data.errors.map((errorMsg) => {
        arrayMsgs.push(errorMsg);
      });
      setWarningMsg(arrayMsgs);
    }

    if (data.statusCode === 200) {
      setSuccessPasswordUpdated(true);
      setTimeout(() => {
        dispatch(openLoginForm());
        Router.push('/');
      }, 3000);
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
            name="description"
            content="Reset Password - Canada Cannabyss."
          />

          {/* Open Graph */}
          <meta
            property="og:title"
            content="Reset Password - Canada Cannabyss"
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:url"
            content={`${process.env.SECURED_MAIN_DOMAIN}/reset-password`}
          />
          <meta
            property="og:description"
            content="Reset Password - Canada Cannabyss."
          />
          <meta property="og:image" content={Logo} />
          <meta property="og:site_name" content="Canada Cannabyss" />

          {/* Google+ */}
          <meta itemProp="name" content="Reset Password - Canada Cannabyss" />
          <meta
            itemProp="description"
            content="Reset Password - Canada Cannabyss"
          />
          <meta itemProp="image" content={Logo} />

          {/* Twitter */}
          <meta name="twitter:card" content="product" />
          <meta name="twitter:site" content="@canadacannabyss" />
          <meta
            name="twitter:title"
            content="Reset Password - Canada Cannabyss"
          />
          <meta
            name="twitter:description"
            content="Reset Password - Canada Cannabyss."
          />
          <meta name="twitter:creator" content="@canadacannabyss" />
          <meta name="twitter:image" content={Logo} />
        </Head>
        <Wrapper>
          {loading && (
            <Loading>
              <LoadingSpinner>
                <FaSpinner />
              </LoadingSpinner>
            </Loading>
          )}
          {warning && warningMsg.length > 0 && (
            <>
              {warningMsg.map((msg) => (
                <ConfirmationMessageError>
                  <p>{msg}</p>
                </ConfirmationMessageError>
              ))}
            </>
          )}
          {warning &&
            invalid &&
            serverErrorMessage === 'This link is not valid' && (
              <ConfirmationMessageError>
                <p>This link is not valid</p>
              </ConfirmationMessageError>
            )}
          {success && !successPasswordUpdated && !_.isEmpty(user) && (
            <Form method="post" onSubmit={handleSendResetPasswordEmail}>
              <BrandDiv>
                <img src={Logo} alt="Canada Cannabyss" />
                <div className="sep" />
                <h1>Reset Password</h1>
              </BrandDiv>
              <Label htmlFor="password">New Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={password}
                autoComplete="off"
                onChange={handlePassword}
                ref={inputRef}
              />
              <Label htmlFor="password">Confirm New Password</Label>
              <Input
                type="password"
                name="password2"
                id="password2"
                value={password2}
                autoComplete="off"
                onChange={handlePassword2}
              />
              {warning &&
                error &&
                serverErrorMessage === 'Passwords does not match.' && (
                  <Warning>
                    <p>Passwords does not match</p>
                  </Warning>
                )}
              <Submit className="resetPassword" type="submit">
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

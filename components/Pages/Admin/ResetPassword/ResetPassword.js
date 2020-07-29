import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { FaUser, FaUsersCog } from 'react-icons/fa';

import {
  Form,
  Input,
  Submit,
  Title,
  TitleDiv,
  Label,
  Wrapper,
  Warning,
  EmailSentToMessage,
} from '../../../../styles/Pages/Admin/Register';
import Layout from '../../../Layout';

const ResetPassword = (props) => {
  const [resetPasswordEmail, setResetPasswordEmail] = useState('');
  const [resetPasswordWarning, setResetPasswordWarning] = useState(false);
  const [
    resetPasswordWarningMessage,
    setResetPasswordWarningMessage,
  ] = useState('');
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);

  const handleSendResetPasswordEmail = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.userApiEndpoint}/admin/auth/reset-password/sent`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: resetPasswordEmail }),
      }
    );

    const data = await response.json();
    console.log('data res:', data);

    if (data.error !== null || data.error !== undefined) {
      setResetPasswordWarning(true);
      setResetPasswordWarningMessage(data.error);
      setResetPasswordSuccess(false);
    }

    if (data.ok !== null || data.error !== undefined) {
      if (data.ok) {
        setResetPasswordWarning(false);
        setResetPasswordWarningMessage('');
        setResetPasswordSuccess(true);
      }
    }
  };

  const onChangeResetPasswordEmail = (e) => {
    setResetPasswordEmail(e.target.value);
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Reset Password | Administrator - Canada Cannabyss</title>
        </Head>
        {resetPasswordSuccess && (
          <EmailSentToMessage top='20px'>
            <p>
              Our reset password link was send to:{' '}
              <span>{resetPasswordEmail}</span>
            </p>
          </EmailSentToMessage>
        )}
        <Wrapper>
          <Form method='post' onSubmit={handleSendResetPasswordEmail}>
            <h2>Reset Password</h2>
            <Label htmlFor='email'>Email</Label>
            <Input
              type='text'
              name='email'
              id='email'
              value={resetPasswordEmail}
              autoComplete='off'
              onChange={onChangeResetPasswordEmail}
            />
            <Submit className='register' type='submit'>
              Reset Password
            </Submit>
            {resetPasswordWarning && (
              <Warning>{resetPasswordWarningMessage}</Warning>
            )}
          </Form>
        </Wrapper>
      </Layout>
    </>
  );
};

export default ResetPassword;

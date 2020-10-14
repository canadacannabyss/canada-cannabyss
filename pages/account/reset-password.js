import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Router from 'next/router';

import {
  BlurredBackground,
  BrandDiv,
  Container,
  EmailSentToMessage,
  Form,
  FormLinkTo,
  HalfGrid,
  Input,
  Label,
  Submit,
  SwitchFormButton,
  Warning,
  Wrapper,
  SuccessMsg,
} from '../../styles/Pages/Account/ResetPassword';
import Layout from '../../components/Layout';
import DateFormatter from '../../utils/DateFormatter';
import Logo from '../../assets/img/canada-cannabyss-logo.webp';
import { withAuth } from '../../utils/withAuth';


const ResetPassword = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [validCurrentPassword, setValidCurrentPassword] = useState(false);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const [warning, setWarning] = useState(false);
  const [warningMsg, setWarningMsg] = useState('');

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        Router.push('/account')
      }, 2000)
    }
  }, [success]);

  const handleValidateCurrentPassword = async () => {
    const res = await fetch(
      `${process.env.USER_API_ENDPOINT}/customers/auth/validate/current/password`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: user.data._id, currentPassword })
      }
    );
    const data = await res.json();
    return data;
  }

  const handleResetPassword = async () => {
    const res = await fetch(
      `${process.env.USER_API_ENDPOINT}/customers/auth/account/reset-password`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: user.data._id, password: newPassword, password2: confirmNewPassword })
      }
    );
    const data = await res.json();
    return data;
  }

  const onSubmitValidateCurrentPassword = async (e) => {
    e.preventDefault();
    setWarning(false);
    setWarningMsg('');
    const res = await handleValidateCurrentPassword()
    console.log('res:', res)
    if (res.ok) {
      setValidCurrentPassword(true)
    }
    if (res.msg) {
      setWarning(true);
      setWarningMsg(res.msg);
    }
  }

  const onSubmitResetPassword = async (e) => {
    e.preventDefault();
    setWarning(false);
    setWarningMsg('');
    const res = await handleResetPassword()
    console.log('res:', res)
    if (res.ok) {
      setSuccess(true)
    }
    if (res.error) {
      setWarning(true);
      setWarningMsg(res.error);
    }
  }

  const onChangeCurrentPassword = (e) => {
    setCurrentPassword(e.target.value);
  }

  const onChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  }

  const onChangeConfirmNewPassword = (e) => {
    setConfirmNewPassword(e.target.value);
  }

  return (
    <Layout>
      <Head>
        <title>Reset Password - Canada Cannabyss</title>
      </Head>
      <Wrapper>
        <Container>
          {success ? (
            <SuccessMsg>Your password was successfully reseted</SuccessMsg>
          ) : (
            <>
              {!validCurrentPassword ? (
                <Form onSubmit={onSubmitValidateCurrentPassword}>
                  <BrandDiv>
                    <img src={Logo} alt='Canada Cannabyss' />
                    <div className='sep' />
                    <h1>Current Password</h1>
                  </BrandDiv>
                  <Label htmlFor='current-password'>Current Password</Label>
                  <Input type='password' id='current-password' value={currentPassword} onChange={onChangeCurrentPassword} />
                  {warning && <Warning>{warningMsg}</Warning>}
                  <Submit type='submit'>Validate current password</Submit>
                </Form>
              ) : (
                <Form onSubmit={onSubmitResetPassword}>
                  <BrandDiv>
                    <img src={Logo} alt='Canada Cannabyss' />
                    <div className='sep' />
                    <h1>Reset Password</h1>
                  </BrandDiv>
                  <Label htmlFor='new-password'>New Password</Label>
                  <Input type='password' id='new-password' value={newPassword} onChange={onChangeNewPassword} />
                  <Label htmlFor='confirm-new-password'>Confirm New Password</Label>
                  <Input type='password' id='confirm-new-password' value={confirmNewPassword} onChange={onChangeConfirmNewPassword} />
                  {warning && <Warning>{warningMsg}</Warning>}
                  <Submit type='submit'>Reset Password</Submit>
                </Form>
              )}
            </>
          )}
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default withAuth(ResetPassword);

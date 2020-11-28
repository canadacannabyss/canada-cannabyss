import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import {
  BrandDiv,
  Input,
  Label,
  OpenFormButton,
  SocialMediaRegisterDiv,
  Submit,
  Wrapper,
  Background,
  EmailSentToMessage,
} from '../../../../../styles/Components/UI/Navbar/Modals/Register/Register';

import Logo from '../../../../../assets/img/canada-cannabyss-logo.svg';

import {
  openLoginForm,
  closeResetPasswordForm,
} from '../../../../../store/actions/navbar/navbar';

const ResetPasswordForm = () => {
  const dispatch = useDispatch();

  const [resetPasswordEmail, setResetPasswordEmail] = useState('');
  const [resetPasswordWarning, setResetPasswordWarning] = useState(false);
  const [
    resetPasswordWarningMessage,
    setResetPasswordWarningMessage,
  ] = useState('');
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);

  const onChangeResetPasswordEmail = (e) => {
    setResetPasswordEmail(e.target.value);
  };

  const handleOpenLoginForm = () => {
    dispatch(openLoginForm());
  };

  function handleCloseResetPasswordForm(): void {
    dispatch(closeResetPasswordForm());
  }

  const handleSendResetPasswordEmail = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.USER_API_ENDPOINT}/customers/auth/reset-password/sent`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: resetPasswordEmail }),
      },
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

  return (
    <>
      {resetPasswordSuccess && (
        <EmailSentToMessage top="20px">
          <p>
            Our reset password link was send to:{' '}
            <span>{resetPasswordEmail}</span>
          </p>
        </EmailSentToMessage>
      )}
      <Background onClick={() => handleCloseResetPasswordForm()} />
      <Wrapper>
        <SocialMediaRegisterDiv>
          <BrandDiv>
            <img src={Logo} alt="Canada Cannabyss" />
            <div className="sep" />
            <h1>Reset Password</h1>
          </BrandDiv>
          <form onSubmit={handleSendResetPasswordEmail}>
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={onChangeResetPasswordEmail}
              name="email"
              id="email"
              type="email"
              value={resetPasswordEmail}
            />
            <Submit>Reset Password</Submit>
          </form>
          <OpenFormButton
            onClick={() => {
              handleOpenLoginForm();
            }}
          >
            Already have an account?
          </OpenFormButton>
          {resetPasswordWarning && (
            <Warning>{resetPasswordWarningMessage}</Warning>
          )}
        </SocialMediaRegisterDiv>
      </Wrapper>
    </>
  );
};

export default ResetPasswordForm;

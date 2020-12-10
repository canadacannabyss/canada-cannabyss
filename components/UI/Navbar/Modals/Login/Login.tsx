import React, { useState, useEffect, useRef } from 'react';
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
  Warning,
} from '../../../../../styles/Components/UI/Navbar/Modals/Register/Register';

import Logo from '../../../../../assets/img/canada-cannabyss-logo.svg';

import {
  closeLoginForm,
  openRegisterForm,
  openResetPasswordForm,
} from '../../../../../store/actions/navbar/navbar';
import { fetchLoginUser } from '../../../../../store/actions/user/user';

const mapStateToProps = (state) => {
  const { user } = state;

  return { user };
};

const LoginModal = ({ user }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onChangeLoginEmail = (e) => {
    setLoginEmail(e.target.value);
  };

  const onChangeLoginPassword = (e) => {
    setLoginPassword(e.target.value);
  };

  function handleCloseLoginForm(): void {
    dispatch(closeLoginForm());
  }

  function handleOpenRegisterForm(): void {
    dispatch(openRegisterForm());
    dispatch(closeLoginForm());
  }

  const handleOpenResetPasswordForm = () => {
    dispatch(openResetPasswordForm());
    dispatch(closeLoginForm());
  };

  const handleLoginUser = (e) => {
    e.preventDefault();
    if (
      localStorage.getItem('accessToken') !== null ||
      localStorage.getItem('accessToken') !== undefined ||
      localStorage.getItem('accessToken') !== 'undefined'
    ) {
      localStorage.removeItem('accessToken');
    }
    if (
      localStorage.getItem('refreshToken') !== null ||
      localStorage.getItem('refreshToken') !== undefined ||
      localStorage.getItem('refreshToken') !== 'undefined'
    ) {
      localStorage.removeItem('refreshToken');
    }
    if (
      localStorage.getItem('cartId') !== null ||
      localStorage.getItem('cartId') !== undefined ||
      localStorage.getItem('cartId') !== 'undefined'
    ) {
      localStorage.removeItem('cartId');
    }
    if (
      localStorage.getItem('orderId') !== null ||
      localStorage.getItem('orderId') !== undefined ||
      localStorage.getItem('orderId') !== 'undefined'
    ) {
      localStorage.removeItem('orderId');
    }
    const userInfoObj = {
      email: loginEmail,
      password: loginPassword,
    };
    dispatch(fetchLoginUser(userInfoObj));
    setLoginEmail('');
    setLoginPassword('');
  };

  return (
    <>
      <Background onClick={() => handleCloseLoginForm()} />
      <Wrapper>
        <SocialMediaRegisterDiv>
          <BrandDiv>
            <img src={Logo} alt="Canada Cannabyss" />
            <div className="sep" />
            <h1>Login</h1>
          </BrandDiv>
          <form onSubmit={handleLoginUser}>
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={onChangeLoginEmail}
              name="email"
              id="email"
              type="email"
              value={loginEmail}
              ref={inputRef}
            />
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={onChangeLoginPassword}
              name="password"
              id="password"
              type="password"
              value={loginPassword}
            />
            <Submit type="submit">Login</Submit>
          </form>
          <OpenFormButton
            onClick={() => {
              handleOpenResetPasswordForm();
            }}
          >
            Reset Password
          </OpenFormButton>
          <OpenFormButton
            onClick={() => {
              handleOpenRegisterForm();
            }}
          >
            Don't have an account yet?
          </OpenFormButton>
          {/* {user.error && <Warning>Invalid credentials</Warning>} */}
        </SocialMediaRegisterDiv>
      </Wrapper>
    </>
  );
};

export default connect(mapStateToProps)(LoginModal);

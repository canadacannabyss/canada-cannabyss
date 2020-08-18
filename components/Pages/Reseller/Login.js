import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import _ from 'lodash';
import Router from 'next/router';
import { FaUserPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { fetchLoginResellerUser } from '../../../store/actions/user/user';
import {
  EmailSentToMessage,
  Form,
  Input,
  InputInline,
  Label,
  Submit,
  Warning,
  Title,
  TitleDiv,
  Wrapper,
  VerificationMsg,
} from '../../../styles/Pages/Resellers/Login/Login';
import Layout from '../../Layout';

const ResellerRegistration = (props) => {
  const { token } = props;
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [userLoginSubmit, setUserLoginSubmit] = useState(false);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  useEffect(() => {
    if (userLoginSubmit) {
      Router.push('/reseller/login');
    }
  }, [userLoginSubmit]);

  const handleLogin = async (e) => {
    e.preventDefault();
    disabledSubmitButton();
    if (allFieldsFilled) {
      const userInfoObj = {
        email,
        password,
      };
      dispatch(fetchLoginResellerUser(userInfoObj));
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const disabledSubmitButton = () => {
    if (email.length > 0 && password.length > 0) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  };

  useEffect(() => {
    disabledSubmitButton();
  }, [email, password]);

  return (
    <Layout>
      <Head>
        <title>Login | Reseller - Canada Cannabyss</title>
      </Head>
      <Wrapper>
        <Form method='post' onSubmit={handleLogin}>
          <FaUserPlus />
          <h2>Login Reseller</h2>
          <Label htmlFor='email'>Email</Label>
          <Input
            type='email'
            name='email'
            id='email'
            value={email}
            autoComplete='off'
            onChange={handleEmail}
          />
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={handlePassword}
          />
          <Submit type='submit'>Login</Submit>
        </Form>
      </Wrapper>
    </Layout>
  );
};

export default ResellerRegistration;

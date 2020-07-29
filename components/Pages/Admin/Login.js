import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { FaUser, FaUsersCog } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoginAdminUser } from '../../../store/actions/user/user';
import {
  Form,
  Input,
  Submit,
  Title,
  TitleDiv,
  Label,
  Wrapper,
  Warning,
} from '../../../styles/Pages/Admin/Register';
import Layout from '../../Layout';

const RegisterAdmin = (props) => {
  const dispatch = useDispatch();
  const userRedux = useSelector((state) => state.user);

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isSU, setIsSU] = useState(false);
  const [error, setError] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  useEffect(() => {
    if (!_.isEmpty(userRedux.data)) {
      Router.push('/');
    }
  }, [userRedux]);

  const LoginSU = async (userInfo) => {
    const response = await fetch(
      `${process.env.userApiEndpoint}/admin/auth/verify/su`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      }
    );
    const data = await response.json();
    return data;
  };

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleAdminEmail = (e) => {
    setLoginEmail(e.target.value);
  };

  const handleAdminPassword = (e) => {
    setLoginPassword(e.target.value);
  };

  const handleLoginSU = async (e) => {
    e.preventDefault();
    const userInfo = {
      user,
      password,
    };
    const res = await LoginSU(userInfo);
    setIsSU(res.isSU);
    if (!isSU) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleLoginAdmin = async (e) => {
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

    if (
      loginEmail !== '' &&
      loginEmail.length > 0 &&
      loginPassword !== '' &&
      loginPassword.length > 0
    ) {
      console.log('loginEmail:', loginEmail);
      console.log('loginPassword:', loginPassword);
      const userInfo = {
        email: loginEmail,
        password: loginPassword,
      };
      dispatch(fetchLoginAdminUser(userInfo));
    }
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Login | Administrator - Canada Cannabyss</title>
        </Head>
        <Wrapper>
          {isSU ? (
            <Form method='post' onSubmit={handleLoginAdmin}>
              <FaUser />
              <h2>Login Admin</h2>
              <Label htmlFor='email'>Email</Label>
              <Input
                type='text'
                name='email'
                id='email'
                value={loginEmail}
                autoComplete='off'
                onChange={handleAdminEmail}
              />
              <Label htmlFor='password'>Password</Label>
              <Input
                type='password'
                name='password'
                id='password'
                value={loginPassword}
                onChange={handleAdminPassword}
              />
              <Submit className='register' type='submit'>
                Login
              </Submit>
            </Form>
          ) : (
            <Form method='post' onSubmit={handleLoginSU}>
              <FaUsersCog />
              <h2>Super User</h2>
              <Label htmlFor='username'>Username</Label>
              <Input
                type='text'
                name='username'
                id='username'
                value={user}
                autoComplete='off'
                onChange={handleUser}
              />
              <Label htmlFor='password'>Password</Label>
              <Input
                type='password'
                name='password'
                id='password'
                value={password}
                onChange={handlePassword}
              />
              {error && (
                <>
                  <Warning>Not a Super User</Warning>
                </>
              )}
              <Submit className='register' type='submit'>
                Login
              </Submit>
            </Form>
          )}
        </Wrapper>
      </Layout>
    </>
  );
};

export default RegisterAdmin;

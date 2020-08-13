import _ from 'lodash';
import Router from 'next/router';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { FaUserPlus, FaUsersCog } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { registerAdminUser } from '../../../store/actions/user/user';
import {
  Form,
  InputInline,
  Input,
  Label,
  Submit,
  Title,
  TitleDiv,
  Warning,
  Wrapper,
} from '../../../styles/Pages/Admin/Register';
import Layout from '../../Layout';

const RegisterAdmin = (props) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isSU, setIsSU] = useState(false);
  const [error, setError] = useState(false);
  const [adminFirstName, setAdminFirstName] = useState('');
  const [adminLastName, setAdminLastName] = useState('');
  const [adminUser, setAdminUser] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminPassword2, setAdminPassword2] = useState('');
  // const [isRegister, setIsRegister] = useState(null);
  const [isAdminUserValid, setIsAdminUserValid] = useState(true);
  const [isPasswordsMatching, setIsPasswordsMatching] = useState(true);
  const [profilePicture, setProfilePicture] = useState([]);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [enableCoverUploader, setEnableCoverUploader] = useState(false);
  const [warning, setWarning] = useState(false);
  const [
    adminUserRegistrationSubmit,
    setAdminUserRegistrationSubmit,
  ] = useState(false);

  useEffect(() => {
    if (adminUserRegistrationSubmit) {
      Router.push('/admin/login');
    }
  }, [adminUserRegistrationSubmit]);

  useEffect(() => {
    disabledSubmitButton();
  }, [
    adminFirstName,
    adminLastName,
    adminUser,
    adminEmail,
    adminPassword,
    adminPassword2,
  ]);

  const setGlobalVariable = async () => {
    const bodyRequest = {
      type: 'users',
      title: adminUser,
    };
    const response = await fetch(
      `${process.env.USER_API_ENDPOINT}/admin/auth/set/global-variable`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyRequest),
      }
    );
    return response;
  };

  const verifyAdminUser = async () => {
    const response = await fetch(
      `${process.env.USER_API_ENDPOINT}/admin/auth/verify/admin/username/${adminUser}`,
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
    return data;
  };

  const LoginSU = async (userInfo) => {
    const response = await fetch(
      `${process.env.USER_API_ENDPOINT}/admin/auth/verify/su`,
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

  const fetchRegisterAdminUser = async (userInfoObj) => {
    const response = await fetch(
      `${process.env.USER_API_ENDPOINT}/admin/auth/register`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfoObj),
      }
    );
    const data = await response.json();
    console.log('data admin user:', data);
    if (data.ok) {
      setAdminUserRegistrationSubmit(true);
    }
  };

  const handleFirstName = (e) => {
    setAdminFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setAdminLastName(e.target.value);
  };

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleAdminUser = (e) => {
    setAdminUser(e.target.value);
  };

  const handleAdminEmail = (e) => {
    setAdminEmail(e.target.value);
  };

  const handleAdminPassword = (e) => {
    setAdminPassword(e.target.value);
  };

  const handleAdminPassword2 = (e) => {
    setAdminPassword2(e.target.value);
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

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (
      adminPassword === adminPassword2 &&
      adminPassword.length > 0 &&
      adminPassword2.length > 0 &&
      adminFirstName.length > 0 &&
      adminLastName.length > 0 &&
      adminUser.length > 0 &&
      adminEmail.length > 0
    ) {
      setIsPasswordsMatching(true);
      const res = await verifyAdminUser(adminUser);
      if (!res.valid) {
        setIsAdminUserValid(false);
      } else {
        const adminRegisterInfo = {
          firstName: adminFirstName,
          lastName: adminLastName,
          username: adminUser,
          email: adminEmail,
          password: adminPassword,
          password2: adminPassword2,
        };
        fetchRegisterAdminUser(adminRegisterInfo);
      }
    } else {
      setIsPasswordsMatching(false);
    }
  };

  const disabledSubmitButton = () => {
    if (
      adminUser.length > 0 &&
      adminEmail.length > 0 &&
      adminFirstName.length > 0 &&
      adminLastName.length > 0 &&
      adminPassword.length > 0 &&
      adminPassword2.length > 0
    ) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  };

  useEffect(() => {
    setGlobalVariable();
  }, [adminUser]);

  return (
    <>
      <Layout>
        <Head>
          <title>Register | Administrator - Canada Cannabyss</title>
        </Head>
        <Wrapper>
          {isSU ? (
            <Form method='post' onSubmit={handleRegistration}>
              <FaUserPlus />
              <h2>Register Admin</h2>
              <InputInline>
                <div>
                  <Label htmlFor='firstName'>First Name</Label>
                  <Input
                    type='text'
                    name='firstName'
                    id='firstName'
                    value={adminFirstName}
                    autoComplete='off'
                    onChange={handleFirstName}
                  />
                </div>
                <div>
                  <Label htmlFor='lastName'>Last Name</Label>
                  <Input
                    type='text'
                    name='lastName'
                    id='lastName'
                    value={adminLastName}
                    autoComplete='off'
                    onChange={handleLastName}
                  />
                </div>
              </InputInline>
              <Label htmlFor='username'>Username</Label>
              <Input
                type='text'
                name='user'
                id='username'
                value={adminUser}
                autoComplete='off'
                onChange={handleAdminUser}
              />
              <Label htmlFor='email'>Email</Label>
              <Input
                type='email'
                name='email'
                id='email'
                value={adminEmail}
                autoComplete='off'
                onChange={handleAdminEmail}
              />
              <Label htmlFor='password'>Password</Label>
              <Input
                type='password'
                name='password'
                id='password'
                value={adminPassword}
                onChange={handleAdminPassword}
              />
              <Label htmlFor='password2'>Confirm Password</Label>
              <Input
                type='password'
                name='password2'
                id='password2'
                value={adminPassword2}
                onChange={handleAdminPassword2}
              />
              {!isPasswordsMatching && <Warning>Passwords must match</Warning>}
              {!isAdminUserValid && (
                <Warning>This username is already taken</Warning>
              )}
              <Submit type='submit'>Register</Submit>
            </Form>
          ) : (
            <Form method='post' onSubmit={handleLoginSU}>
              <FaUsersCog />
              <h2>Super User</h2>
              <Label>Username</Label>
              <Input
                type='text'
                name='user'
                id='username'
                value={user}
                autoComplete='off'
                onChange={handleUser}
              />
              <Label>Password</Label>
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
              <Submit type='submit'>Login</Submit>
            </Form>
          )}
        </Wrapper>
      </Layout>
    </>
  );
};

export default RegisterAdmin;

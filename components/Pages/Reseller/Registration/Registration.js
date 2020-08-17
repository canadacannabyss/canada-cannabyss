import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import _ from 'lodash';
import Router from 'next/router';
import { FaUserPlus, FaUsersCog } from 'react-icons/fa';
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
} from '../../../../styles/Pages/Resellers/Registration/Registration';
import Layout from '../../../Layout';

const ResellerRegistration = (props) => {
  const { token } = props;

  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});

  const [loadingVerification, setLoadingVerification] = useState(false);
  const [fetchedVerification, setFetchedVerification] = useState(false);
  const [errorVerification, setErrorVerification] = useState(false);
  const [verificationData, setVerificationData] = useState({});

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [userRegistrationSubmit, setUserRegistrationSubmit] = useState(false);
  const [isUserValid, setIsUserValid] = useState(true);
  const [isPasswordsMatching, setIsPasswordsMatching] = useState(true);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (userRegistrationSubmit) {
      Router.push('/reseller/login');
    }
  }, [userRegistrationSubmit]);

  useEffect(() => {
    if (!_.isEmpty(verificationData)) {
      setEmail(verificationData.email);
    }
  }, [verificationData]);

  useEffect(() => {
    setLoading(true);
    setLoadingVerification(true);
    console.log('fetchVerifyResellerRegistrationToken');
    const fetchVerifyResellerRegistrationToken = async () => {
      console.log('fetchVerifyResellerRegistrationToken');
      const response = await fetch(
        `${process.env.USER_API_ENDPOINT}/resellers/verify/registration/${token}`,
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
      setVerificationData(data);
      setFetchedVerification(true);
      setLoadingVerification(false);
    };
    fetchVerifyResellerRegistrationToken();
  }, []);

  const fetchRegisterUser = async (userInfoObj) => {
    const response = await fetch(
      `${process.env.USER_API_ENDPOINT}/resellers/register`,
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
    console.log('data reseller user:', data);
    if (data.ok) {
      setUserRegistrationSubmit(true);
    } else {
    }
  };

  const verifyUser = async () => {
    const response = await fetch(
      `${process.env.USER_API_ENDPOINT}/resellers/verify/username/${username}`,
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

  const handleRegistration = async (e) => {
    e.preventDefault();
    disabledSubmitButton();
    if (allFieldsFilled) {
      if (password !== password2) {
        setIsPasswordsMatching(false);
      } else {
        setIsPasswordsMatching(true);
        const res = await verifyUser(username);
        if (!res.valid) {
          setIsUserValid(false);
        } else {
          const registerInfo = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            password: password,
            password2: password2,
          };
          fetchRegisterUser(registerInfo);
        }
      }
    } else {
      setIsPasswordsMatching(false);
    }
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  const disabledSubmitButton = () => {
    if (
      username.length > 0 &&
      email.length > 0 &&
      firstName.length > 0 &&
      lastName.length > 0 &&
      password.length > 0 &&
      password2.length > 0
    ) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  };

  useEffect(() => {
    disabledSubmitButton();
  }, [firstName, lastName, username, email, password, password2]);

  return (
    <Layout>
      <Head>
        <title>Registration | Reseller - Canada Cannabyss</title>
      </Head>
      <Wrapper>
        <VerificationMsg>
          <p>
            You were invited to join our resellers team by{' '}
            <span>
              {loadingVerification &&
                !fetchedVerification &&
                !errorVerification &&
                'Loading'}
              {!loadingVerification &&
                fetchedVerification &&
                !errorVerification &&
                !_.isEmpty(verificationData) &&
                `${verificationData.createdBy.names.firstName} ${verificationData.createdBy.names.lastName}`}
            </span>
          </p>
        </VerificationMsg>
        <Form method='post' onSubmit={handleRegistration}>
          <FaUserPlus />
          <h2>Register Reseller</h2>
          <InputInline>
            <div>
              <Label htmlFor='firstName'>First Name</Label>
              <Input
                type='text'
                name='firstName'
                id='firstName'
                value={firstName}
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
                value={lastName}
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
            value={username}
            autoComplete='off'
            onChange={handleUsername}
          />
          <Label htmlFor='email'>Email</Label>
          <Input
            type='email'
            name='email'
            id='email'
            value={email}
            autoComplete='off'
            onChange={handleEmail}
            disabled
            className='disabled'
          />
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={handlePassword}
          />
          <Label htmlFor='password2'>Confirm Password</Label>
          <Input
            type='password'
            name='password2'
            id='password2'
            value={password2}
            onChange={handlePassword2}
          />
          <Submit type='submit'>Register</Submit>
        </Form>
        {!isPasswordsMatching && <Warning>Passwords must match</Warning>}
        {!isUserValid && <Warning>This username is already taken</Warning>}
      </Wrapper>
    </Layout>
  );
};

export default ResellerRegistration;

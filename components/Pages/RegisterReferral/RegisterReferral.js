import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import {
  Form,
  Input,
  InputInline,
  Label,
  Submit,
  Title,
  TitleDiv,
  Warning,
  Wrapper,
  EmailSentToMessage,
  InvitationMessage,
} from '../../../styles/Pages/RegisterReferral/RegisterReferral';
import Layout from '../../Layout';
import Logo from '../../../assets/img/canada-cannabyss-logo.webp';

const RegisterReferral = (props) => {
  const { referral } = props;

  const [userRegistrationSubmit, setUserRegistrationSubmit] = useState(false);

  const [isReferralValid, setIsReferralValid] = useState(false);
  const [referralUser, setReferralUser] = useState({});
  const [loadingReferralUser, setLoadingReferralUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchedReferralUser, setFetchedReferralUser] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [isUserValid, setIsUserValid] = useState(true);
  const [isPasswordsMatching, setIsPasswordsMatching] = useState(true);

  const [warning, setWarning] = useState(false);
  const [warningMsg, setWarningMsg] = useState([]);
  const [emailSent, setEmailSent] = useState(false);
  const [emailSendTo, setEmailSentTo] = useState('');

  useEffect(() => {
    if (warningMsg.length > 0) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  }, [warningMsg]);

  useEffect(() => {
    setLoadingReferralUser(true);
    getReferralUser();
  }, [fetched]);

  const verifyReferralApi = async () => {
    const res = await fetch(
      `${process.env.USER_API_ENDPOINT}/referral/customer/verify?referral=${referral}`,
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
    const data = await res.json();
    setIsReferralValid(data);
    setLoading(false);
    setFetched(true);
  };

  const getReferralUser = async () => {
    const res = await fetch(
      `${process.env.USER_API_ENDPOINT}/referral/customer?referral=${referral}`,
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
    const data = await res.json();
    setReferralUser(data);
    setFetchedReferralUser(true);
    setLoadingReferralUser(false);
  };

  const fetchRegisterUserReferral = async (userInfoObj) => {
    const response = await fetch(
      `${process.env.USER_API_ENDPOINT}/customers/auth/register/referral`,
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
    console.log('data register:', data);
    if (Array.isArray(data)) {
      const arrayMsgs = [];
      data.map((msg) => {
        arrayMsgs.push(msg.msg);
      });
      setWarningMsg(arrayMsgs);
    }
    console.log('data registration:', data);
    if (data.ok) {
      setUserRegistrationSubmit(true);
      setEmailSentTo(email);
      setEmailSent(true);
      setFirstName('');
      setLastName('');
      setUsername('');
      setEmail('');
      setPassword('');
      setPassword2('');
    }
  };

  useEffect(() => {
    setLoading(true);
    verifyReferralApi();
  }, []);

  const handleRegisterUserReferral = (e) => {
    e.preventDefault();
    const userInfoObj = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password,
      password2: password2,
      referralId: referral,
    };
    fetchRegisterUserReferral(userInfoObj);
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

  return (
    <Layout>
      <Head>
        <title>Register Referral - Canada Cannabyss</title>
        <meta
          name='description'
          content='Register Referral - Canada Cannabyss.'
        />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Register Referral - Canada Cannabyss'
        />
        <meta property='og:type' content='article' />
        <meta
          property='og:url'
          content={`${process.env.MAIN_DOMAIN}/register`}
        />
        <meta
          property='og:description'
          content='Register Referral - Canada Cannabyss.'
        />
        <meta property='og:image' content={Logo} />
        <meta property='og:site_name' content='Canada Cannabyss' />

        {/* Google+ */}
        <meta itemprop='name' content='Register Referral - Canada Cannabyss' />
        <meta
          itemprop='description'
          content='Register Referral - Canada Cannabyss'
        />
        <meta itemprop='image' content={Logo} />

        {/* Twitter */}
        <meta name='twitter:card' content='product' />
        <meta name='twitter:site' content='@canadacannabyss' />
        <meta
          name='twitter:title'
          content='Register Referral - Canada Cannabyss'
        />
        <meta
          name='twitter:description'
          content='Register Referral - Canada Cannabyss.'
        />
        <meta name='twitter:creator' content='@canadacannabyss' />
        <meta name='twitter:image' content={Logo} />
      </Head>
      <Wrapper>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {fetched && (
              <>
                {isReferralValid ? (
                  <>
                    {emailSent && (
                      <>
                        <EmailSentToMessage top='20px'>
                          <p>
                            An account verification link has been sent to{' '}
                            <span>{emailSendTo}</span>
                          </p>
                        </EmailSentToMessage>
                      </>
                    )}
                    {loadingReferralUser ? (
                      <InvitationMessage>
                        You have been invited by <span>Loading...</span>
                      </InvitationMessage>
                    ) : (
                      <>
                        {fetchedReferralUser && (
                          <InvitationMessage>
                            You have been invited by{' '}
                            <span>{`${referralUser.names.firstName} ${referralUser.names.lastName}`}</span>
                          </InvitationMessage>
                        )}
                      </>
                    )}
                    <Form method='post' onSubmit={handleRegisterUserReferral}>
                      <h2>Register</h2>
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
                      {warning && warningMsg.length > 0 && (
                        <>
                          {warningMsg.map((msg) => (
                            <Warning>{msg}</Warning>
                          ))}
                        </>
                      )}
                      <Submit type='submit'>Register</Submit>
                    </Form>
                  </>
                ) : (
                  <h1>Invalid Referral</h1>
                )}
              </>
            )}
          </>
        )}
      </Wrapper>
    </Layout>
  );
};

export default RegisterReferral;

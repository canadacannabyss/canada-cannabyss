import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Background,
  SocialMediaRegisterDiv,
  InputInline,
  Label,
  Input,
  Submit,
  OpenFormButton,
  Wrapper,
  Warning,
  EmailSentToMessage,
} from '../../../../../styles/Components/UI/Navbar/Tabs/Register/Register';
import { fetchLoginUser } from '../../../../../store/actions/user/user';
import { closeLoginTab } from '../../../../../store/actions/navbar';

const RegisterModal = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navbar = useSelector((state) => state.navabar);

  const [registerForm, setRegisterForm] = useState(false);
  const [loginForm, setLoginForm] = useState(true);
  const [resetPasswordForm, setResetPasswordForm] = useState(false);
  const [userRegistrationSubmit, setUserRegistrationSubmit] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [warning, setWarning] = useState(false);
  const [warningMsg, setWarningMsg] = useState([]);
  const [emailSent, setEmailSent] = useState(false);
  const [emailSendTo, setEmailSentTo] = useState('');

  const [resetPasswordEmail, setResetPasswordEmail] = useState('');
  const [resetPasswordWarning, setResetPasswordWarning] = useState(false);
  const [
    resetPasswordWarningMessage,
    setResetPasswordWarningMessage,
  ] = useState('');
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);

  useEffect(() => {
    if (userRegistrationSubmit) {
      handleOpenLoginForm();
    }
  }, [userRegistrationSubmit]);

  useEffect(() => {
    if (warningMsg.length > 0) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  }, [warningMsg]);

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  const onChangeLoginEmail = (e) => {
    setLoginEmail(e.target.value);
  };

  const onChangeLoginPassword = (e) => {
    setLoginPassword(e.target.value);
  };

  const onChangeResetPasswordEmail = (e) => {
    setResetPasswordEmail(e.target.value);
  };

  const handleClose = () => {
    setEmail(false);
    dispatch(closeLoginTab());
  };

  const handleOpenRegisterForm = () => {
    setRegisterForm(true);
    setLoginForm(false);
    setResetPasswordForm(false);
  };

  const handleOpenLoginForm = () => {
    setRegisterForm(false);
    setLoginForm(true);
    setResetPasswordForm(false);
  };

  const handleOpenResetPasswordForm = () => {
    setRegisterForm(false);
    setLoginForm(false);
    setResetPasswordForm(true);
  };

  const fetchRegisterUser = async (userInfoObj) => {
    const response = await fetch(
      `${process.env.USER_API_ENDPOINT}/auth/register`,
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

  const handleSendResetPasswordEmail = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.USER_API_ENDPOINT}/auth/reset-password/sent`,
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

  const checkValidUser = async (userInfoObj) => {
    const response = await fetch(
      `${process.env.USER_API_ENDPOINT}/auth/register`,
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
    if (data.ok) {
      setUserRegistrationSubmit(true);
    }
  };

  const handleRegisterUser = (e) => {
    e.preventDefault();
    const userInfoObj = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password,
      password2: password2,
    };
    fetchRegisterUser(userInfoObj);
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
      <Background onClick={handleClose} />
      {emailSent && (
        <>
          {loginForm && (
            <EmailSentToMessage top='20px'>
              <p>
                An account verification link has been sent to{' '}
                <span>{emailSendTo}</span>
              </p>
            </EmailSentToMessage>
          )}
          {registerForm && (
            <EmailSentToMessage top='20px'>
              <p>
                An account verification link has been sent to{' '}
                <span>{emailSendTo}</span>
              </p>
            </EmailSentToMessage>
          )}
        </>
      )}
      {resetPasswordSuccess && (
        <EmailSentToMessage top='20px'>
          <p>
            Our reset password link was send to:{' '}
            <span>{resetPasswordEmail}</span>
          </p>
        </EmailSentToMessage>
      )}
      <Wrapper>
        {registerForm && (
          <SocialMediaRegisterDiv>
            <h2>Register</h2>
            <form onSubmit={handleRegisterUser}>
              <InputInline>
                <div>
                  <Label htmlFor='firstName'>First Name</Label>
                  <Input
                    onChange={onChangeFirstName}
                    type='text'
                    value={firstName}
                    name='firstName'
                    id='firstName'
                  />
                </div>
                <div>
                  <Label htmlFor='lastName'>Last Name</Label>
                  <Input
                    onChange={onChangeLastName}
                    type='text'
                    value={lastName}
                    name='lastName'
                    id='lastName'
                  />
                </div>
              </InputInline>
              <Label htmlFor='username'>Username</Label>
              <Input
                onChange={onChangeUsername}
                type='text'
                value={username}
                name='username'
                id='username'
              />
              <Label htmlFor='email'>Email</Label>
              <Input
                onChange={onChangeEmail}
                name='email'
                id='email'
                type='email'
                value={email}
              />
              <Label htmlFor='password'>Password</Label>
              <Input
                onChange={onChangePassword}
                name='password'
                id='password'
                type='password'
                value={password}
              />
              <Label htmlFor='password2'>Confirm Password</Label>
              <Input
                onChange={onChangePassword2}
                name='password2'
                id='password2'
                type='password'
                value={password2}
              />
              <Submit>Register</Submit>
            </form>
            <OpenFormButton
              onClick={() => {
                handleOpenLoginForm();
              }}
            >
              Already have an account?
            </OpenFormButton>
            {warning && warningMsg.length > 0 && (
              <>
                {warningMsg.map((msg) => (
                  <Warning>{msg}</Warning>
                ))}
              </>
            )}
          </SocialMediaRegisterDiv>
        )}
        {loginForm && (
          <SocialMediaRegisterDiv>
            <h2>Login</h2>
            <form onSubmit={handleLoginUser}>
              <Label htmlFor='email'>Email</Label>
              <Input
                onChange={onChangeLoginEmail}
                name='email'
                id='email'
                type='email'
                value={loginEmail}
              />
              <Label htmlFor='password'>Password</Label>
              <Input
                onChange={onChangeLoginPassword}
                name='password'
                id='password'
                type='password'
                value={loginPassword}
              />
              <Submit>Login</Submit>
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
        )}
        {resetPasswordForm && (
          <SocialMediaRegisterDiv>
            <h2>Reset Password</h2>
            <form onSubmit={handleSendResetPasswordEmail}>
              <Label htmlFor='email'>Email</Label>
              <Input
                onChange={onChangeResetPasswordEmail}
                name='email'
                id='email'
                type='email'
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
        )}
      </Wrapper>
    </>
  );
};

export default RegisterModal;

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
  BrandDiv,
} from '../../../../../styles/Components/UI/Navbar/Modals/Register/Register';

import {
  closeRegisterForm,
  openLoginForm,
} from '../../../../../store/actions/navbar/navbar';

import Logo from '../../../../../assets/img/canada-cannabyss-logo.svg';

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

  const [warning, setWarning] = useState(false);
  const [warningMsg, setWarningMsg] = useState([]);
  const [emailSent, setEmailSent] = useState(false);
  const [emailSendTo, setEmailSentTo] = useState('');

  function handleOpenLoginForm(): void {
    dispatch(closeRegisterForm());
    dispatch(openLoginForm());
  }

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

  function handleCloseRegisterForm(): void {
    dispatch(closeRegisterForm());
  }
  const handleOpenRegisterForm = () => {
    setRegisterForm(true);
    setLoginForm(false);
    setResetPasswordForm(false);
  };

  const fetchRegisterUser = async (userInfoObj) => {
    const response = await fetch(
      `${process.env.USER_API_ENDPOINT}/customers/auth/register`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfoObj),
      },
    );
    const arrayMsgs = [];
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      data.errors.map((errorMsg) => {
        arrayMsgs.push(errorMsg);
      });
      setWarningMsg(arrayMsgs);
    }
    console.log('data registration:', data);
    if (data.results.ok) {
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

  const checkValidUser = async (userInfoObj) => {
    const response = await fetch(
      `${process.env.USER_API_ENDPOINT}/customers/auth/register`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfoObj),
      },
    );
    const data = await response.json();
    if (data.ok) {
      setUserRegistrationSubmit(true);
    }
  };

  const handleRegisterUser = (e) => {
    e.preventDefault();
    setWarning(false);
    setWarningMsg([]);
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

  return (
    <>
      <Background onClick={() => handleCloseRegisterForm()} />
      {emailSent && (
        <>
          {loginForm && (
            <EmailSentToMessage top="20px">
              <p>
                An account verification link has been sent to{' '}
                <span>{emailSendTo}</span>
              </p>
            </EmailSentToMessage>
          )}
          {registerForm && (
            <EmailSentToMessage top="20px">
              <p>
                An account verification link has been sent to{' '}
                <span>{emailSendTo}</span>
              </p>
            </EmailSentToMessage>
          )}
        </>
      )}

      <Wrapper>
        <SocialMediaRegisterDiv>
          <BrandDiv>
            <img src={Logo} alt="Canada Cannabyss" />
            <div className="sep" />
            <h1>Register</h1>
          </BrandDiv>
          <form onSubmit={handleRegisterUser}>
            <InputInline>
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  onChange={onChangeFirstName}
                  type="text"
                  value={firstName}
                  name="firstName"
                  id="firstName"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  onChange={onChangeLastName}
                  type="text"
                  value={lastName}
                  name="lastName"
                  id="lastName"
                />
              </div>
            </InputInline>
            <Label htmlFor="username">Username</Label>
            <Input
              onChange={onChangeUsername}
              type="text"
              value={username}
              name="username"
              id="username"
            />
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={onChangeEmail}
              name="email"
              id="email"
              type="email"
              value={email}
            />
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={onChangePassword}
              name="password"
              id="password"
              type="password"
              value={password}
            />
            <Label htmlFor="password2">Confirm Password</Label>
            <Input
              onChange={onChangePassword2}
              name="password2"
              id="password2"
              type="password"
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
                <Warning key={msg}>{msg}</Warning>
              ))}
            </>
          )}
        </SocialMediaRegisterDiv>
      </Wrapper>
    </>
  );
};

export default RegisterModal;

import React from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import {
  Background,
  Form,
  Input,
  LoginInfoDiv,
  Sep,
  SocialMediaLoginDiv,
  Submit,
  Title,
  Wrapper,
} from '../../../../../styles/Components/UI/Navbar/Tabs/Login/Login';
import SocialMediaButton from '../../../Buttons/SocialMediaRegisterButton';

const LoginModal = (props) => {
  const handleClose = () => {
    const { handleCloseLogin } = props;
    const close = handleCloseLogin;
    close();
  };

  return (
    <>
      <Background onClick={handleClose} />
      <Wrapper>
        <Form method='POST'>
          <Title>Login</Title>
          <LoginInfoDiv>
            <Input type='email' placeholder='Email' />
            <Input type='password' placeholder='Password' />
            <Submit>Login</Submit>
          </LoginInfoDiv>
        </Form>
        <Sep />
        <SocialMediaLoginDiv>
          <h2>Continue with</h2>
          <ul>
            <SocialMediaButton
              backgroundColor='#4166b2'
              endpoint={`${process.env.userApiEndpoint}/auth/facebook`}
              icon={<FaFacebookF />}
            />
            {/* <SocialMediaButton
              backgroundColor="#3c4146"
              endpoint="http://localhost:5002/auth/github"
              icon={<FaGithub />}
            /> */}
            <SocialMediaButton
              backgroundColor='#4184f4'
              endpoint={`${process.env.userApiEndpoint}/auth/google`}
              icon={<FaGoogle />}
            />
          </ul>
        </SocialMediaLoginDiv>
      </Wrapper>
    </>
  );
};

export default LoginModal;

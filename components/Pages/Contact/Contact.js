import React from 'react';
import Head from 'next/head';

import Layout from '../../Layout';

import {
  Title,
  Wrapper,
  P,
  Form,
  Input,
  TextArea,
  Submit,
} from '../../../styles/Pages/Contact/Contact';

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Us - Canada Cannabyss</title>
      </Head>
      <Wrapper>
        <Title>Contact Us</Title>
        <br />
        <P>
          Canada Cannabyss is committed to reaching out to every one of our
          customers. That is why we put a significant amount of effort into
          having great availability and communication.
        </P>
        <P>
          Please feel free to contact us via your preferred mode about any
          wholesale purchasing including retailing any of our products within
          Canada.
        </P>
        <Form>
          <Input type='text' placeholder='Full Name' />
          <Input type='email' placeholder='Email' />
          <TextArea placeholder='Message' />
          <Submit>Submit</Submit>
        </Form>
      </Wrapper>
    </Layout>
  );
};

export default Contact;

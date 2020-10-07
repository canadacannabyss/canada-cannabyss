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
import Logo from '../../../assets/img/canada-cannabyss-logo.webp';

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Us - Canada Cannabyss</title>
        <meta name='description' content='Contact Us - Canada Cannabyss.' />

        {/* Open Graph */}
        <meta property='og:title' content='Contact Us - Canada Cannabyss' />
        <meta property='og:type' content='article' />
        <meta
          property='og:url'
          content={`${process.env.MAIN_DOMAIN}/contact`}
        />
        <meta
          property='og:description'
          content='Contact Us - Canada Cannabyss.'
        />
        <meta property='og:image' content={Logo} />
        <meta property='og:site_name' content='Canada Cannabyss' />

        {/* Google+ */}
        <meta itemprop='name' content='Contact Us - Canada Cannabyss' />
        <meta itemprop='description' content='Contact Us - Canada Cannabyss' />
        <meta itemprop='image' content={Logo} />

        {/* Twitter */}
        <meta name='twitter:card' content='product' />
        <meta name='twitter:site' content='@canadacannabyss' />
        <meta name='twitter:title' content='Contact Us - Canada Cannabyss' />
        <meta
          name='twitter:description'
          content='Contact Us - Canada Cannabyss.'
        />
        <meta name='twitter:creator' content='@canadacannabyss' />
        <meta name='twitter:image' content={Logo} />
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

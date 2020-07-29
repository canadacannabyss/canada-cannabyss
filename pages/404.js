import React from 'react';
import { FaSadCry } from 'react-icons/fa';
import { Wrapper, ErrorMessageDiv } from '../styles/Pages/Error/Error';
import Layout from '../components/Layout';

const Page404 = () => {
  return (
    <Layout>
      <Wrapper>
        <ErrorMessageDiv>
          <FaSadCry />
          <h1>Something went wrong.</h1>
        </ErrorMessageDiv>
      </Wrapper>
    </Layout>
  );
};

export default Page404;

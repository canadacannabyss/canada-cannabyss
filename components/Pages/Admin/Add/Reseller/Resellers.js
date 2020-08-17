import React, { useState } from 'react';
import Head from 'next/head';
import _ from 'lodash';
import { connect } from 'react-redux';
import { FaUser, FaSpinner } from 'react-icons/fa';
import {
  Wrapper,
  Form,
  Input,
  Label,
  Submit,
  Title,
  TitleDiv,
  Warning,
  Loading,
  SuccessMsg,
} from '../../../../../styles/Pages/Admin/Add/Resellers';
import AdminLayout from '../../../../AdminLayout';

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    user,
  };
};

const Resellers = (props) => {
  const { user } = props;
  const [email, setEmail] = useState('');
  const [sentTo, setSentTo] = useState('');
  const [data, setData] = useState({});
  const [fetched, setFetched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState(false);
  const [warningMsg, setWarningMsg] = useState([]);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const fetchNewResellerUser = async (resellerUserObj) => {
    console.log('resellerUserObj:', resellerUserObj);
    const response = await fetch(
      `${process.env.USER_API_ENDPOINT}/admin/auth/register/reseller/start`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resellerUserObj),
      }
    );
    const data = await response.json();
    console.log('data:', data);
    if (Array.isArray(data)) {
      const msgs = [];
      data.map((msg) => {
        msgs.push(msg.msg);
      });
      setWarningMsg(msgs);
      setWarning(true);
    } else {
      setData(data);
      setFetched(true);
      setWarningMsg('');
      setWarning(false);
      setSentTo(email);
    }
    setLoading(false);
  };

  const onSubmitNewResellerUser = (e) => {
    setLoading(true);
    setWarning(false);
    setFetched(false);
    e.preventDefault();
    const resellerUserObj = {
      email: email,
      createdBy: user.data._id,
    };
    fetchNewResellerUser(resellerUserObj);
    setEmail('');
  };

  return (
    <AdminLayout>
      <Head>
        <title>Create reseller | Administrator - Canada Cannabyss</title>
      </Head>
      <Wrapper>
        {fetched && !loading && !_.isEmpty(data) && (
          <SuccessMsg>
            <p>
              Reseller invation was sent to <span>{sentTo}</span>
            </p>
          </SuccessMsg>
        )}
        <Form method='post' onSubmit={onSubmitNewResellerUser}>
          {loading && !warning ? (
            <Loading>
              <FaSpinner />
            </Loading>
          ) : (
            <>
              <FaUser />
              <h2>Create Resellers Account</h2>
              <Label htmlFor='email'>Email</Label>
              <Input
                type='text'
                name='email'
                id='email'
                value={email}
                autoComplete='off'
                onChange={onChangeEmail}
              />
              <Submit className='register' type='submit'>
                Create Reseller
              </Submit>
            </>
          )}
        </Form>
        {warning &&
          warningMsg.length > 0 &&
          warningMsg.map((wMsg) => <Warning>{wMsg}</Warning>)}
      </Wrapper>
    </AdminLayout>
  );
};

export default connect(mapStateToProps)(Resellers);

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import _ from 'lodash';
import { FaSpinner, FaSadTear } from 'react-icons/fa';
import {
  Wrapper,
  HeaderDiv,
  Title,
  ReferralLink,
  InvitedFriendsTitle,
  Credits,
  NoInvitedFriends,
  ContainerLoading,
  WrapperLoading,
} from '../../../styles/Pages/Account/Invite';
import Layout from '../../Layout';
import InvitedFriendsList from '../../UI/Lists/Account/InvitedFriends/InvitedFriendsList';

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    user,
  };
};

const InviteFriends = (props) => {
  const { user } = props;

  const [invitedFriends, setInvitedFriends] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);

  const fetchAllUserInvitedFriends = async () => {
    const response = await fetch(
      `${process.env.USER_API_ENDPOINT}/referral/customer/get/invited-friends/${user.data._id}`,
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
    setInvitedFriends(data);
    setLoading(false);
    setFetched(true);
  };

  useEffect(() => {
    setLoading(true);
    fetchAllUserInvitedFriends();
  }, []);

  const onCopyToClipboard = () => {
    console.log('CLick');
    var range = document.createRange();
    range.selectNode(document.getElementById('referral'));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand('copy');
    window.getSelection().removeAllRanges(); // to deselect
  };

  return (
    <Layout>
      <Head>
        <title>Invite Friends | Account - Canada Cannabyss</title>
      </Head>
      <Wrapper>
        <HeaderDiv>
          <div>
            <Title>Invite Friends</Title>
            {!_.isEmpty(user.data) && (
              <ReferralLink>
                <p>Share this referral link to a friend:</p>
                <span
                  id='referral'
                  onClick={() => {
                    onCopyToClipboard();
                  }}
                >
                  {`${process.env.SECURED_MAIN_DOMAIN}/register?referral=${user.data.referral._id}`}
                </span>
              </ReferralLink>
            )}
          </div>
          <Credits>
            <div className='creditP'>
              <p>Credits:</p>
            </div>
            <div className='creditSpan'>
              <span>{user.data.credits}</span>
            </div>
          </Credits>
        </HeaderDiv>
        <InvitedFriendsTitle>Invited Friends:</InvitedFriendsTitle>
        {loading && (
          <ContainerLoading>
            <WrapperLoading />
            <WrapperLoading />
            <WrapperLoading />
            <WrapperLoading />
          </ContainerLoading>
        )}
        {invitedFriends.length === 0 && !loading && fetched && (
          <NoInvitedFriends>No invited friends</NoInvitedFriends>
        )}
        {!_.isEmpty(invitedFriends) && !loading && fetched && (
          <InvitedFriendsList invitedFriends={invitedFriends} />
        )}
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(InviteFriends);

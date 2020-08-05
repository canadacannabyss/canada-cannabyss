import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
  Grid,
  LinkTo,
  MenuDiv,
  MenuTitle,
  Wrapper,
  UserInfoDiv,
  UserInfoImageName,
  UserInfoImage,
  UserInfoDate,
  UserInfoName,
  ReferralLink,
  Sep,
  CopyToClipBoard,
  MenusGrid,
  Menu,
} from '../../../styles/Pages/Account/Account';
import Layout from '../../Layout';
import DateFormatter from '../../../utils/DateFormatter';

const mapStateToProps = (state) => {
  const { user } = state;
  return { user };
};

const Account = (props) => {
  const { user } = props;

  const dateFormatter = new DateFormatter();

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
        <title>Account - Canada Cannabyss</title>
      </Head>
      <Wrapper>
        <UserInfoDiv>
          {!_.isEmpty(user.data) &&
            !user.loading &&
            user.fetched &&
            !user.errors && (
              <>
                <UserInfoImage image={user.data.profileImage.url} />
                <UserInfoImageName>
                  <UserInfoName>
                    {user.data.names.firstName} {user.data.names.lastName}
                  </UserInfoName>
                  <UserInfoDate>
                    Since{' '}
                    {dateFormatter.formatDateFullDate(user.data.createdOn)}
                  </UserInfoDate>
                  <ReferralLink>
                    <p>Referral:</p>
                    <span
                      id='referral'
                      onClick={() => {
                        onCopyToClipboard();
                      }}
                    >
                      {`${process.env.mainDomain}/register?referral=123456789`}
                    </span>
                  </ReferralLink>
                </UserInfoImageName>
              </>
            )}
        </UserInfoDiv>
        <Sep />
        <MenusGrid>
          <Menu>
            <h3>Billings & Shipping</h3>
            <ul>
              <li>
                <Link href='/account/billing' as='/account/billing'>
                  <a>Billing List</a>
                </Link>
              </li>
              <li>
                <Link href='/account/shipping' as='/account/shipping'>
                  <a>Shipping List</a>
                </Link>
              </li>
            </ul>
          </Menu>
          <Menu>
            <h3>Payments</h3>
            <ul>
              <li>
                <Link href='/account/orders' as='/account/orders'>
                  <a>Credit Card</a>
                </Link>
              </li>
              <li>
                <Link href='/account/orders' as='/account/orders'>
                  <a>Cryptocurrency</a>
                </Link>
              </li>
              <li>
                <Link href='/account/orders' as='/account/orders'>
                  <a>e-Tranfer</a>
                </Link>
              </li>
            </ul>
          </Menu>
          <Menu>
            <h3>Orders</h3>
            <ul>
              <li>
                <Link href='/account/orders' as='/account/orders'>
                  <a>Orders</a>
                </Link>
              </li>
              <li>
                <Link href='/account/orders' as='/account/orders'>
                  <a>Returns</a>
                </Link>
              </li>
            </ul>
          </Menu>
          <Menu>
            <h3>Miscellaneous</h3>
            <ul>
              <li>
                <Link href='/account/orders' as='/account/orders'>
                  <a>Reviews</a>
                </Link>
              </li>
              <li>
                <Link href='/account/orders' as='/account/orders'>
                  <a>Invite friend</a>
                </Link>
              </li>
            </ul>
          </Menu>
          <Menu>
            <h3>Support</h3>
            <ul>
              <li>
                <Link href='/account/orders' as='/account/orders'>
                  <a>Message support</a>
                </Link>
              </li>
            </ul>
          </Menu>
        </MenusGrid>
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(Account);

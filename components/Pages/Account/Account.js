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
import Logo from '../../../assets/img/canada-cannabyss-logo.webp';

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
        <meta name='description' content='Account - Canada Cannabyss.' />

        {/* Open Graph */}
        <meta property='og:title' content='Account - Canada Cannabyss' />
        <meta property='og:type' content='article' />
        <meta
          property='og:url'
          content={`${process.env.SECURED_MAIN_DOMAIN}/account`}
        />
        <meta property='og:description' content='Account - Canada Cannabyss.' />
        <meta property='og:image' content={Logo} />
        <meta property='og:site_name' content='Canada Cannabyss' />

        {/* Google+ */}
        <meta itemprop='name' content='Account - Canada Cannabyss' />
        <meta itemprop='description' content='Account - Canada Cannabyss' />
        <meta itemprop='image' content={Logo} />

        {/* Twitter */}
        <meta name='twitter:card' content='product' />
        <meta name='twitter:site' content='@canadacannabyss' />
        <meta name='twitter:title' content='Account - Canada Cannabyss' />
        <meta
          name='twitter:description'
          content='Account - Canada Cannabyss.'
        />
        <meta name='twitter:creator' content='@canadacannabyss' />
        <meta name='twitter:image' content={Logo} />
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
                      {`${process.env.SECURED_MAIN_DOMAIN}/register?referral=${user.data.referral._id}`}
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
                {/* <Link
                  href='/account/payment/credit-card'
                  as='/account/credit-card'
                > */}
                <a className='disabled'>Credit Card</a>
                {/* </Link> */}
              </li>
              <li>
                {/* <Link href='/account/payment/cryptocurrency' as='/account/payment/cryptocurrency'> */}
                <a className='disabled'>Cryptocurrency</a>
                {/* </Link> */}
              </li>
              <li>
                {/* <Link href='/account/payment/e-transfer' as='/account/payment/e-transfer'> */}
                <a className='disabled'>e-Tranfer</a>
                {/* </Link> */}
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
                {/* <Link href='/account/returns' as='/account/returns'> */}
                <a className='disabled'>Returns</a>
                {/* </Link> */}
              </li>
            </ul>
          </Menu>
          <Menu>
            <h3>Miscellaneous</h3>
            <ul>
              <li>
                <Link href='/account/reviews' as='/account/reviews'>
                  <a>Reviews</a>
                </Link>
              </li>
              <li>
                <Link href='/account/invite' as='/account/invite'>
                  <a>Invite friend</a>
                </Link>
              </li>
            </ul>
          </Menu>
          <Menu>
            <h3>Support</h3>
            <ul>
              <li>
                {/* <Link href='/account/orders' as='/account/orders'> */}
                <a className='disabled'>Message support</a>
                {/* </Link> */}
              </li>
            </ul>
          </Menu>
        </MenusGrid>
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(Account);

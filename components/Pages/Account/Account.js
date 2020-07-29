import Link from 'next/link';
import React from 'react';
import {
  Grid,
  LinkTo,
  MenuDiv,
  MenuTitle,
  Wrapper,
} from '../../../styles/Pages/Account/Account';
import Layout from '../../Layout';

const Account = () => {
  return (
    <Layout>
      <Wrapper>
        <Grid>
          <div>
            <MenuDiv>
              <MenuTitle>Support</MenuTitle>
              <LinkTo>
                <Link href='/about' as='/about'>
                  <a>About Us</a>
                </Link>
              </LinkTo>
              <LinkTo>
                <Link href='/contact' as='/contact'>
                  <a>Contact Us</a>
                </Link>
              </LinkTo>
            </MenuDiv>
          </div>
          <div>
            <MenuDiv>
              <MenuTitle>Billing</MenuTitle>
              <LinkTo>
                <Link href='/account/orders' as='/account/orders'>
                  <a>Orders</a>
                </Link>
              </LinkTo>
              {/* <LinkTo>
                <Link
                  href="/account/payment-method"
                  as="/account/payment-methods"
                >
                  <a>Payment Methods</a>
                </Link>
              </LinkTo>
              <LinkTo>
                <Link href="/account/addresses" as="/account/addresses">
                  <a>Addresses</a>
                </Link>
              </LinkTo> */}
            </MenuDiv>
          </div>
          {/* <div>
            <MenuDiv>
              <MenuTitle>Account Details</MenuTitle>
              <LinkTo>
                <Link href="/account/update" as="/account/update">
                  <a>Update Details</a>
                </Link>
              </LinkTo>
              <LinkTo>
                <Link
                  href="/account/change-password"
                  as="/account/change-password"
                >
                  <a>Change Password</a>
                </Link>
              </LinkTo>
            </MenuDiv>
          </div>
          <div>
            <MenuDiv>
              <MenuTitle>Preferences</MenuTitle>
              <LinkTo>
                <Link href="/account/preferences" as="/account/preferences">
                  <a>Preferences</a>
                </Link>
              </LinkTo>
            </MenuDiv>
          </div> */}
        </Grid>
      </Wrapper>
    </Layout>
  );
};

export default Account;

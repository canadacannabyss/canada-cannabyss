import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Layout from '../../Layout';

import {
  Wrapper,
  H1,
  H2,
  Date,
  P,
  LinkTo,
  Ul,
} from '../../../styles/Pages/ProcessingPolicy/ProcessingPolicy';

const ProcessingPolicy = () => {
  return (
    <Layout>
      <Head>
        <title>Processing Policy - Canada Cannabyss</title>
      </Head>
      <Wrapper>
        <H1>Processing Policy</H1>
        <Date>TUESDAY, MAY 21, 2019</Date>
        <P>
          All orders have a processing time of 24-72 hours regardless of
          shipping method selected. Domestic orders have the option of either
          FedEx or Canada Post. All transit times are in business days (Monday -
          Friday).
        </P>
        <P>
          For Canada Post and FedEx orders, any shipping confirmations received
          between Saturday-Sunday, those packages will not leave our warehouse
          until the following business day. Pick up day is counted as Day 0.
        </P>
        <P>
          Please Note: We do not process orders on all major holidays! Your
          order will continue processing the following business day. 
          <b>All shipping time frames are counted in business days.</b>
        </P>
        <H2>Order Tracking</H2>
        <P>
          While we strive to offer the most expedient and reliable service,
          Canada Cannabyss does not and cannot guarantee transit and delivery
          times. After placing your order, your tracking number will be sent to
          the email address specified on your account. Tracking information may
          also be accessed by visiting (
          <Link href='/processing-policy' as='/processing-policy'>
            <LinkTo>https://www.canadacannabyss.com/orders/</LinkTo>
          </Link>
          ) after logging in.
        </P>
        <H2>Lost & Undelivered Packages</H2>
        <P>
          Lost or undelivered packages are not the responsibility of Canada
          E-Cigs, and any issues arising from packages not received must be
          resolved by the customer, with the postal carrier in use. Canada
          E-Cigs strives in the upkeep and resolution of such matters, and any
          erroneous shipping issues must be reported within 24 hours of the last
          tracking update.
        </P>
        <P>
          Please note that erroneous and incomplete address submissions inputted
          by the user will cause delays, returns, and other issues that will
          impact the successful shipping of your order. Canada Cannabyss is not
          responsible for any and all costs associated with erroneous and
          incorrect address submissions entered by the user.
        </P>
        <H2>Order Discrepancies</H2>
        <P>
          If your item was damaged, missing, or incorrect you must email us
          within 48 hours of the packages delivery. Once your claim has been
          submitted, reviewed, and approved, we will assist you with correcting
          this issue.
        </P>
        <P>
          Shipping charges are non-refundable. Refunds are only applied to items
          that are returned to our warehouse. If the return of your package
          incurred any type of return fees, those charges will be deducted from
          your refund for the returned items.
        </P>
      </Wrapper>
    </Layout>
  );
};

export default ProcessingPolicy;

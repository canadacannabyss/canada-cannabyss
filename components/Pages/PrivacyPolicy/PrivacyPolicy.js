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
} from '../../../styles/Pages/PrivacyPolicy/PrivacyPolicy';
import Logo from '../../../assets/img/canada-cannabyss-logo.webp';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy - Canada Cannabyss</title>
        <meta name='description' content='Privacy Policy - Canada Cannabyss.' />

        {/* Open Graph */}
        <meta property='og:title' content='Privacy Policy - Canada Cannabyss' />
        <meta property='og:type' content='article' />
        <meta
          property='og:url'
          content={`${process.env.SECURED_MAIN_DOMAIN}/privacy-policy`}
        />
        <meta
          property='og:description'
          content='Privacy Policy - Canada Cannabyss.'
        />
        <meta property='og:image' content={Logo} />
        <meta property='og:site_name' content='Canada Cannabyss' />

        {/* Google+ */}
        <meta itemprop='name' content='Privacy Policy - Canada Cannabyss' />
        <meta
          itemprop='description'
          content='Privacy Policy - Canada Cannabyss'
        />
        <meta itemprop='image' content={Logo} />

        {/* Twitter */}
        <meta name='twitter:card' content='product' />
        <meta name='twitter:site' content='@canadacannabyss' />
        <meta
          name='twitter:title'
          content='Privacy Policy - Canada Cannabyss'
        />
        <meta
          name='twitter:description'
          content='Privacy Policy - Canada Cannabyss.'
        />
        <meta name='twitter:creator' content='@canadacannabyss' />
        <meta name='twitter:image' content={Logo} />
      </Head>
      <Wrapper>
        <H1>Privacy Policy</H1>
        <Date>TUESDAY, MAY 21, 2019</Date>
        <P>
          Your privacy is important to us. This Privacy Policy (<b>"Policy"</b>)
          addresses how Canada Cannabyss, utilize and disclose personal
          information about you when you use the websites we operate and any
          other websites that link to the Policy to access our products or
          services (collectively, the <b>"Services"</b>).
        </P>
        <P>
          This Policy is incorporated into our 
          <Link href='/terms-of-use' as='/terms-of-use'>
            <LinkTo>Terms of Use</LinkTo>
          </Link>
          , which also apply when you access or use the Website. We may change
          this Policy from time to time. Please check the{' '}
          <b>"Effective Date"</b>
          legend at the top of this page to see when this Policy was last
          revised. Any changes to this Policy will become effective when we post
          the revised Policy on the Website.
        </P>
        <P>
          In order to offer an enjoyable and premium experience on our Websites,
          we collect certain information about you, including Personal
          Information. <b>"Personal Information"</b> means information that
          specifically identifies you, or when combined with other information
          we have, can be used to identify, locate or contact you.
        </P>
        <H2>How We Collect Your Personal Information</H2>
        <P>
          We collect your Personal Information from a variety of ways. Depending
          on how you use our Website, we collect your Personal Information when
          you, for example:
        </P>
        <Ul>
          <li>Buy or use any of our products or services;</li>
          <li>Access our Websites and verify your age;</li>
          <li>Subscribe to newsletters, alerts, or other services from us;</li>
          <li>
            Contact us through various channels, or ask for information about a
            publication, product or service;
          </li>
          <li>Take part in a content, survey or sweepstakes;</li>
          <li>Visit or browse our Websites;</li>
          <li>
            Have given permission to other companies to share information about
            you;
          </li>
          <li>
            Where your information is available from another public source; or
          </li>
        </Ul>
        <P>
          We also collect information from certain organizations, where
          appropriate and to the extent we have legal grounds to do so. These
          include third-party advertising, social media platforms, and connected
          network providers.
        </P>
        <P>
          We collect Personal Information that you provide to us directly, such
          as:
        </P>
        <Ul>
          <li>Your full name;</li>
          <li>Telephone number;</li>
          <li>Shipping address;</li>
          <li>
            Payment information (credit or debit card number, name on card,
            expiration date, CCV code and billing address);
          </li>
          <li>
            Account information (including your name and contact details, as
            well as any account preferences you have created within your
            account);
          </li>
          <li>
            Your date of birth, and other information included in a
            government-issued identification;
          </li>
          <li>
            Transaction history (which shows us products and services you have
            requested, payments and credits and any returns processed);
          </li>
          <li>
            E-mail address (including attached files and other information you
            provide);
          </li>
          <li>
            Location data (for example, a location is derived from your Internet
            Protocol (“IP”) address or data such as a zip code or name of a town
            or city);
          </li>
          <li>
            Your browsing history (if you have given us permission, we may
            collect the categories of websites you have browsed on your
            device(s), and use these interests to send you personalized
            marketing or advertising. You can opt-out of advertising through
            Cookies); and
          </li>
          <li>
            Any other information you voluntarily provide so that we can
            communicate with you (for example, when you contact us to provide
            customer feedback).
          </li>
          <li>
            Cookies from your web browser (If you allow) to store age
            verification
          </li>
        </Ul>
        <P>
          If you are representing or acting on behalf of a wholesaler,
          distributor or another third party, we may ask you to provide
          information related to the company (e.g., company name, store/business
          address phone and fax number) in conjunction with certain of your
          Personal Information (e.g., your name).
        </P>
        <H2>How We Use Your Information</H2>
        <P>
          We may use Personal Information or other non-personally identifiable
          information collected about you in the following ways:
        </P>
        <Ul>
          <li>
            When you create an account to become a customer, including to manage
            any account preferences you have created within your account;
          </li>
          <li>To verify your age when entering our Websites;</li>
          <li>
            To process payments and credits, or returns requested, consistent
            with our applicable return policies;
          </li>
          <li>
            To provide you with our Services. For example, we engage third-party
            service providers to verify your identity. Although we do not store
            such Personal Information (the third party does), we may need to
            request it in order to provide you with the Services you request or
            pay for.
          </li>
          <li>
            To identify your preferences so we can tailor our content and
            Services to your interests;
          </li>
          <li>To notify you about changes to our Services;</li>
          <li>To operate, maintain, improve, and develop our Services;</li>
          <li>To troubleshoot technical difficulties and errors;</li>
          <li>
            To add you to our newsletter mailing list, upon your request, in
            order to send you information and updates about our Services, or
            subscribe or unsubscribe you to one of our mailing lists upon your
            request.
          </li>
          <li>
            To send you marketing communications and promotional material you
            have expressly requested, for example, on new products, price
            discounts or sales.
          </li>
          <li>
            When you connect with us via customer feedback and support, this
            provides us a mechanism to request and receive information from our
            customers about how we can improve our Services and Website designs;
          </li>
          <li>
            When you participate in contests, sweepstakes or other promotions;
          </li>
          <li>
            When you apply for a job opening. The information you provide may
            include your resume, cover letter and other data related to your
            career experience, helping us assess your candidacy to the job
            opening;
          </li>
          <li>
            To manage and secure our Websites, network systems, and other
            assets, for example, for security protection and fraud prevention;
          </li>
          <li>
            To resolve disputes, enforce our policies (including investigation
            of potential violations thereof), or for law enforcement purposes;
          </li>
          <li>
            Otherwise communicate with you to respond to issues and inquiries of
            all types.
          </li>
        </Ul>
        <H2>Sharing of Personal Information Collected</H2>
        <P>
          We do not sell or rent your Personal Information to anyone outside
          Canada Cannabyss, and we do not disclose your Personal Information,
          except as provided in this Policy:
        </P>
        <Ul>
          <li>
            Third-party vendors and service providers that perform services on
            our behalf, as needed to carry out their work for us, which may
            include providing inventory and marketing management,
            applicant/employment mailing services, financial services, age
            verification services, analytic services or web hosting. This
            sharing is only done when those entities are performing functions
            solely on our behalf and they are not permitted to store such
            information except as needed to perform our work or as required by
            law;
          </li>
          <li>With your consent</li>
        </Ul>
        <H2>Security of Your Personal Information</H2>
        <P>
          Your security is a top priority for us. We have put in place
          appropriate physical, electronic, and managerial procedures to
          safeguard and secure the information we collect to prevent
          unauthorized access, maintain data accuracy, and ensure the correct
          use of your Personal Information.
        </P>
        <P>
          The shopping cart information, including any credit card or address
          information is transmitted to us in a secure way via a secure medium
          known as Secure Sockets Layer encryption, or SSL, so it cannot be read
          by others. 
          <b>
            Please do not provide sensitive personal information to us by
            e-mail. Additionally, we will never ask for your secure personal or
            account information by an unsolicited means of communication.
          </b>
        </P>
        <P>
          You are responsible for keeping your personal and account information
          secure and not sharing it with others. In addition, if you are using a
          shared computer to access the Websites, we recommend that you log out
          of your account before ending your browser session so that your
          account will not be used by anyone other than yourself.
        </P>
        <P>
          Unfortunately, the transmission of information online is not
          completely secure. Although we do our best to protect all information
          collected through the Services, we cannot completely guarantee the
          security of your Personal Information collected and/or transmitted
          through the Services. Any transmission of information is at your own
          risk.
        </P>
      </Wrapper>
    </Layout>
  );
};

export default PrivacyPolicy;

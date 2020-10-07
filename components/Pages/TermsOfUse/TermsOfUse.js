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
} from '../../../styles/Pages/TermsOfUse/TermsOfUse';
import Logo from '../../../assets/img/canada-cannabyss-logo.webp';

const TermsOfUse = () => {
  return (
    <Layout>
      <Head>
        <title>Terms of Use - Canada Cannabyss</title>
        <meta name='description' content='Terms of Use - Canada Cannabyss' />

        {/* Open Graph */}
        <meta property='og:title' content='Terms of Use - Canada Cannabyss' />
        <meta property='og:type' content='article' />
        <meta
          property='og:url'
          content={`${process.env.MAIN_DOMAIN}/terms-of-use`}
        />
        <meta
          property='og:description'
          content='Terms of Use - Canada Cannabyss.'
        />
        <meta property='og:image' content={Logo} />
        <meta property='og:site_name' content='Canada Cannabyss' />

        {/* Google+ */}
        <meta itemprop='name' content='Terms of Use - Canada Cannabyss' />
        <meta
          itemprop='description'
          content='Terms of Use - Canada Cannabyss'
        />
        <meta itemprop='image' content={Logo} />

        {/* Twitter */}
        <meta name='twitter:card' content='product' />
        <meta name='twitter:site' content='@canadacannabyss' />
        <meta name='twitter:title' content='Terms of Use - Canada Cannabyss' />
        <meta
          name='twitter:description'
          content='Terms of Use - Canada Cannabyss.'
        />
        <meta name='twitter:creator' content='@canadacannabyss' />
        <meta name='twitter:image' content={Logo} />
      </Head>
      <Wrapper>
        <H1>Terms of Use</H1>
        <Date>TUESDAY, MAY 21, 2019</Date>
        <P>
          Welcome to the Canada Cannabyss Website, which include but are not
          limited to {' '}
          <Link href='/' as='/'>
            <LinkTo>www.canadacannabyss.com</LinkTo>
          </Link>
          ,  (individually a <b>"Website,"</b>).
        </P>
        <P>
          These Terms of Use (<b>"Terms"</b>) apply to the Websites or any
          Website, owned or operated by Canada Cannabyss or its affiliates or
          subsidiaries (collectively <b>"Canada Cannabyss,""we," "us," "our"</b>
          ), that link to these Terms, as well as to the services offered by
          Canada Cannabyss, including this Website and any other features,
          content, services, or applications offered from time to time by Canada
          Cannabyss in connection with the Websites (collective, the{' '}
          <b>"Services"</b>).
        </P>
        <P>
          Please read these Terms carefully before using the Websites. Your
          access to and use of the Websites is subject to these Terms. These
          Terms are a legal agreement between you and us, and they contain
          important information on your legal rights, remedies and obligations.
          By accessing, browsing or otherwise using the Website, you (i)
          acknowledge that you have read, understood, and agreed to be bound by
          these Terms and that you agree to comply with all applicable laws,
          rules, policies and regulations; and (ii) represent that you are an
          adult and have the legal capacity to enter a contract in the
          jurisdiction where you reside. These Websites are not for individuals
          under 19 years of age. We do not knowingly collect or solicit any
          information from anyone under the age of 19 on our Websites.
        </P>
        <P>
          If you do not agree to these Terms, you may not access, browse or use
          the Websites and you should discontinue these activities immediately.
          YOU MAY NOT USE ANY OF THE WEBSITES FOR ANY PURPOSE THAT IS UNLAWFUL
          OR PROHIBITED BY THESE TERMS. YOUR ACCESS TO ANY WEBSITE MAY BE
          TERMINATED IMMEDIATELY IN CANADA E-CIG’S SOLE DISCRETION, WITH OR
          WITHOUT NOTICE, IF YOU FAIL TO COMPLY WITH ANY PROVISIONS OF THESE
          TERMS, OR FOR ANY OTHER REASON, OR NO REASON.
        </P>
        <H2>
          YOUR USE AND YOUR CONTENT; LICENSE GRANT; RIGHT TO MONITOR AND
          EDITORIAL CONTROL
        </H2>
        <P>
          You may access, browse and use the Websites and Website Content only
          for your use on a computer, mobile phone or other Internet-compatible
          device to enable you to use the Websites. You may not copy, reproduce,
          modify, distribute, transmit, display, perform, publish or otherwise
          use or exploit, through any means or media, any of the Website
          Content, except:
        </P>
        <P>As expressly authorized by Canada Cannabyss in writing;</P>
        <P>
          To temporarily store files that are automatically cached by your web
          browser for display enhancement purposes;
        </P>
        <P>
          To print or download one copy of a reasonable number of pages of the
          Websites for your personal, non-commercial use and not for further
          reproduction, publication or distribution;
        </P>
        <P>
          To share the Websites or updates of the Websites, or to link to a
          reasonable number of pages of the Websites, provided you do so in a
          way that is fair and legal and does not damage our reputation or take
          advantage of it, and provided you do not establish a link in such a
          way as to suggest any form of association, approval or endorsement on
          our part. We reserve the right to withdraw linking permission in our
          sole discretion and without notice.
        </P>
        <P>
          Certain features of our Websites may allow you to post, upload,
          transmit or submit certain materials, content, information or ideas
          ("Your Content"). Except for your user information required to be
          provided in connection with your account, we do not ask for, nor do we
          wish to receive, any confidential, secret or proprietary information
          from you through the Websites, by e-mail or in any other way. By
          providing Your Content to us, you: (i) represent and warrant that Your
          Content is original to you, that you own or otherwise control all of
          the rights in Your Content, or that you have the rights necessary to
          grant to us the license to Your Content, and that Your Content does
          not violate any rights, including the rights of privacy, of any party
          and does not otherwise violate the law; and (ii) grant to us and our
          affiliates a world-wide, non-exclusive, fully paid-up, royalty-free,
          unrestricted, perpetual, irrevocable, fully transferable, assignable
          and fully sub-licensable (through multiple tiers) right and license,
          to copy, reproduce, edit, modify, distribute, transmit, translate,
          display, perform, publish, sell, adapt, create derivative works from,
          and otherwise use Your Content, for any purpose that we may choose, in
          our sole discretion, and through any means or media, whether now
          existing or subsequently developed, and without any compensation to
          you or any third party (it being understood that the foregoing shall
          include the right to exploit any and all intellectual property or
          proprietary rights in Your Content including, without limitation,
          rights protected under applicable copyright, trademark, trade secret,
          patent and other laws throughout the world). IF YOU DO NOT WISH TO
          GRANT THE RIGHTS GRANTED IN THIS PARAGRAPH, DO NOT SHARE, SUBMIT OR
          POST YOUR CONTENT ON OR THROUGH OUR WEBSITES.
        </P>
        <P>
          We are not responsible for maintaining Your Content, and we may remove
          Your Content from the Website at any time, for any and no reason, and
          without notice to you. We reserve the right, but do not have an
          obligation, to monitor and/or review all materials posted to the
          Websites, or through the Website's Services or features, by its users,
          and we are not responsible for any such materials. You are solely
          responsible and liable for Your Content.
        </P>
        <P>
          However, we further reserve the right at all times to disclose any
          information as necessary to satisfy any law, regulation or government
          request, or to edit, refuse to post or to remove any information or
          materials, in whole or in part, that in our sole discretion are
          objectionable or in violation of these Terms or applicable law. We may
          also impose limits on certain features or restrict your access to part
          or all of the features or Services without notice or penalty if we
          believe that you are in breach of these Terms or applicable law, or
          for any other reason, all without notice or liability.
        </P>
        <H2>YOUR REGISTRATION AND YOUR USER INFORMATION</H2>
        <P>
          Some of the Services on our Websites are only available if you
          register to create an account. When any of the Services on the
          Websites require you to register with us or otherwise provide user
          information, you must complete the registration process by providing
          us with complete and accurate information. You grant Canada Cannabyss,
          and other Canada E-Cig Parties with whom we share your information,
          the right to use, store, monitor, retrieve and transmit your account
          and user information in connection with the operations of the
          Websites. Our information collection and use policies with respect to
          the privacy of your information are set forth in our Privacy Policy,
          which is incorporated in these Terms by reference for all purposes.
        </P>
        <P>
          You are solely responsible for maintaining the confidentiality of your
          personal and account information. You are also solely responsible for
          any and all activities that occur under your account and to maintain
          the completeness and accuracy of your user information, and any loss
          caused by your failure to do so is your responsibility. You must
          notify us immediately of any suspected or actual unauthorized use of
          your account or user information, and of any and all other security
          breaches. Please refer to your Privacy Policy for contact information.
        </P>
        <P>
          We reserve the right to terminate your account or to refuse Services
          to you, without prior notice to you, at any time and for any or no
          reason. Without limiting the above, we will, in appropriate
          circumstances, permanently terminate your account registration and
          remove Your Content or user information from the Websites. You have
          the right to cancel your registration at any time. You may cancel your
          registration by following the instructions on the Websites.
        </P>
        <P>
          If you voluntarily terminate your account registration or allow it to
          lapse, you may reactivate it at any time through the account interface
          on our Websites. Accounts terminated by us for any type of abuse,
          including without limitation a violation of these Terms, may not be
          reactivated.
        </P>
        <H2>PROHIBITED CONDUCT</H2>
        <P>
          You warrant and agree that, while accessing or using our Websites, you
          will not:
        </P>
        <Ul>
          <li>Misrepresent your age;</li>
          <li>Use an inappropriate username or screen name;</li>
          <li>
            Impersonate any person or entity or misrepresent your affiliation
            with any other person or entity, whether actual or fictitious,
            including anyone from the Websites, the Canada Cannabyss Parties or
            otherwise affiliated with us;
          </li>
          <li>
            Use the Websites to advocate the use of controlled substances or the
            use of products or Services offered or promoted on the Websites in
            connection with controlled substances;
          </li>
          <li>
            Insert your own or a third party's advertising, branding or other
            promotional content, including junk email, bulk email (also known as
            "spam"), chain letters, surveys or contests, or solicit
            participation in any pyramid schemes, into any Website Content;
          </li>
          <li>
            Solicit passwords or personal information for commercial or unlawful
            purposes from other users;
          </li>
          <li>
            Obtain or attempt to gain unauthorized access to other computer
            systems, materials, information or any Services available on or
            through the Websites through any means, including through means not
            intentionally made publicly available or provided through the
            Websites;
          </li>
          <li>
            Engage in any automatic or unauthorized means of accessing,
            logging-in or registering on the Websites, or obtaining lists of
            users or other information from or through the Websites, including,
            without limitation, any information residing on any server or
            database connected to the Websites;
          </li>
          <li>
            Use the Websites or its features and Services in any manner that
            could interrupt, damage, disable, overburden or impair the Websites
            or interfere with any other party’s use and enjoyment of the
            Websites, including, without limitation, sending mass unsolicited
            messages or "flooding" servers;
          </li>
          <li>
            Use the Websites or its Services in violation of our intellectual
            property or other proprietary or legal rights or rights of any third
            party;
          </li>
          <li>
            Use the Websites or its Services in violation of any applicable law;
          </li>
          <li>
            Attempt to circumvent, reverse-engineer, decrypt, or otherwise
            alter, or interfere with, the Websites or its Services;
          </li>
          <li>
            Post, transmit, publish or otherwise disseminate through the
            Websites any of Your Content that, as we determine in our sole
            discretion: (i) is unlawful, harmful, harassing, fraudulent,
            threatening, abusive, libelous, defamatory, vulgar, obscene,
            hateful, or racially, ethnically or otherwise objectionable, or
            infringes our or any third party's intellectual property rights or
            other rights; (ii) is derogatory or harmful to the reputation of any
            of the Canada Cannabyss Parties or any of her or their respective
            officers, members, employees, representatives, licensors and/or
            suppliers, in any way; (iii) may incite violence or other unlawful
            activity; or (iv) is harmful to children in any manner;
          </li>
          <li>
            Encourage or enable any other individual to do any of the foregoing.
          </li>
        </Ul>
        <H2>PRODUCT DISCLAIMER</H2>
        <P>
          THE LAWFUL AND PROPER USE OF ANY PRODUCT OR ACCESSORY IS A REQUIRED
          CONDITION OF SALE. BY PURCHASING ANY PRODUCT OFFERED BY CANADA
          CANNABYSS, YOU ARE REPRESENTING THAT YOU ARE OF LEGAL AGE TO PURCHSASE
          THE PRODUCT, AND THAT YOU AGREE TO FOLLOW THE INSTRUCTIONS CONTAINED
          IN THESE TERMS AND IN ANY ACCOMPANYING PRODUCT LITERATURE. THE
          IMPROPER USE OF APRODUCT MAY VOID ANY APPLICABLE WARRANTY. ANY ILLEGAL
          USE OR RESALE OF ANY PRODUCT COULD SUBJECT YOU TO FINES, PENALTIES
          AND/OR IMPRISONMENT UNDER STATE AND FEDERAL LAW.
        </P>
        <P>
          KEEP ALL PRODUCTS OUT OF THE REACH OF CHILDREN. STUDY THIS
          INFORMATION, THE PRODUCT INSTRUCTIONS, AND ALL OF THE ACCOMPANYING
          LITERATURE BEFORE USING A PRODUCT OFFERED BY CANADA CANNABYSS.
        </P>
        <P>
          THE INFORMATION CONTAINED IN THIS DISCLAIMER AND ANY OTHER CAUTIONARY
          INSTRUCTIONS, AND ALL OF THE DOCUMENTATION AND LITERATURE INCLUDED
          WITH ANY PRODUCT SOLD ON THE CANADA CANNABYSS WEBSITES WAS DEVELOPED
          FOR INFORMATIONAL PURPOSES ONLY. IN NO WAY IS ANY OF THE INFORMATION
          CONTAINED IN THIS DISCLAIMER OR OTHER DOCUMENTATION INTENDED TO BE A
          MEDICAL OR PRESCRIPTIVE GUIDE. NEITHER THE MANUFACTURER NOR THE
          SELLER, OR THEIR RESPECTIVE SUBSIDIARIES, AFFILIATES, DIRECTORS,
          OFFICERS OR SHAREHOLDERS, OF ANY PRODUCTS OFFERED FOR SALE ON THE
          WEBSITE IS RESPONSIBLE FOR THE MISUSE OF SUCH PRODUCTS. YOU AND ANY
          OTHER USER OF SUCH PRODUCTS ARE SOLELY RESPONSIBLE FOR THE CORRECT USE
          OF SUCH PRODUCTS AND THE CONSEQUENCES OF SUCH USE.
        </P>
        <P>
          IF YOU BELIEVE OR SUSPECT THAT YOU HAVE A MEDICAL PROBLEM, PROMPTLY
          CONTACT YOUR DOCTOR OR HEALTH CARE PROVIDER.
        </P>
        <H2>WARRANTY DISCLAIMERS</H2>
        <P>
          We administer, control and operate the Websites from our offices in
          Victoria, in Canada. The Websites are accessible worldwide; however,
          some of its features or functions may not be available or appropriate
          for use outside of the Canada and/or may not be available to all
          persons or in all geographic locations. We make no representation that
          the Websites and Website Content are appropriate or authorized for use
          in all countries, states, provinces, counties or any other
          jurisdictions. Your access and use of the Websites may not be legal in
          your jurisdiction. If you choose to access, browse or use the
          Websites, you do so on your own initiative and risk, and you are
          responsible for compliance with all applicable laws if, and to the
          full extent that, such laws and restrictions are applicable. We
          reserve the right to limit, in our sole discretion, the provision of
          any feature or function of the Websites to any person and geographic
          area. Any offer for any feature or function made on the Websites is
          void where prohibited.
        </P>
        <P>
          The Websites provide information of a general nature only and you are
          responsible for determining whether it applies to your specific
          situation. We specifically disclaim any liability concerning any
          action that any person may take based on any information or guidance
          provided at the Websites.
        </P>
        <P>
          Some Website Content is provided by the users of the Websites. With
          the exception of the limited license granted in these Terms, we do not
          obtain or control any rights in, and do not exert editorial control
          over, such Website content. We do not independently verify the
          representations and warranties made by the users with respect to such
          Website content.
        </P>
        <P>
          We do not guarantee the accuracy, timeliness, correctness,
          completeness, performance or fitness for a particular purpose of the
          Websites or any of Website Content. We are not liable for any errors,
          omissions, or inaccurate Website Content.
        </P>
        <P>
          THE WEBSITES, WEBSITE CONTENT AND SERVICES ARE PROVIDED <b>"AS IS"</b>{' '}
          AND <b>"AS AVAILABLE"</b> WITHOUT WARRANTIES OF ANY KIND, EITHER
          EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ANY WARRANTY FOR
          INFORMATION, DATA, DATA PROCESSING SERVICES, UPTIME OR UNINTERRUPTED
          ACCESS, ANY WARRANTIES CONCERNING THE AVAILABILITY, ACCURACY OR
          USEFULNESS OF WEBSITE CONTENT AND ANY IMPLIED WARRANTIES OF
          MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR
          PURPOSE, TITLE OR NON-INFRINGEMENT, WHICH ARE EXCLUDED FROM THIS
          AGREEMENT TO THE EXTENT THAT THEY MAY BE EXCLUDED AS A MATTER OF LAW.
          WE DO NOT WARRANT THAT THE WEBSITES, WEBSITE CONTENT OR SERVICES WILL
          BE TIMELY, SECURE, UNINTERRUPTED, OR OPERATED FREE OF DELAYS IN
          TRANSMISSION, FAILURE IN PERFORMANCE, COMPUTER VIRUSES, CYBER ATTACKS,
          HACKING, MALWARE OR OTHER SECURITY INTRUSIONS, INACCURACIES, ERRORS,
          OR DEFECTS. YOU USE THE WEBSITES AT YOUR OWN RISK. WE ALSO ASSUME NO
          RESPONSIBILITY, AND SHALL NOT BE LIABLE FOR, ANY DAMAGES TO, OR
          VIRUSES THAT MAY INFECT, YOUR COMPUTER EQUIPMENT OR OTHER PROPERTY ON
          ACCOUNT OF YOUR ACCESS TO, BROWSING IN, OR USE OF, THE WEBSITES OR
          YOUR DOWNLOADING OF THE WEBSITE CONTENT. YOU ARE SOLELY RESPONSIBLE
          FOR IMPLEMENTING SUFFICIENT PROCEDURES AND VIRUS CHECKS (INCLUDING
          ANTI-VIRUS AND OTHER SECURITY CHECKS) TO SATISFY YOUR PARTICULAR
          REQUIREMENTS FOR THE ACCURACY AND SECURITY OF DATA INPUT AND OUTPUT.
          WE MAKE NO WARRANTY THAT THE WEBSITES WILL MEET USERS' REQUIREMENTS.
          NO ADVICE, RESULTS OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED
          BY YOU FROM US OR THROUGH THE WEBSITES SHALL CREATE ANY WARRANTY NOT
          EXPRESSLY MADE HEREIN.
        </P>
        <P>
          Some jurisdictions do not allow the disclaimer of implied warranties,
          so the foregoing disclaimers may not apply to you. YOU ACKNOWLEDGE AND
          AGREE THAT YOUR SOLE REMEDY FOR ANY PROBLEMS OR DISSATISFACTION WITH
          THE WEBSITES IS TO TERMINATE YOUR REGISTRATION AND DISCONTINUE ALL USE
          OF THE WEBSITES.
        </P>
        <H2>LIMITATION OF LIABILITY</H2>
        <P>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, UNDER NO
          CIRCUMSTANCES, INCLUDING WITHOUT LIMITATION, BREACH OF CONTRACT, TORT,
          NEGLIGENCE, STRICT LIABILITY OR ARISING UNDER ANY OTHER LEGAL OR
          EQUITABLE THEORY, WILL THE CANADA CANNABYSS PARTIES OR ANY OF THEIR
          OFFICERS, DIRECTORS, MEMBERS OR EMPLOYEES BE LIABLE FOR ANY DIRECT,
          INDIRECT, SPECIAL, PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES THAT
          ARISE OUT OF OR IN CONNECTION WITH THE USE OF THE WEBSITES OR WITH THE
          DELAY OR INABILITY TO USE THE WEBSITES, OR FOR ANY INFORMATION,
          SOFTWARE, PRODUCTS OR SERVICES OBTAINED THROUGH THE WEBSITES, OR
          OTHERWISE ARISING OUT OF THE USE OF THE WEBSITES, EVEN IF ADVISED OF
          THE POSSIBILITY OF SUCH DAMAGES.
        </P>
      </Wrapper>
    </Layout>
  );
};

export default TermsOfUse;

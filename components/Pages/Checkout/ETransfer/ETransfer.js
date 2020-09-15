import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import {
  ETransferStatement,
  ETransferStatementEmail,
  ETransferStatementH2,
  ETransferStatementH3,
  ETransferStatementVideo,
  Ol,
  ChoosePaymentBtn,
} from '../../../../styles/Pages/Checkout/PaymentMethod';

const ETransfer = (props) => {
  const { user, order, handleChooseETranfer } = props;

  return (
    <>
      <ETransferStatement>
        <div>
          <p>
            You can check the status of your package on{' '}
            <Link href='/account/orders' as='/account/orders'>
              <a>Orders</a>
            </Link>{' '}
            section.
          </p>
          <br />
          <p>In order to successful make the payment following steps:</p>
          <Ol>
            <li>
              Make sure to email us as the right email sender:{' '}
              <ETransferStatementEmail>
                {user.data.email}
              </ETransferStatementEmail>
            </li>
            <li>
              Send the money to the following email:{' '}
              <ETransferStatementEmail>
                payments@canadacannabyss.com
              </ETransferStatementEmail>
            </li>
            <li>
              Before finally send it make sure to write the order ID as a
              message in the e-Tranfer email:{' '}
              <ETransferStatementEmail>
                {order.data._id}
              </ETransferStatementEmail>
            </li>
          </Ol>
          <br />
          <ETransferStatementH2>HOW TO SEND AN E-TRANSFER</ETransferStatementH2>
          <ETransferStatementH3>Send money today:</ETransferStatementH3>
          <Ol>
            <li>
              Log in to you banks online website or mobile banking app and
              navigate to Interac e-Transfer Send Money
            </li>
            <li>Select the account you would like funds to be sent from</li>
            <li>
              Add or select a contact and fill out the name and e-mail address
              or mobile phone number of the person you wish to send money to.
            </li>
            <li>
              Type in the specified amount you are sending, along with a
              personalized message (please write order number here). Enter a
              security question and answer.
            </li>
            <li>
              We will receive a notification and will deposit the funds to our
              account.
            </li>
          </Ol>
          <ETransferStatementH2>
            What banks offer Interac e-Transfer?
          </ETransferStatementH2>
          <div>
            <p>
              You can see the full list here:{' '}
              <a
                href='http://interac.ca/en/interac-e-transfer-consumer.html'
                target='_blank'
              >
                http://interac.ca/en/interac-e-transfer-consumer.html
              </a>
            </p>
          </div>
          <ETransferStatementH2>
            We have picked out some of the popular banks and instructional pages
            for your convenience.
          </ETransferStatementH2>
          <ul class='banks-list'>
            <li>
              <a
                href='https://www.bmo.com/main/personal/bank-accounts/banking-services#transfer-money'
                target='_blank'
              >
                Bank of Montreal
              </a>
            </li>
            <li>
              <a
                href='https://www.cibc.com/en/personal-banking/ways-to-bank/how-to/send-interac-e-transfer.html'
                target='_blank'
              >
                CIBC
              </a>
            </li>
            <li>
              <a
                href='https://www.desjardins.com/ca/personal/accounts-services/ways-to-bank/online/transfer-money-between-accounts/index.jsp'
                target='_blank'
              >
                Desjardins
              </a>
            </li>
            <li>
              <a
                href='http://www.rbcroyalbank.com/products/deposits/interac-e-transfer.html'
                target='_blank'
              >
                RBC
              </a>
            </li>
            <li>
              <a
                href='https://www.td.com/ca/en/personal-banking/solutions/ways-to-pay-and-send-money/?tdtab=interac-etransfer'
                target='_blank'
              >
                TD Canada Trust
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ETransferStatementVideo>
            <iframe
              src='https://www.youtube.com/embed/zL9yoZZXyOE'
              frameborder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </ETransferStatementVideo>
        </div>
      </ETransferStatement>
      <ChoosePaymentBtn
        onClick={() => {
          handleChooseETranfer();
        }}
      >
        Choose e-Transfer
      </ChoosePaymentBtn>
    </>
  );
};

ETransfer.propTypes = {
  user: PropTypes.shape().isRequired,
  order: PropTypes.shape().isRequired,
  handleChooseETranfer: PropTypes.func.isRequired,
};

export default ETransfer;

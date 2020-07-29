import Link from 'next/link';
import React from 'react';
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import {
  CopyRight,
  Div,
  FooterDiv,
  FooterGrid,
  LinkTo,
  Newsletter,
  NewsletterP,
  SocialMedia,
  SocialMediaP,
  Ul,
} from '../../../styles/Components/UI/Footer/Footer';

const Footer = () => {
  return (
    <FooterDiv>
      <FooterGrid>
        <Div>
          <Ul>
            <li>
              <Link href='/terms-of-use' as='/terms-of-use'>
                <LinkTo>Term of Use</LinkTo>
              </Link>
            </li>
            <li>
              <Link href='/privacy-policy' as='/privacy-policy'>
                <LinkTo>Privacy Policy</LinkTo>
              </Link>
            </li>
            <li>
              <Link href='/processing-policy' as='/processing-policy'>
                <LinkTo>Processing Policy</LinkTo>
              </Link>
            </li>
            <li>
              <Link href='/refund-policy' as='/refund-policy'>
                <LinkTo>Refund Policy</LinkTo>
              </Link>
            </li>
          </Ul>
        </Div>
        <Div>
          <Ul>
            <li>
              <Link href='/contact' as='/contact'>
                <LinkTo>Contact Us</LinkTo>
              </Link>
            </li>
            <li>
              <Link href='/about' as='/about'>
                <LinkTo>About Us</LinkTo>
              </Link>
            </li>
            <li>
              <Link href='/account' as='/account'>
                <LinkTo>My Account</LinkTo>
              </Link>
            </li>
            <li>
              <Link href='/products' as='/products'>
                <LinkTo>Products</LinkTo>
              </Link>
            </li>
            <li>
              <Link href='/sitemap' as='/sitemap'>
                <LinkTo>Sitemap</LinkTo>
              </Link>
            </li>
          </Ul>
        </Div>
        <Div>
          <Ul>
            <li>
              <Link href='/wishlist' as='/wishlist'>
                <LinkTo>Wishlist</LinkTo>
              </Link>
            </li>
            <li>
              <Link href='/domestic-shipping' as='/domestic-shipping'>
                <LinkTo>Domestic Shipping</LinkTo>
              </Link>
            </li>
            <li>
              <Link href='/faq' as='/faq'>
                <LinkTo>FAQ</LinkTo>
              </Link>
            </li>
          </Ul>
        </Div>
        <div></div>
        <Div>
          <NewsletterP>
            Subscribe to get special offers and once-in-a-lifetime deals.
          </NewsletterP>
          <Newsletter>
            <input type='text' placeholder='Email' />
            <button>
              <FaEnvelope />
            </button>
          </Newsletter>
          <SocialMediaP>Follow us on our social medias:</SocialMediaP>
          <SocialMedia>
            <li>
              <a>
                <FaInstagram />
              </a>
            </li>
            <li>
              <a>
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a>
                <FaTwitter />
              </a>
            </li>
          </SocialMedia>
        </Div>
      </FooterGrid>
      <CopyRight>
        {`© Copyright ${new Date().getFullYear()} Canada Cannabyss - All Rights Reserved`}
      </CopyRight>
    </FooterDiv>
  );
};

export default Footer;

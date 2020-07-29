import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';

import AdminNavbar from './UI/Navbar/AdminNavbar';
import Footer from './UI/Footer/Footer';

import store from '../store';

const layoutStyle = {
  height: '100%',
  width: '100%',
};

import { Content } from '../styles/Components/UI/Layout';

const AdminLayout = (props) => (
  <div className='Layout' style={layoutStyle}>
    <Head>
      <meta
        name='copyright'
        content={`© ${new Date().getFullYear()} Canada Cannabyss`}
      />
      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=UA-145329492-1'
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-145329492-1');
              `,
        }}
      />
    </Head>
    <AdminNavbar />
    <Content>{props.children}</Content>
    <Footer />

    <style jsx global>
      {`
        * {
          box-sizing: border-box;
        }

        html,
        body,
        #__next {
          height: 100%;
          width: 100%;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: 'Montserrat';
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .Layout {
        }

        .Content {
        }

        @keyframes showSideDrawer {
          0% {
            transform: translateX(-250px);
            box-shadow: 1px 6px 6px 1px rgba(0, 0, 0, 0);
          }
          100% {
            transform: translateX(0px);
            box-shadow: 1px 6px 6px 1px rgba(0, 0, 0, 0.2);
          }
        }

        @keyframes showBackgroundSideDrawer {
          0% {
            background: rgba(0, 0, 0, 0);
          }
          100% {
            background: rgba(0, 0, 0, 0.2);
          }
        }

        @keyframes hideSideDrawer {
          0% {
            transform: translateX(0px);
            box-shadow: 1px 6px 6px 1px rgba(0, 0, 0, 0.2);
          }
          100% {
            transform: translateX(-250px);
            box-shadow: 1px 6px 6px 1px rgba(0, 0, 0, 0);
          }
        }

        @keyframes hideBackgroundSideDrawer {
          0% {
            background: rgba(0, 0, 0, 0.2);
            display: block !important;
          }
          100% {
            background: rgba(0, 0, 0, 0);
            display: none !important;
          }
        }

        .showSideDrawer {
          animation: showSideDrawer 0.25s ease-in-out;
          animation-fill-mode: forwards;
        }

        .showBackgroundSideDrawer {
          display: block !important;
          animation: showBackgroundSideDrawer 0.25s ease-in-out;
          animation-fill-mode: forwards;
        }

        .hideSideDrawer {
          animation: hideSideDrawer 0.25s ease-in-out;
          animation-fill-mode: forwards;
        }

        .hideBackgroundSideDrawer {
          animation: hideBackgroundSideDrawer 0.25s ease-in-out;
          animation-fill-mode: forwards;
        }
      `}
    </style>
  </div>
);

export default AdminLayout;

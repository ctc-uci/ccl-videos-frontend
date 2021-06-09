import React from 'react';
import CustomerNavbar from 'navbar/CustomerNavbar';
import Footer from 'footer/Footer';
import AlertBanner from 'common/AlertBanner';
import config from 'config';
import 'common/Layout.css';

const Layout = ({ children }) => {
  return (
    <div className='main-container'>
      <img style={{verticalAlign: 'unset'}} src={`${config.apiURL}/`} alt="" />
      <CustomerNavbar />
      <AlertBanner />
      <div className='body-container'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

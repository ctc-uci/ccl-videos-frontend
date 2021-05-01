import React from 'react';
import CustomerNavbar from 'navbar/CustomerNavbar';
import Footer from 'footer/Footer';
import 'common/Layout.css';

const Layout = ({ children }) => {
  return (
    <div className='main-container'>
      <CustomerNavbar />
      <div className='body-container'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

import React from 'react';
import AdminNavbar from 'navbar/AdminNavbar';
import CustomerNavbar from 'navbar/CustomerNavbar';
import Footer from 'footer/Footer';
import AlertBanner from 'common/AlertBanner';

import 'common/Layout.css';

const isAdmin = false;

const Layout = ({ children }) => {
  return (
    <div className='main-container'>
      {isAdmin ? <AdminNavbar /> : <CustomerNavbar />}
      <AlertBanner />
      <div className='body-container'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

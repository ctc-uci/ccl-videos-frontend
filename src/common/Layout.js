import React from 'react';
import AdminNavbar from 'common/AdminNavbar';
import CustomerNavbar from 'common/CustomerNavbar';
import 'common/Layout.css';

const isAdmin = false;

const Layout = ({ children }) => {
  return (
    <div className='main-container'>
      {isAdmin ? <AdminNavbar /> : <CustomerNavbar />}
      <div className='body-container'>{children}</div>
    </div>
  );
};

export default Layout;

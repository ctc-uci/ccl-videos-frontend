import React from 'react';
import AdminNavbar from 'navbar/AdminNavbar';
import Footer from 'footer/Footer';
import AlertBanner from 'common/AlertBanner';
import 'common/Layout.css';

const AdminLayout = ({ children }) => {
  return (
    <div className='main-container'>
      <AdminNavbar />
      <AlertBanner />
      <div className='body-container'>{children}</div>
      <Footer />
    </div>
  );
};

export default AdminLayout;

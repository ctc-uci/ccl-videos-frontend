import React from 'react';
import AdminNavbar from 'navbar/AdminNavbar';
import Footer from 'footer/Footer';
import 'common/Layout.css';

const isAdmin = false;

const AdminLayout = ({ children }) => {
  return (
    <div className='main-container'>
      <AdminNavbar />
      <div className='body-container'>{children}</div>
      <Footer />
    </div>
  );
};

export default AdminLayout;

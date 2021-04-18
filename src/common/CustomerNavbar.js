import 'common/AdminNavbar.css';
import React from 'react';
import { Navbar, NavbarBrand } from 'shards-react';
import brand from 'images/white-branding.png';

function AppNavbar() {
  return (
    <Navbar type='dark' theme='primary' expand='sm'>
      <NavbarBrand href='/'>
        <img className="nav-brand" src={brand} alt='CCL' />
      </NavbarBrand>
    </Navbar>
  );
}

export default AppNavbar;

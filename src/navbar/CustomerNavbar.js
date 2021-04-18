import React from 'react';
import { Navbar, NavbarBrand } from 'shards-react';
import Brand from 'images/white-branding.png';
import 'navbar/AdminNavbar.css';

function AppNavbar() {
  return (
    <Navbar type='dark' theme='primary' expand='sm'>
      <NavbarBrand href='/'>
        <img className="nav-brand" src={Brand} alt='CCL' />
      </NavbarBrand>
    </Navbar>
  );
}

export default AppNavbar;

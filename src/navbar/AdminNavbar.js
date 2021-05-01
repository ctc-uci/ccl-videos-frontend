import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'shards-react';
import brand from 'images/white-branding.png';
import 'navbar/AdminNavbar.css';

function AppNavbar() {
  return (
    <Navbar type='dark' theme='primary' expand='sm'>
      <NavbarBrand href='/'>
        <img className="nav-brand" src={brand} alt='CCL' />
      </NavbarBrand>
      <Nav navbar className='m-auto nav-links'>
        <NavItem>
          <NavLink href='/lessons'>Lessons</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/codes'>Codes</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default AppNavbar;

import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'shards-react';
import 'common/AdminNavbar.css';
import brand from 'images/white-branding.png';

function AppNavbar() {
  return (
    <Navbar type='dark' theme='primary' expand='sm'>
      <NavbarBrand href='/'>
        <img className="nav-brand" src={brand} alt='CCL' />
      </NavbarBrand>
      <Nav navbar className='m-auto nav-links'>
        <NavItem>
          <NavLink href='/watch'>Lessons</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/read'>Codes</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default AppNavbar;

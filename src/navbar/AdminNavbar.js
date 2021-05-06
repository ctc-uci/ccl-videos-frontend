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
      <Nav navbar className='ml-auto nav-links' >
        <NavItem>
          <NavLink className='m-3 nav-link' active href='/lessons'>Lessons</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='m-3 nav-link' active href='/codes'>Codes</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default AppNavbar;

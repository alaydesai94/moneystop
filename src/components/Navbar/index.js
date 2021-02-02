import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
                <h1>MoneyStop</h1>
        </NavLink>
        <Bars />

        <NavMenu>

        <NavLink to='/newcustomer' activeStyle>
          New Customer
        </NavLink>
          <NavLink to='/cashing' activeStyle>
            Cheque Cashing
          </NavLink>
          <NavLink to='/pickup' activeStyle>
            Pickups
          </NavLink>
          <NavLink to='/collection' activeStyle>
            Collection
          </NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}

        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;

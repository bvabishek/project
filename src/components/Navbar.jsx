import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

import "./Navbar.css"

function NavbarExample(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} className='bg-primary'>
        <NavbarBrand href="/" className='text-white'>My Project</NavbarBrand>
        <NavbarToggler onClick={toggle} className='text-white'/>
        <Collapse isOpen={isOpen} navbar >
          <Nav className="me-auto text-white" navbar>
          <NavItem>
              <NavLink href="/home" className='custom-link'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/table" className='custom-link'>Table</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className='custom-link'>
                Options
              </DropdownToggle>
              <DropdownMenu right className='custom-link'>
                <DropdownItem className='custom-link'>Option 1</DropdownItem>
                <DropdownItem className='custom-link'>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className='custom-link'>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarExample;
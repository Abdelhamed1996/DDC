import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';


 const Navbar1 = (props) => {


    return (
        <Navbar light expand="md">
            <NavbarToggler />
            <Collapse  navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="#">Sign Up</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Login</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Navbar1
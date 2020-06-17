import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, } from 'reactstrap';



const Navbar1 = (props) => {


    return (
        <Navbar light expand="md">
            <NavbarToggler />
            <Collapse navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">DCI Developers</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/register">Sign Up</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/login">Login</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Navbar1

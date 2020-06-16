import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, } from 'reactstrap';


<<<<<<< HEAD

const Navbar1 = (props) => {
=======
 const Navbar1 = () => {
>>>>>>> 03ef7c7599269e31e28a28fbbe3c27d9f73c0d0e


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
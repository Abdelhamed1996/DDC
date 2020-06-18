import React from 'react';
import { NavLink} from 'react-router-dom'
import { Nav, Navbar,  } from 'react-bootstrap';
import Src from '../../images/DDC-8.png'

const Navbar1 = (props) => {




    return (
        <Navbar collapseOnSelect expand="lg"  >
            <Navbar.Brand href="/"><img src={Src} className="logo_size" alt="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"  >
                <Nav>
                    <Nav.Link  className="border-0 "><NavLink exact to="/profiles"   className="NavLink">DCI Studens</NavLink></Nav.Link>
                    <Nav.Link  className="border-0 "><NavLink exact to="/register"  className="NavLink">Sign Up</NavLink></Nav.Link>
                    <Nav.Link  className="border-0 "><NavLink exact to="/login"   className="NavLink">Login</NavLink></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbar1
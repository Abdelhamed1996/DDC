import React from 'react';
import { NavLink} from 'react-router-dom'
import { Nav, Navbar,  } from 'react-bootstrap';
import Src from '../../images/D.svg'
import {connect} from 'react-redux'
import {logout} from '../../actions/auth'

const Navbar1 = (props) => {


    const authLinks =(
        <>
            <Nav.Link className="border-0 "><NavLink exact to="/profiles" className="NavLink border-0 " >Developers</NavLink></Nav.Link>
            <Nav.Link className="border-0 "><NavLink exact to="/dashboard" className="NavLink border-0 " >Dashboard</NavLink></Nav.Link>
            <Nav.Link  className="border-0 "><NavLink exact to="/"   className="NavLink border-0 " onClick={props.logout}>Logout</NavLink></Nav.Link>
        </>

    )

    const guestLinks =(
        <>
           
            <Nav.Link  className="border-0 "><NavLink exact to="/profiles"   className="NavLink" >DCI Studens</NavLink></Nav.Link>
            <Nav.Link  className="border-0 "><NavLink exact to="/register"  className="NavLink">Sign Up</NavLink></Nav.Link>
            <Nav.Link  className="border-0 "><NavLink exact to="/login"   className="NavLink">Login</NavLink></Nav.Link>
        </>
    )


    return (
        <Navbar collapseOnSelect expand="lg"  >
            <Navbar.Brand href="/"><img src={Src} className="logo_size" alt="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"  >
                <Nav>
                    {!props.auth.loading &&(props.auth.isAuht ? authLinks : guestLinks)}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
const mapStateToProps=state=>({
    auth:    state.auth
})

export default connect(mapStateToProps,{logout})(Navbar1)
import React from 'react';
import { NavLink} from 'react-router-dom'
import { Nav, Navbar,  } from 'react-bootstrap';
import Src from '../../images/D.svg'
import {connect} from 'react-redux'
import {logout} from '../../actions/auth'

const Navbar1 = (props) => {


    const authLinks =(
        <>  
            <Nav.Link><NavLink exact to="/me" className="NavLink border-0 " ><i class="fas fa-user"></i><span className="navbar-span">Me</span></NavLink></Nav.Link>
            <Nav.Link><NavLink exact to="/dashboard" className="NavLink border-0 " ><i class="fas fa-home"></i><span className="navbar-span">Home</span></NavLink></Nav.Link>
            <Nav.Link><NavLink exact to="/profiles" className="NavLink border-0 " ><i class="fas fa-users"></i><span className="navbar-span">DCI Students</span></NavLink></Nav.Link>
            <Nav.Link><NavLink exact to="/chat" className="NavLink border-0 " ><i class="fas fa-comment"></i><span className="navbar-span">Chat</span></NavLink></Nav.Link>
            <Nav.Link><NavLink exact to="/"   className="NavLink border-0 " onClick={props.logout}><i class="fas fa-sign-out-alt"></i><span className="navbar-span">Logout</span></NavLink></Nav.Link>
        </>

    )

    const guestLinks =(
        <>
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
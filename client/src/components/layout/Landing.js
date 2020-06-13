import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';




export const Landing = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="landing-page primary bg">
            <Navbar light expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Sign Up</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">Login</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>


            <div className="text text-center text-white display-4 font-weight-bold">DCI Developer Community</div>
            <p className="p-text text-center text-white mt-3">Create a developer portfolio, share posts and get help from other developers</p>
            <div className="card">
                <Form className="login-form">
                    <h1 className="text-center font-weight-bolder ">
                        <span className="text-center">Sign in</span>
                    </h1>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" placeholder="email" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" placeholder="password" />
                    </FormGroup>
                    <Button className="wow" color="primary" size="lg" block>submit</Button>{' '}
                    <div className="text-center pt-3">Your continue social media account</div>
                    <FacebookLoginButton className="mt-3 mb-3" />
                    <div className="text-center"><a href="/sign-up">Sign up</a>
                        <span className="p-2">|</span>
                        <a href="/sign-up">Forgot password?</a>
                    </div>
                </Form>
            </div>
        </div>
    );
}


import React from 'react';
import{Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';




export const Register = (props) => {


    return (
        <>
            <Form className=" Form1 p-3 mt-5 respnsiv_form2  respnsiv_form3 rounded ">
                <h1 className="text-center mar-5hv">Sign Up</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder=" Confirm Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Link to="/login">do you have allready an account?</Link>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox" className="d-flex justify-content-center">
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
                </Form.Group>

            </Form>
        </>
    );
}

export default Register
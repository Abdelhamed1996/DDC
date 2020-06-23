import React,{ useState } from 'react';
import{Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';




const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            console.log('Passwords do not match');
        } else {
            console.log(formData);
        }
    };

    return (
        <>
            <Form className=" Form1 p-3 mt-5 respnsiv_form2  respnsiv_form3 rounded " onSubmit={onSubmit}>
                <h1 className="text-center mt-5 mb-3">Sign Up</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    value={name}
                    onChange={onChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={onChange}
                     />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={password}
                    onChange={onChange} 
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder=" Confirm Password"
                    name="password2"
                    value={password2}
                    onChange={onChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Link to="/login">do you have allready an account?</Link>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox" className="d-flex justify-content-center">
                <Button variant="primary mb-3" type="submit" >
                    Submit
                </Button>
                </Form.Group>

            </Form>
        </>
    );
}

export default Register
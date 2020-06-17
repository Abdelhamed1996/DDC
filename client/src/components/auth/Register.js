import React, { useState } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';


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
            console.log('Success');
        }
    };


    return (
        <>
            <div className="card card-register mt-5">
                <Form className="login-form-register p-0" onSubmit={onSubmit}>
                    <h1 className="text-center font-weight-bolder pb-4 pt-4">
                        <span className="text-center">Sign in</span>
                        <h6 clasName="text-center" >Create your account</h6>
                    </h1>
                    <FormGroup>
                        <Input className="input-register"
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={onChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            onChange={onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="password"
                            placeholder="Confirm Password"
                            name="password2"
                            value={password2}
                            onChange={onChange} />
                    </FormGroup>
                    <Button className="wow-register mt-4  d-flex justify-content-center" color="primary" size="lg" block>Register</Button>{' '}
                    <div className="text-center pt-3">Your continue social media account</div>
                    <div className="text-center"><a href="/sign-up">Sign up</a>
                        <span className="p-2">|</span>
                        <a href="/sign-up">Forgot password?</a>
                    </div>
                </Form>
            </div>
        </>
    )
}
export default Register
import React, { useState } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password, } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Success');
    };


    return (
        <>
            <div className="card card-register mt-5">
                <Form className="login-form-register p-0" onSubmit={onSubmit}>
                    <h1 className="text-center font-weight-bolder pb-4 pt-4">
                        <span className="text-center">Sign in</span>
                        <h6 clasName="text-center" >Sign Into your account</h6>
                    </h1>
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
                    <Button className="wow-register mt-4  d-flex justify-content-center" color="primary" size="lg" block>Login</Button>{' '}
                    <div className="text-center pt-3">Your continue social media account</div>
                    <div className="text-center"><a href="/register">Sign Up</a>
                        <span className="p-2">|</span>
                        <a href="/register">Don't have account?</a>
                    </div>
                </Form>
            </div>
        </>
    )
}
export default Login

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { login } from '../../actions/auth'
import Img from '../../images/login.svg'







const Login = props => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password, } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        props.login(email, password)
    };


     if(props.isAuht){
          props.history.push('/dashboard')
    }

    const showPassword = (e) => {
        if (e.target.checked) {
            document.getElementById('password').type = 'text'
        }
        else {
            document.getElementById('password').type = 'password'
        }
    }


    return (
        <>
            <div className="text text-center text-white display-4 font-weight-bold">DCI Developers Community</div>
            <div className="form-div"   style={{paddingBottom:"5vw"}}>
                <img src={Img} alt="login"  className="loginImg"/>
            <Form className=" Form1 p-3  mt-4 respnsiv_form respnsiv_form3 rounded" onSubmit={onSubmit}>
                <h1 className="text-center mt-5 mb-4">Sign in</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Email Address"
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
                        id="password"
                        />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Show password" onClick={showPassword} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox" className="d-flex justify-content-center">
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form.Group>

            </Form>
            </div>
        </>
    );
}

const mapStateToProps= state=>({
    isAuht: state.auth.isAuht
})

export default connect(mapStateToProps, { login })(Login)
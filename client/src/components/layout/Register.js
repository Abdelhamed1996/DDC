import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { register } from '../../actions/auth'
import Img from '../../images/SignUp.svg'



const Register = props => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        gender:''
    });

    const { name, email, password, password2, gender } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            console.log('Passwords do not match');
        } else {
            props.register({ name, email, password, gender })
        }
    };


    if(props.isAuht){
        props.history.push('/dashboard')
  }


    return (
        <>
            <div className="text text-center text-white display-4  font-weight-bold">DCI Developers Community</div>
            <div className="form-div"   style={{padding:"0 5px 5vw 5px"}}>
            
            <Form className=" Form1 p-3 mt-4  respnsiv_form2  respnsiv_form3 rounded " onSubmit={onSubmit}>
                <h1 className="text-center mt-5 mb-3">Sign Up</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select" className="profileinput" name="gender"  value={gender} onChange={e => onChange(e)}>
                        <option>select gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </Form.Control>
                </Form.Group>
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
            <img src={Img} alt="login"  className="loginImg"/>
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    isAuht: state.auth.isAuht
})

export default connect(mapStateToProps, { register })(Register)
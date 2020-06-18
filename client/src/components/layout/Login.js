import React ,{useState}from 'react';
import{Form,Button } from 'react-bootstrap'




const Login = (props) => {
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
            <div className="text text-center text-white display-4 font-weight-bold">DCI Developer Community</div>
            <p className="p-text text-center text-white mt-3 mar-5hv">Create a developer portfolio, share posts and get help from other developers</p>
            <Form className=" Form1 p-3 m-auto respnsiv_form respnsiv_form3 rounded" onSubmit={onSubmit}>
                <h1 className="text-center mar-5hv">Sign in</h1>
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
                        />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Show password" />
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

export default Login
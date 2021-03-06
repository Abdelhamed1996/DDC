import React, { useState } from 'react'
import { createProfile } from '../../actions/profile'
import { connect } from 'react-redux';
import { Container, Form, Button, Card, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Src from '../fontawesome/twitter-brands.svg'
import Fac from '../fontawesome/facebook.svg'
import Inst from '../fontawesome/instagram.svg'
import Xing from '../fontawesome/xing.svg'
import Img from './man 7.png'
import Img2 from './woman-8.png'


const CreateProfile = props => {
    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        xing: '',
        instagram: ''
    });

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        xing,
        instagram
    } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        props.createProfile(formData, props.history)
        window.location.reload()
    };

    console.log("props1", props)
    return (
        <>
            <Container>
                <Card className="mb-5">
                    <Form onSubmit={onSubmit}>
                        <div className="text-center card-r">
                            <Card className="card-head">
                                <Card.Body></Card.Body>
                            </Card>
                                <Card className="blue-card">
                                <Card.Body className="round-user d-flex justify-content-center">
                                    <div className="foto-user d-flex justify-content-centerd-flex align-items-center align-self-center ">
                                        <img src={props.auth.gender === 'Male' ? Img : Img2} className="user_size img-fluid" alt="avatar" />
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <Form.Group className="profile-form" controlId="exampleForm.ControlSelect1">
                            <h2 className="profile-text">Create Your profile</h2>
                            <p className="profile-text">Let`s get some information to make your profile stand out</p>
                            <Form.Control as="select" className="profileinput" name="status" value={status} onChange={e => onChange(e)}>
                                <option>Select profesional status</option>
                                <option>Developer</option>
                                <option>Junior Developer</option>
                                <option>Senior Developer</option>
                                <option>Manager</option>
                                <option>Student of Lerning</option>
                                <option>Instructor or Teacher</option>
                                <option>Intern</option>
                                <option>Other</option>
                            </Form.Control>
                            <Form.Text className="text-muted inputtext">
                                Give us an idea of where you are at in your career
                        </Form.Text>
                            <Form.Control type="text" placeholder="Company" className="profileinput" name="company" value={company} onChange={e => onChange(e)} />
                            <Form.Text className="text-muted inputtext">
                                Could be your own company or one you work for
                        </Form.Text>
                            <Form.Control type="text" placeholder="Website" className="profileinput" name="website" value={website} onChange={e => onChange(e)} />
                            <Form.Text className="text-muted inputtext">
                                Could be your own or a company website.
                        </Form.Text>
                            <Form.Control type="text" placeholder="Location" className="profileinput" name="location" value={location} onChange={e => onChange(e)} />
                            <Form.Text className="text-muted inputtext">
                                City & state suggested (eg. Dusseldorf)
                        </Form.Text>
                            <Form.Control type="text" placeholder="Skils" className="profileinput" name="skills" value={skills} onChange={e => onChange(e)} />
                            <Form.Text className="text-muted inputtext">
                                Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
                        </Form.Text>
                            <Form.Control type="text" placeholder="Github Username" className="profileinput" name="githubusername" value={githubusername} onChange={e => onChange(e)} />
                            <Form.Text className="text-muted inputtext">
                                If you want your latest repos and a Github link, include your username
                        </Form.Text>
                            <Form.Control type="text" placeholder="A short biography of yourself" className="profileinput" name="bio" value={bio} onChange={e => onChange(e)} />
                            <Form.Text className="text-muted inputtext">
                                Tell us a little about yourself
                        </Form.Text>

                            <span>Social Media Links<span style={{ color: 'gray' }}>  (Optional)</span></span>

                            <Form.Group>
                                
                                <div className=" social-input d-flex p-3">
                                    <img src={Src}  className="icons mr-3" alt="twitter"/>
                                    <Form.Control className="social-control"
                                        type="text"
                                        placeholder="Twitter URL"
                                        name="twitter"
                                        value={twitter}
                                        onChange={e => onChange(e)}
                                    />
                                </div>

                                <div className=" social-input d-flex p-3">
                                    <img src={Fac} className="icons mr-3" alt="facebook" />
                                    <Form.Control className="social-control"
                                        type="text"
                                        placeholder="Facebook URL"
                                        name="facebook"
                                        value={facebook}
                                        onChange={e => onChange(e)}

                                    />
                                </div>

                                <div className=" social-input d-flex p-3">
                                    <img src={Inst} className="icons mr-3" alt="insta"/>
                                    <Form.Control className="social-control"
                                        type="text"
                                        placeholder="Instagram URL"
                                        name="instagram"
                                        value={instagram}
                                        onChange={e => onChange(e)}

                                    />
                                </div>
                                <div className=" social-input d-flex p-3">
                                    <img src={Xing} className="icons mr-3" alt="xing"/>
                                    <Form.Control className="social-control"
                                        type="text"
                                        placeholder="Xing URL"
                                        name="xing"
                                        value={xing}
                                        onChange={e => onChange(e)}

                                    />
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <Button variant="primary m-2" type="submit" >
                                    Submit
                            </Button>
                                <Link to="/dashboard"><Button variant="secondary"  >
                                    Back
                            </Button>
                                </Link>
                            </Form.Group>

                        </Form.Group>

                    </Form>
                </Card>
            </Container>

        </>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(mapStateToProps, { createProfile })(CreateProfile)

import React, { useState } from 'react'
import {createProfile} from '../../actions/profile'
import { connect } from 'react-redux';
import { Container, Form, Button, Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Src from '../fontawesome/twitter-brands.svg'


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
    };




    return (
        <>
            <Container>
                <Card>
                <Form onSubmit={onSubmit}>
                    <div className="text-center">
                        <h1>Create Your Profile</h1>
                        <p>let's get some information to make your
                        profile stand out</p>
                    </div>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select" className="profileinput" name="status" value={status} onChange={e=> onChange(e)}>
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
                        <Form.Control type="text" placeholder="Company" className="profileinput" name="company" value={company} onChange={e=> onChange(e)}/>
                        <Form.Text className="text-muted inputtext">
                            Could be your own company or one you work for
                        </Form.Text>
                        <Form.Control type="text" placeholder="Website" className="profileinput" name="website" value={website} onChange={e=> onChange(e)}/>
                        <Form.Text className="text-muted inputtext">
                            Could be your own or a company website.
                        </Form.Text>
                        <Form.Control type="text" placeholder="Location" className="profileinput" name="location" value={location} onChange={e=> onChange(e)}/>
                        <Form.Text className="text-muted inputtext">
                            City & state suggested (eg. Dusseldorf)
                        </Form.Text>
                        <Form.Control type="text" placeholder="Skils" className="profileinput" name="skills" value={skills} onChange={e=> onChange(e)}/>
                        <Form.Text className="text-muted inputtext">
                            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
                        </Form.Text>
                        <Form.Control type="text" placeholder="Github Username" className="profileinput" name="githubusername" value={githubusername} onChange={e=> onChange(e)}/>
                        <Form.Text className="text-muted inputtext">
                            If you want your latest repos and a Github link, include your username
                        </Form.Text>
                        <Form.Control type="text" placeholder="A short biography of yourself" className="profileinput" name="bio"  value={bio} onChange={e=> onChange(e)}/>
                        <Form.Text className="text-muted inputtext">
                            Tell us a little about yourself
                        </Form.Text>

                        <span>Social Media Links<span style={{color:'gray'}}>  (Optional)</span></span>

                        <Form.Group>
                            <div className=" social-input">
                            <img  src="../fontawesome/" alt="." className="icons"/>
                                <Form.Control
                                  type="text"
                                  placeholder="Twitter URL"
                                  name="twitter"
                                  value={twitter}
                                  onChange={e=> onChange(e)}

                                />
                            </div>

                            <div className=" social-input">
                            <img  src="../fontawesome/3721672-instagram_108066.svg" alt="." className="icons"/>
                              <Form.Control
                                type="text"
                                placeholder="Facebook URL"
                                name="facebook"
                                value={facebook}
                                onChange={e=> onChange(e)}

                              />
                            </div>

                            <div className=" social-input">
                                <img  src="../fontawesome/3721672-instagram_108066.svg" alt="." className="icons"/>
                                <Form.Control
                                type="text"
                                placeholder="Instagram URL"
                                name="instagram"
                                value={instagram}
                                onChange={e=> onChange(e)}

                              />
                            </div>
                            <div className=" social-input">
                                <img  src="../fontawesome/3721672-instagram_108066.svg" alt="." className="icons"/>
                                <Form.Control
                                type="text"
                                placeholder="Xing URL"
                                name="xing"
                                value={xing}
                                onChange={e=> onChange(e)}

                              />
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Button variant="primary" type="submit" >
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




export default connect(null,{createProfile})(CreateProfile)

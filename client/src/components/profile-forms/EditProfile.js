import React, { useState , useEffect} from 'react'
import {createProfile, getCurrentProfile} from '../../actions/profile'
import { connect } from 'react-redux';
import { Container, Form, Button, Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import profile from '../../reducers/profile';
import Src from '../fontawesome/twitter-brands.svg'
import Fac from '../fontawesome/facebook.svg'
import Inst from '../fontawesome/instagram.svg'
import Xing from '../fontawesome/xing.svg'
import Img from './man 7.png'



const EditProfile = props => {
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

    useEffect(()=>{
        props.getCurrentProfile();
        setFormData({
            company: props.profile.loading || !props.profile.profile.company ? '' : props.profile.profile.company,
            website: props.profile.loading || !props.profile.profile.website ? '' : props.profile.profile.website,
            location: props.profile.loading || !props.profile.profile.location ? '' : props.profile.profile.location,
            status: props.profile.loading || !props.profile.profile.status ? '' : props.profile.profile.status,
            skills: props.profile.loading || !props.profile.profile.skills ? '' : props.profile.profile.skills.join(','),
            githubusername: props.profile.loading || !props.profile.profile.githubusername ? '' : props.profile.profile.githubusername,
            bio: props.profile.loading || !props.profile.profile.bio ? '' : props.profile.profile.bio,
            twitter: props.profile.loading || !props.profile.profile.social ? '' : props.profile.profile.social.twitter,
            facebook: props.profile.loading || !props.profile.profile.social ? '' : props.profile.profile.social.facebook,
            instagram: props.profile.loading || !props.profile.profile.social ? '' : props.profile.profile.social.instagram,
            xing: props.profile.loading || !props.profile.profile.social ? '' : props.profile.profile.social.xing,
        })
    },[props.profile.loading])

    const objectPath = props.profile
    console.log(objectPath)
    

    const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        props.createProfile(formData, props.history)
        props.history.push('/me')
        window.location.reload()
    };




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
                                        <img src={Img} className="user_size img-fluid"  alt="avatar"/>
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
                                    <img src={Src} alt="." className="icons mr-3" />
                                    <Form.Control className="social-control"
                                        type="text"
                                        placeholder="Twitter URL"
                                        name="twitter"
                                        value={twitter}
                                        onChange={e => onChange(e)}
                                    />
                                </div>

                                <div className=" social-input d-flex p-3">
                                    <img src={Fac} className="icons mr-3" />
                                    <Form.Control className="social-control"
                                        type="text"
                                        placeholder="Facebook URL"
                                        name="facebook"
                                        value={facebook}
                                        onChange={e => onChange(e)}

                                    />
                                </div>

                                <div className=" social-input d-flex p-3">
                                    <img src={Inst} className="icons mr-3" />
                                    <Form.Control className="social-control"
                                        type="text"
                                        placeholder="Instagram URL"
                                        name="instagram"
                                        value={instagram}
                                        onChange={e => onChange(e)}

                                    />
                                </div>
                                <div className=" social-input d-flex p-3">
                                    <img src={Xing} className="icons mr-3" />
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
                                <Link to="/dashboard">
                                    <Button variant="secondary"  >
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

const mapStateToProps= state=>({
    profile: state.profile
})



export default connect(mapStateToProps,{createProfile,getCurrentProfile})(EditProfile)
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Container, Form, Button, Card } from 'react-bootstrap'


const CreateProfile = props => {
    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skils: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
    });

    const {
        company,
        website,
        location,
        status,
        skils,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData;
    return (
        <>
            <Container>
                <Card>
                    <div className="text-center">
                        <h1>Create Your Profile</h1>
                        <p>get's get some information to make your
                        profile stand out</p>
                    </div>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select">
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
                        <Form.Text className="text-muted">
                            Give us an idea of where you are at in your career
                </Form.Text>
                        <Form.Control type="text" placeholder="Company" />
                        <Form.Text className="text-muted">
                            Could be your own company or one you work for
                    </Form.Text>
                        <Form.Control type="text" placeholder="Website" />
                        <Form.Text className="text-muted">
                            Could be your own or a company website.
                    </Form.Text>
                        <Form.Control type="text" placeholder="Location" />
                        <Form.Text className="text-muted">
                            City & state suggested (eg. Dusseldorf)
                    </Form.Text>
                        <Form.Control type="text" placeholder="Skils" />
                        <Form.Text className="text-muted">
                            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
                    </Form.Text>
                        <Form.Control type="text" placeholder="Github Username" />
                        <Form.Text className="text-muted">
                            If you want your latest repos and a Github link, include your username
                    </Form.Text>
                        <Form.Control type="text" placeholder="A short biography of yourself" />
                        <Form.Text className="text-muted">
                            Tell us a little about yourself
                    </Form.Text>
                        <Button variant="primary" size="lg">
                            Add Social Network Links
                    </Button>{' '}
                        <span>Optional</span>

                    </Form.Group>
                </Card>
            </Container>

        </>
    )
}

CreateProfile.propTypes = {

}

export default CreateProfile

import React from 'react'
import { Container, Col, Button, Row, } from 'react-bootstrap'
import Img from '../profile-forms/man 7.png'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProfileItem = props => {
    return (
        <Container fluid clasName="dci-container">
            <Row className="dci-student">
                <Col className="student-foto">
                    <img src={Img} className="user_size" roundedCircle />
                </Col>
                <Col className="student-data">
                    <h2>Json Parse</h2>
                    <p>Trivago Developer</p>
                    <p>Dusseldorf</p>
                    <Button variant="primary m-2" type="submit" >
                        Viev Profile
                    </Button>
                </Col>
                <Col className="skils">
                    <p className="skils-item">HTML</p>
                    <p className="skils-item">CSS</p>
                    <p className="skils-item">Js</p>
                    <p className="skils-item">PHP</p>
                </Col>
            </Row>
        </Container>
    )
}

ProfileItem.propTypes = {

}

export default ProfileItem

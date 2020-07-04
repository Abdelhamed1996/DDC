import React from 'react'
import { Container, Form, Button, Card, } from 'react-bootstrap'
import PropTypes from 'prop-types'
import Img from '../profile-forms/man 7.png'
import yes from '../profile-forms/yes.png'

const ProfileTop = props => {
    return (
        <>
            <Container>
                <Card className="mb-5">
                    <div className="text-center profile-top">
                        <Card className="card-head card-t d-flex flex-row">
                            <div className="card-k">
                                <img src={Img} className="user_size  img-fluid" alt="avatar" />
                            </div>
                            <div clasName="ikon-k">
                                <img src={yes} className="user_icon" alt="yes"/>
                            </div>
                            <div className="card-d d-flex flex-column  align-self-center">
                                <h4 className="name">Json Parse</h4>
                                <p>Trivago Developer</p>
                                <p>Dusseldorf</p>
                            </div>
                        </Card>
                    </div>
                    <div className="text-center profile-top">
                        <Card className="card-head card-e d-flex flex-row ">education</Card>
                    </div>
                    <div>text</div>
                </Card>
            </Container>

        </>
    )
}

ProfileTop.propTypes = {

}

export default ProfileTop

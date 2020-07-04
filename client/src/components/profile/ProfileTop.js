import React from 'react'
import { Container, Form, Button, Card,Col } from 'react-bootstrap'
import Img from '../profile-forms/man 7.png'
import yes from '../profile-forms/yes.png'
import PropTypes from 'prop-types'

const ProfileTop = ({profile:{
    status,
    company,
    location,
    social,
    website,
    skills,
    user:{name, avatar}
}}) => {
    return (
        <>
            <Container>
                <Card className="mb-5">
                    <div className="text-center profile-top top">
                        <Card className="card-head card-t d-flex flex-row">
                            <div className="card-k">
                                <img src={Img} className="user_size  img-fluid" alt="avatar" />
                            </div>
                            <div clasName="ikon-k">
                                <img src={yes} className="user_icon" alt="yes"/>
                            </div>
                            <div className="card-d d-flex flex-column  align-self-center">
                                <h4 className="name">{name}</h4>
                                <p>{status}</p>
                                <p>{location}</p>
                            </div>
                        </Card>
                    </div>
                    <div className="text-center profile-top">
                        <p className="skil">Skil set</p>
                        {skills.map((skill,index)=>(
                                    <span className="span-skils" key={index} className="">{skill} </span>
                                   ))}
                    </div>
                    
                </Card>
            </Container>

        </>
    )
}

ProfileTop.propTypes={
    profile: PropTypes.object.isRequired    
}

export default ProfileTop

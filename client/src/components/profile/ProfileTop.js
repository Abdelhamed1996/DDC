import React from 'react'
import { Container, Form, Button, Card,Col } from 'react-bootstrap'
import Img from '../profile-forms/man 7.png'
import Img2 from '../profile-forms/woman-8.png'
import yes from '../profile-forms/yes.png'
import PropTypes from 'prop-types'
import Xing from '../fontawesome/xing.svg'
import Fac from '../fontawesome/facebook.svg'
import Inst from '../fontawesome/instagram.svg'
import Twitt from '../fontawesome/twitter-brands.svg'
import Www from '../fontawesome/www.png'
import Location from '../fontawesome/location.svg'
import Work from '../fontawesome/work.svg'
import ProfileGithub from '../profile/ProfileGithub'


const ProfileTop = ({profile:{
    status,
    company,
    location,
    social,
    website,
    skills,
    githubusername,
    bio,
    user:{name, gender}
    }}) => {

        const capitalize= (s)=>
        {
        return s && s[0].toUpperCase() + s.slice(1);
        }

    return (
        <>
            <Container>
                <Card className="mb-5 pb-4">

                        <Card className="card-profile" >
                            <div className="card-k">
                                <img src={gender==='Male' ? Img : Img2} className="user_size  img-fluid" alt="avatar" />
                                <img src={yes} className="user_icon" alt="yes"/>
                            </div>
                            <div className="info-profile">
                                <h4 className="name">{capitalize(name)}</h4>
                                <p style={{fontSize:"1rem"}}><span style={{marginRight:"5px", color:"#eeeeee"}}><i className="fas fa-briefcase" ></i></span>{status} <>{company && (<i>work at {company}</i>)}</></p>
                                {location && (<p><i className="fas fa-map-marker-alt profile-icon" style={{marginRight:"5px", color:"#eeeeee"}}></i>{location}</p>)}
                            </div>
                        </Card>
                    
                    
                    <div className="skills-block">
                        <p className="text-center skillp">SKILLS</p>
                        <div className=" profile-skills">
                            {skills.map((skill,index)=>(
                                <span className="span-skills" key={index} >{skill} </span>
                            ))}
                        </div>   
                    </div>
                    <div className="about-me">
                        <p >ABOUT ME</p>
                        <p style={{color: "gray"}}>{bio}</p>
                        <div className=" social">
                        <>
                            {website && (
                                <a href={website} target="_blank"><img src={Www} className="icons mr-3" /></a>
                            )}
                            </>
                            <>
                            {social && social.xing && (
                                <a href={social.xing} target="_blank"><img src={Xing} className="icons mr-3" /></a>
                            )}
                            </>
                            <>
                            {social && social.twitter && (
                                <a href={social.twitter} target="_blank"><img src={Twitt} className="icons mr-3" /></a>
                            )}
                            </> 
                            <>
                            {social && social.facebook && (
                                <a href={social.facebook} target="_blank"><img src={Fac} className="icons mr-3" /></a>
                            )}
                            </> 
                            <>
                            {social && social.instagram && (
                                <a href={social.instagram} target="_blank"><img src={Inst} className="icons mr-3" /></a>
                            )}
                            </> 


                        </div>
                        <div className="social">
                            
                        </div>
                    </div> 
                    {githubusername && (<ProfileGithub username={githubusername}/>)}
                </Card>

            </Container>

        </>
    )
}

ProfileTop.propTypes={
    profile: PropTypes.object.isRequired    
}

export default ProfileTop

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/Spiner';
import { getProfiles } from '../../actions/profile';
import { Container, Col, Button, Row, } from 'react-bootstrap'
import Img from '../profile-forms/man 7.png'
import Img2 from '../profile-forms/woman-8.png'
import {Link} from 'react-router-dom'


const Profiles = props => {
    useEffect(() => {
        props.getProfiles();
    }, []);

    return (
        <>
            {props.profile.loading ? <Spinner /> :
            <>
                <h1 className="profiles-h1">Developers</h1>
                <p className="profiles-p1">Browse and connect with DCI students</p>
                <div className="profiles">
                    {props.profile.profiles.length > 0 ? (
                        props.profile.profiles.map(profile => (


                            <Container fluid className="dci-container" key={profile.user._id} >
                               <Row className="dci-student">
                                    <Col className="student-foto d-flex justify-content-start ml-4 align-self-center ">
                                        
                                       
                                       {profile.user.gender === 'Male' ? <img src={Img} className="head_size img-fluid"  alt="avatar"/> : <img src={Img2} className="head_size img-fluid"  alt="avatar"/>                     }
                                   </Col>
                                   <Col className="student-data">
                                        <h2>{profile.user.name}</h2>
                                        <p><i class="fas fa-briefcase" style={{marginRight:"5px", color:"#43a5f5"}}></i>{profile.status}</p>
                                        {profile.location ? <p><i class="fas fa-map-marker-alt profile-icon" style={{marginRight:"5px", color:"#43a5f5"}}></i>{profile.location}</p> :<p className="hide"> .</p>}
                                       <Link to={`/profile/${profile.user._id}`} >
                                           <Button className="button-profile" variant="primary m-2" type="submit" >
                                           View Profile
                                       </Button>
                                       </Link>
                                   </Col>
                                    <Col className="skils d-flex justify-content-center flex-column">
                                   {profile.skills.map((skill,index)=>(
                                        <p key={index} className="skils-item">{skill}</p>
                                   ))}
                                   </Col>
                               </Row>
                           </Container>
                        ))
               ):(<h4>No profiles found</h4>
               )}
            </div>
            </>
            }
        </>
    );
};



const mapStateToProps = state => ({
    profile: state.profile
});



export default connect(mapStateToProps, { getProfiles })(Profiles);

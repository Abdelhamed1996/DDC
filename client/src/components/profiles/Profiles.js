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

    console.log(props.profile)
    return (
        <>
            {props.profile.loading ? <Spinner /> :
            <>
                <h1 className="profiles-h1">Developers</h1>
                <p className="profiles-p1">Browse and connect with Dci students</p>
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
                                        <p>{profile.status}</p>
                        {profile.location ? <p>{profile.location}</p> :<p className="hide"> .</p>}
                                       <Link to={`/profile/${profile.user._id}`} >
                                           <Button className="button-profile" variant="primary m-2" type="submit" >
                                           Viev Profile
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

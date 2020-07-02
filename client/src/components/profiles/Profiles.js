import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/Spiner';
import { getProfiles } from '../../actions/profile';
import { Container, Col, Button, Row, } from 'react-bootstrap'
import Img from '../profile-forms/man 7.png'
import {Link} from 'react-router-dom'

const Profiles = props => {
    useEffect(() => {
        props.getProfiles();
    }, []);
    console.log(props.profile.profiles)
    return (
        <>
            {props.profile.loading ? <Spinner /> :
            <>
                <h1>Developers</h1>
                <p>Browse and connect with Dci students</p>
                <div className="profiles">
                    {props.profile.profiles.length > 0 ? (
                        props.profile.profiles.map(profile => (
 
                            
                            <Container fluid className="dci-container" key={profile.user._id} >
                               <Row className="dci-student">
                                   <Col className="student-foto">
                                       <img src={Img} className="user_size"  />
                                   </Col>
                                   <Col className="student-data">
                                        <h2>{profile.user.name}</h2>
                                        <p>{profile.status}</p>
                                       <p>{profile.location}</p>
                                       <Link to={`/profile/${profile.user._id}`} ><Button variant="primary m-2" type="submit" >
                                           Viev Profile
                                       </Button></Link>
                                   </Col>
                                   <Col className="skils">
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

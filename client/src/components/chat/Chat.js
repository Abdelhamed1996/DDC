import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/Spiner';
import { getProfiles } from '../../actions/profile';
import { Container, Col, Button, Row, } from 'react-bootstrap'
import Img from '../profile-forms/man 7.png'
import Img2 from '../profile-forms/woman-8.png'
import {Link} from 'react-router-dom'

import './styles.css'

const Chat= props=>{
    useEffect(() => {
        props.getProfiles();
    }, []);

    const capitalize= (s)=>
    {
    return s && s[0].toUpperCase() + s.slice(1);
    }

    return (
        <>
            {props.profile.loading ? <Spinner /> :
            <>
                <h1 className="profiles-h1">Developers</h1>
                <div className="chat-container">
                    <div className="user-container">
                        {props.profile.profiles.length > 0 ? (
                            props.profile.profiles.map(profile => (
                                <div   className="chat-user-container"  key={profile.user._id} >
                                    <img src={profile.user.gender === 'Male' ? Img : Img2} className="chat-user-img"  alt="avatar"/>
                                    <p className="chat-user">{capitalize(profile.user.name)}</p>
                               </div>

                            ))
                            
                        ):(<h4>No users found</h4>
                        )}
                    </div>
                    <div className="text-container">

                    </div>
                </div>
            </>
            }
        </>
    );
}


const mapStateToProps = state => ({
    profile: state.profile
});



export default connect(mapStateToProps, { getProfiles })(Chat);
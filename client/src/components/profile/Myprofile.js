import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../layout/Spiner'
import ProfileTop from './ProfileTop'
import { getCurrentProfile } from '../../actions/profile'
import { Button, } from 'react-bootstrap'
import PropTypes from 'prop-types'

const MyProfile = ({getCurrentProfile, profile:{profile,loading}}) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);

    return (
        <>
            {profile === null || loading ? (
                <Spinner />
            ) : (<>
                    <div class="profile-grid">
                        <ProfileTop profile={profile}/>

                    </div>
                    <div className="profile-btns">
                    <Link to='/dashboard'><Button variant="secondary" >Back</Button></Link>
                    <Link to='/edit-profile'><Button variant="primary">Edit Profile</Button></Link>
                    </div>
            </>)}
        </>
    )
}


MyProfile.propTypes={
    profile: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
    
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile })(MyProfile)
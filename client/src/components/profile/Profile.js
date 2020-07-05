import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../layout/Spiner'
import ProfileTop from './ProfileTop'
import { getProfileById } from '../../actions/profile'
import { Button, } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Profile = ({getProfileById, profile:{profile,loading}, auth, match}) => {
    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById,match.params.id]);

    return (
        <>
            {profile === null || loading ? (
                <Spinner />
            ) : (<>
                    <div class="profile-grid">
                        <ProfileTop profile={profile}/>

                    </div>
                    <div className="profile-btns">
                    <Link to='/profiles'><Button variant="secondary" >Back to Profiles</Button></Link>
                    {auth.isAuht && auth.loading === false  && auth.user._id === profile.user._id && (<Link to='/edit-profile'><Button variant="primary">Edit Profile</Button></Link>)}
                    </div>
            </>)}
        </>
    )
}


Profile.propTypes={
    profile: PropTypes.object.isRequired,
    getProfileById: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
    
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile)

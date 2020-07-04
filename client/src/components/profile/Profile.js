import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../layout/Spiner'
import ProfileTop from './ProfileTop'
import { getProfileById } from '../../actions/profile'
import { Button, } from 'react-bootstrap'

const Profile = ({

    getProfileById,
    profile: { profile, loading },
    auth,
    match
}) => {
    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById,match.params.id]);
    return (
        <>
            {profile === null || loading ? (
                <Spinner />
            ) : (<>
                <Link to='/profiles'><Button variant="primary">Back to Profiles</Button></Link>
                {auth.isAuthenticated
                    && auth.loading === false
                    && auth.user._id ===
                        profile.user._id && (<Link to='/edit-profile'><Button variant="primary">Edit Profile</Button></Link>)}
                    <div class="profile-grid">
                        <ProfileTop profile={profile}/>
                    </div>
            </>)}
        </>
    )
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile)

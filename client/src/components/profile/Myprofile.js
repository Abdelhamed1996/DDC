import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../layout/Spiner'
import ProfileTop from './ProfileTop'
import { getCurrentProfile , deleteAccount} from '../../actions/profile'
import { Button, } from 'react-bootstrap'
import PropTypes from 'prop-types'
import CreateProfile from '../profile-forms/CreateProfile'


const MyProfile = ({getCurrentProfile,deleteAccount, profile:{profile,loading}}) => {
     useEffect(() => {
        getCurrentProfile();
     },[getCurrentProfile]);

    console.log("profile", profile)

      if(profile === null && loading ) {
          return (<Spinner />)
      }else if(profile === null && loading === false){
         return <CreateProfile/>
      } else if(profile && !loading){
              return(<>
                        <div className="profile-containers">
                            <div class="profile-grid">
                                <ProfileTop profile={profile}/>
                            </div>
                            <div className="profile-btns">
                            <Link to='/dashboard' className="profile-link"><Button variant="secondary" >Back</Button></Link>
                            <Link to='/edit-profile' className="profile-link"><Button variant="primary">Edit Profile</Button></Link>
                            <Button variant="danger" onClick={()=> {deleteAccount();window.location.reload()}}>Delete My Account</Button>
                            </div>
                         </div>
                     </>)
          }
     
}


 MyProfile.propTypes={
     profile: PropTypes.object.isRequired,
     getCurrentProfile: PropTypes.func.isRequired,
     deleteAccount: PropTypes.func.isRequired,
     auth: PropTypes.object.isRequired  
 }

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile,deleteAccount })(MyProfile)
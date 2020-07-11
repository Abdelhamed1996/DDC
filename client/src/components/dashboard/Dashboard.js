import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spiner'
import { getCurrentProfile } from '../../actions/profile'
import { Card, Button,} from 'react-bootstrap'
import DashboardAction from './dashboardAction'
import Img from '../profile-forms/man 7.png'
import Img2 from '../profile-forms/woman-8.png'


const Dashboard = props => {
    useEffect(() => {
        props.getCurrentProfile()
    },[]);

    const capitalize= (s)=>
    {
    return s && s[0].toUpperCase() + s.slice(1);
    }
    console.log(props.profile.profile)

     if(props.profile.loading === true && props.profile === null){return <Spinner />}else {
         return(
            <>
            <Card>
                <Card.Header>Welcome {props.auth && capitalize(props.auth.name)}</Card.Header>
                <div className="dash-items">
                    <Link to='/me'><img src={props.auth.gender==='Male' ? Img : Img2} className="head_size img-fluid" alt="avatar" /></Link>
                    <Card.Body>
                        <Card.Text>
                            {props.profile.profile !== null ? (<><DashboardAction/></>) : (
                            <>
                                <p>You have not yet setup a profile, please add some info</p>
                                <Link to='/create-profile'><Button variant="primary">Create Profile</Button></Link>
                            </>
                        )}
                    </Card.Text>
                    </Card.Body>
                </div>
            </Card>
    </>
    )};
};



const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});


export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

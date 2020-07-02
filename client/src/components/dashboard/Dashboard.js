import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spiner'
import { getCurrentProfile } from '../../actions/profile'
import { Card, Button,} from 'react-bootstrap'
import DashboardAction from './dashboardAction'


const Dashboard = props => {
    useEffect(() => {
        props.getCurrentProfile()
    },[]);


  

     if(props.profile.loading === true && props.profile===null){return <Spinner />}else {
         return(
            <>
            <Card>
                <Card.Header>Dashboard</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p>Welcome {props.auth && props.auth.name}</p>

                        {props.profile.profile !== null ? (<><DashboardAction/></>) : (
                        <>
                            <p>You have not yet setup a profile, please add some info</p>
                            <Link to='/create-profile'><Button variant="primary">Create Profile</Button></Link>
                        </>
                    )}
                </Card.Text>
            </Card.Body>
        </Card>
    </>
    )};
};



const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});


export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

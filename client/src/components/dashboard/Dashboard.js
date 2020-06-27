import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spiner'
import { getCurrentProfile } from '../../actions/profile'
import { Card, Button,} from 'react-bootstrap'


const Dashboard = props => {
    useEffect(() => {
        props.getCurrentProfile()
    }, []);

    return props.loading && props.profile === null ? (<Spinner />) : (
    <>
        <Card>
            <Card.Header>Dashboard</Card.Header>
            <Card.Body>
                <Card.Text>
                    <p>Welcome {props.user && props.user.name}</p>

                    {props.profile.profile !== null ? (<>has</>) : (
                    <>
                        <p>You have not yet setup a profile, please add some info</p>
                        <Link to='/create-profile'><Button variant="primary">Create Profile</Button></Link>
                    </>
                    )}
                </Card.Text>
            </Card.Body>
        </Card>
    </>
    );
};



const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});


export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

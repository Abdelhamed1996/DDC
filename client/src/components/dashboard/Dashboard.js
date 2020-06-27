import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spiner'
import { getCurrentProfile } from '../../actions/profile'
import { Card, Button,} from 'react-bootstrap'


const Dashboard = ({
    getCurrentProfile,
    auth: { user },
    profile: { profile, loading }
}) => {
    useEffect(() => {
        getCurrentProfile()
    }, []);
    return loading && profile === null ? (<Spinner />) : (<>
        <Card>
            <Card.Header>Dashboard</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    <p>Welcome {user && user.name}</p>
                    {profile !== null ? (<>has</>
                    ) : (
                            <><p>You have not yet setup a profile, please add some info</p>
                                <Button variant="primary"><Link to='/create-profile'></Link>Create Profile</Button>
                            </>)}
                </Card.Text>
            </Card.Body>
        </Card>
    </>
    );
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});


export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

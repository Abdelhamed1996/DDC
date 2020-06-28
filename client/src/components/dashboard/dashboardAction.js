
import React from 'react'
import {Link} from 'react-router-dom'
import { Button} from 'react-bootstrap'

const DashbourdAction =()=>{
    return(
        <>
            <Link to="edit-profile">
                <Button variant="primary" size="lg" active>
                  Edit your Profile
                </Button>{' '}
            </Link>
        </>
    )
}

export default DashbourdAction
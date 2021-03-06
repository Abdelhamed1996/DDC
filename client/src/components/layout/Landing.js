import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import Src from '../../images/Students.svg'

export const Landing = (props) => {

   
    

    if (props.isAuht) {
        props.history.push('/dashboard')
    }
    return (
        <>
            <div className="text text-center text-white display-4 font-weight-bold">DCI Developer Community</div>
            <p className="p-text text-center text-white   mar-5hv">Create a developer portfolio, share posts and get help from other developers</p>
            <img src={Src} className="LP_I  mt-4" />
            <div className="text text-center text-white display-4 font-weight-bold mb-5">600+ Students
            <h3>join us</h3>
            </div>
            <div className="footer"><p>DCI developer Community</p></div>
        </>
    );
}
const mapStateToProps = state => ({
    isAuht: state.auth.isAuht
})

export default connect(mapStateToProps)(Landing)
import React from 'react';
import {connect} from 'react-redux'
import Src from '../../images/Ethnic friendship-rafiki.svg'

export const Landing = (props) => {

    if(props.isAuht){
        props.history.push('/dashboard')
  }
    return (
        <>
            <div className="text text-center text-white display-4 font-weight-bold">DCI Developer Community</div>
            <p className="p-text text-center text-white mt-3 mar-5hv">Create a developer portfolio, share posts and get help from other developers</p>

            <img src={Src} className="LP_I"/>
            <div className="text text-center text-white display-4 font-weight-bold">600+ Students</div>
        </>
    );
}
const mapStateToProps= state=>({
    isAuht: state.auth.isAuht
})

export default connect(mapStateToProps)(Landing)
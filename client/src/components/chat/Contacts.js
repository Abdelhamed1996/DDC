import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/Spiner';
import { getProfiles } from '../../actions/profile';
import Img from '../profile-forms/man 7.png'
import Img2 from '../profile-forms/woman-8.png'
import { Button,InputGroup,FormControl } from 'react-bootstrap';
import {Link} from 'react-router-dom'

import axios from 'axios';

let timer = null;

const Chat = props => {
    const [text,setText]         = React.useState("");
    const [messages,setMessages] = React.useState(false);
    const [members,setMembers]   = React.useState({});
    const change = e => setText(e.target.value);
    const send = text => {
        axios.post(
            "/api/posts/message",
            { text, channel:"lobby" }
        ).then( result => {
            setMessages(result.data.messages);
            setMembers(result.data.members);
        });
    };
    useEffect(() => {
        props.getProfiles();
        send();
        timer = setInterval( t => send(''), 1000 );
        return e => clearInterval(timer);
    }, []);

    const capitalize= (s)=>
    {
    return s && s[0].toUpperCase() + s.slice(1);
    }




    return (
        <>
            {props.profile.loading ? <Spinner /> :
            <>

                <div className="chat-container ">
                    <div className="user-container hide1">
                        { props.profile.profiles.length > 0 ? (
                            props.profile.profiles.map(profile => (
                                <Link to={`/chat/${profile.user._id}`} >
                                <div   className="chat-user-container"  key={profile.user._id} >
                                    <img src={profile.user.gender === 'Male' ? Img : Img2} className="chat-user-img"  alt="avatar"/>
                                    <p className="chat-user">{capitalize(profile.user.name)}</p>
                               </div>
                               </Link>

                            ))
                            
                        ):(<h4>No users found</h4>
                        )}
                    </div>
                    <div className="text-container hide2">
                        <div className="messages" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <h3 style={{color:"white"}}>click on the contact to start your Chat</h3>
                        </div>
                    </div>
                </div>


                
            </>
            }
        </>
    );
}


const mapStateToProps = state => ({
    profile: state.profile
});



export default connect(mapStateToProps, { getProfiles })(Chat);
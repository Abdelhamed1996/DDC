import axios from 'axios';
import { GET_PROFILE,GET_PROFILES,PROFILE_ERROR,GET_REPOS,ACCOUNT_DELETED,CLEAR_PROFILE} from './types';

//Get current users profile

export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me');

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload:{msg:err.response.statusText, status: err.response.status}
        });
    }
};
//Gett all profiles

export const getProfiles = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile');


        dispatch({
            type: GET_PROFILES,
            payload: res.data
        });

    } catch (err) {
        console.error(err)
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

//Get profile by Id

export const getProfileById = userId => async dispatch => {
    
    try {
        const res = await axios.get(`/api/profile/user/${userId}`);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};



// create & update profile

export const createProfile =(formData, history, edit = false)=>async dispatch =>{

    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('/api/profile',formData, config)
        dispatch({
            type:GET_PROFILE,
            payload: res.data
        })

        if(!edit){
            history.push('/me')
        }
    } catch (err) {

        console.log(err)
        dispatch({
            type: PROFILE_ERROR,
            payload:{msg:err.response.statusText, status: err.response.status}
        })
    }
}


// GET Github Repos

export const getGithubRepos = username => async dispatch => {
    try {
      const res = await axios.get(`/api/profile/github/${username}`);
      dispatch({
        type: GET_REPOS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload:{msg:err.response.statusText, status: err.response.status}
      });
    }
  };


  export const deleteAccount = id => async dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
      try {
        const res = await axios.delete('/api/profile');
  
        dispatch({ type: CLEAR_PROFILE });
        dispatch({ type: ACCOUNT_DELETED });

      } catch (err) {
        dispatch({
          type: PROFILE_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status }
        });
      }
    }
  };
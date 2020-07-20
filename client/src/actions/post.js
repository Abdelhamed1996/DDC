import axios from 'axios';
import {
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES,
    DELETE_POST,
    ADD_POST,
    GET_POST
} from './types';

//GET POSTS

export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('/api/posts');

        dispatch({
            type: GET_POSTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });

    }
}
//AD Like//

export const addLike = id => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/like/${id}`);
        console.log("like", res.data)
        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: res.data }
        });
    } catch (err) {
        console.error("like error:", err)
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });

    }
}

//Remove Like//

export const removeLike = id => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/unlike/${id}`);

        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: res.data }
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });

    }
}

//Delete Post//

export const deletePost = id => async dispatch => {
    try {
        await axios.delete(`/api/posts/${id}`);

        dispatch({
            type: DELETE_POST,
            payload: id
        });


    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });

    }
}

//ADD Post//

export const addPost = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Content-Type': 'application/json'
        }
    }
    try {

        const fd= new FormData()
        fd.append("text", formData.text)
        fd.append("img", formData.img)

        for(var pair of fd.entries()) {
            console.log("fd", pair[0]+ ', '+ pair[1]); 
        }
        const res = await axios.post('/api/posts', fd, config);

        dispatch({
            type: ADD_POST,
            payload: res.data
        });


    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });

    }
}

//GET POST

export const getPost = id => async dispatch => {
    try {
        const res = await axios.get(`/api/posts/${id}`);

        console.log("get data", res.data)
        dispatch({
            type: GET_POST,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });

    }
}

import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addPost} from '../../actions/post'

const PostForm = ({addPost}) => {
    const [text,setText]=useState('');
    const [img,setImg]=useState('')


    
    return (
        <div className="post-form" style={{width:"100%"}}>
            <form className="form my-1" onSubmit={e=>{
                e.preventDefault();

                addPost({text, img});
                setText('')
                setImg('');
                e.target.elements.img.value = ''

            }}>
                <textarea
                className="post-text-area"
                name="text"
                rows="5"
                placeholder="Say Something..."
                value={text}
                onChange={e=>setText(e.target.value)}
                required>

                </textarea>

                <input 
                className="file-input"
                style={{width:"100%"}}
                type="file" 
                name="img" 
                placeholder="upload an image" 
                onChange={e=>setImg(e.target.files[0])}/> 
                <input type="submit" className="btn btn-dark my-1" value="Post" style={{width:"100%"}}/>
            </form>
        </div>
    )
}

PostForm.propTypes = {
    addPost:PropTypes.func.isRequired

}

export default connect(null,{addPost})(PostForm)


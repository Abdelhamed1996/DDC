import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { Container, Button, Card, Row, Col } from 'react-bootstrap'
import Img from '../profile-forms/man 7.png'
import { addLike, removeLike, deletePost } from '../../actions/post'



const PostItem = ({
    addLike,
    removeLike,
    deletePost,
    auth,
    post: { _id, text, name, avatar, user, likes, comments, date ,img}
}) =>
    <>
        <Container className="post-container">
            <Card className="post-card">
                <Card.Body >
                        <Card.Title className="card-title">
                            <Card.Img src={Img}  alt="avatar" /><div className="post-user-nam"><p style={{marginBottom:"0"}}>{name}</p><p style={{color:'gray', fontSize: "14px"}}><Moment  format='YYYY/MM/DD HH:mm'>{date}</Moment></p></div>
                        </Card.Title>                    
                    <Card.Text>{text}</Card.Text>
                    <Card.Img src={img} className="post-img"></Card.Img> 
                    <div className="posts-bottoms">
                        <div className="like-div">
                            <div onClick={e => addLike(_id)} className="postBtn"><i class="far fa-thumbs-up d m-3" ></i></div><span>{likes.length}</span>
                            <div onClick={e => removeLike(_id)} className="postBtn"><i class="far fa-thumbs-down d m-3 "></i></div>
                        </div>
                        {!auth.loading && user === auth.user._id && (
                            <Button onClick={e => deletePost(_id)} variant="danger d  m-2">Delete</Button>
                        )}
                    </div>
                </Card.Body>
            </Card>

        </Container>
    </>


PostItem.propTypes = {

    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(PostItem)

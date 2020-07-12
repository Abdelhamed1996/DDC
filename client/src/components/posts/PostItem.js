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
    post: { _id, text, name, avatar, user, likes, comments, date }
}) =>
    <>
        <Container className="post-container ">
            <Row className="posts d-flex justify-content-center align-items-center ">
                <div className="posts-head">
                    <Card.Img src={Img} className="head_size img-fluid post" alt="avatar" />
                    <Card.Body className="text-b">
                        <Card.Title className="posts-title d-flex justify-content-center">{name}</Card.Title>
                    </Card.Body>
                </div>
                <Col className="post-h">
                    <Card.Body className="posts-content mt-4">

                        <Card.Text className="txt-f d-flex flex-column">
                            {text}
                        </Card.Text>
                        <div className="content-b d-flex justify-content-between align-items-end">
                            <p className="date-m"><Moment format='YYYY/MM/DD'>{date}</Moment></p>
                            <div className="posts-bottom d-flex justify-content-end align-items-baseline">
                                <div onClick={e => addLike(_id)} className="postBtn"><i class="far fa-thumbs-up d m-3" ></i></div><span>{likes.length}</span>
                                <div onClick={e => removeLike(_id)} className="postBtn"><i class="far fa-thumbs-down d m-3 "></i></div>
                                {!auth.loading && user === auth.user._id && (
                                    <Button onClick={e => deletePost(_id)} variant="danger d  m-2">Delete</Button>
                                )}
                            </div>
                        </div>

                    </Card.Body>
                </Col>
            </Row>

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

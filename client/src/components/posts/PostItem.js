import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { Container, Button, Card, Row, Col } from 'react-bootstrap'
import Img from '../profile-forms/man 7.png'



const PostItem = ({ 
    auth, 
    post: { _id, text, name, avatar, user, likes, comments, date }
}) =>
    <>
        <Container className="post-container">
            <Row className="posts d-flex justify-content-center align-items-center m-1">
                <div className="posts-head p-4">
                    <Card.Img src={Img} className="head_size img-fluid" alt="avatar" />
                    <Card.Body className="text-b">
                        <Card.Title className="posts-title d-flex">Json Parse</Card.Title>
                    </Card.Body>
                </div>
                <Col>
                    <Card.Body className="posts-content">
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.Some quick example text to build on the card title and make up the bulk of
                            the card's content.Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div className="posts-bottom d-flex justify-content-end align-items-center">
                            <div class="far fa-thumbs-up d m-3"></div>
                            <div class="far fa-thumbs-down d m-3"></div>
                            <Button variant="primary d m-2">Discussion</Button>
                            <Button variant="danger d  m-2">Delete</Button>
                        </div>
                    </Card.Body>
                </Col>
            </Row>

        </Container>
    </>


PostItem.propTypes = {

    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {})(PostItem)

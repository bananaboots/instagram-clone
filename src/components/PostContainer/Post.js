import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from './CommentSection/CommentSection';

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailURL: PropTypes.string,
        imageURL: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.object),
    })
}

function Post(props) {
    return (
        <div className="post">
            <div className="post-header">
                <img src={`${props.post.thumbnailURL}`} alt="thumbnail"/>
                <span>{props.post.username}</span>
            </div>
            <img src={props.post.imageURL} className="post-image" alt="main"/>
            <div className="respond">
                <img src="#" alt=""/>
                <img src="#" alt=""/>
            </div>
            <div className="likes">
                <span>{props.post.likes} likes</span>
            </div>
            <div className="comments">
                <CommentSection comments={props.post.comments} />
            </div>
        </div>
    );
}

export default Post;
import React from 'react';
import Comment from 'Comment';

function CommentSection(props) {
    return (
        props.comments.map(comment => <Comment comment={comment} />)
    );
    
}

export default CommentSection;
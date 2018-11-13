import React from 'react';

function CommentSection(props) {
    return (
        props.comments.map(comment => {
            return <div className="comment">
                <p>
                    <span>
                        {comment.username}
                    </span>
                    {comment.text}
                </p>
            </div>
        })
    );
    
}

export default CommentSection;
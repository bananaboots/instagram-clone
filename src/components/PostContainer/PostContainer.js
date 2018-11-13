import React, {Fragment} from 'react';
import Post from './Post';

function PostContainer(props) {
    return (
        <Fragment>
        {props.posts.map(postElement => <Post post={postElement} />)}
        </Fragment>
    );
}

export default PostContainer;
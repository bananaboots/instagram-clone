import React, {Component, Fragment} from 'react';
import Post from './Post';
// import PropTypes from 'prop-types';


class PostContainer extends Component {
    constructor(props) {
        console.log('constructed')
        super(props);
        this.state = {
            posts: props.posts
        }
        // this.propTypes = {
        //     posts: PropTypes.arrayOf(PropTypes.object)
        // }
    }

    // componentDidMount() {
    //     console.log('component did mount!?!')
    //     return this.setState({
    //         posts: this.props.posts
    //     })
    // }

    render() {
        console.log('rendering!')
        return (
            <Fragment>
                {this.state.posts.map((postElement) => <Post post={postElement} />)}
            </Fragment>
        );
    }
    
}

export default PostContainer;
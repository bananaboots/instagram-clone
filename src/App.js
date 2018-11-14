import React, { Component } from 'react';
import './App.css';
import dummyData from './utilities/dummy_data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    this.setState({
      posts: dummyData
    })
  }

  render() {
    return (
      <div className="App">
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import dummyData from './utilities/dummy_data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        {dummyData.map(post => <PostContainer post={post} />)}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';
import Friends from './Components/Friends';
import styled from 'styled-components';
import './App.css';

const FriendHeader = styled.h1`
  padding-top: 6%;
  font-size: 45px;
  color: #ED8733;
`;

class App extends Component {
  state = {
    friends: [],
    error: null,
    loading: false
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(friends => this.setFriendsList(friends.data))
      .catch(this.setErorr);
  }

  setFriendsList = friends => {
    this.setState({ friends });
  };

  setErorr = error => {
    this.setState({ error });
  };

  render() {
    return (
      <div className="App">
        <FriendHeader>Friends</FriendHeader>
        <Friends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;

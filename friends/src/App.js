import React, { Component } from 'react';
import axios from 'axios';
import Friends from './Components/Friends';
import AddFriend from './Components/AddFriend';
import styled from 'styled-components';
import './App.css';

const FriendHeader = styled.h1`
  padding-top: 4%;
  font-size: 45px;
  color: #ED8733;
  text-transform: uppercase;
`;

class App extends Component {
  state = {
    friends: [],
    error: null,
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(friends => this.setFriendsList(friends.data))
      .catch(error => this.setError(error.message));
  }

  setFriendsList = friends => {
    this.setState({ friends });
  };

  setError = error => {
    this.setState({ error });
  };

  render() {
    if(this.state.error){
      return (
        <h1>Well, that didn't work, here's why: {this.state.error}</h1>
      )
    }
    return (
      <div className="App">
        <FriendHeader>Friends</FriendHeader>
        <Friends friends={this.state.friends} />
        <AddFriend />
      </div>
    );
  }
}

export default App;

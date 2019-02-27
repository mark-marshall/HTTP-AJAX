import React, { Component } from 'react';
import axios from 'axios';
import Friends from './Components/Friends';
import AddFriend from './Components/AddFriend';
import styled from 'styled-components';
import './App.css';

const FriendHeader = styled.h1`
  padding-top: 4%;
  font-size: 45px;
  color: #ed8733;
  text-transform: uppercase;
`;

class App extends Component {
  state = {
    friends: [],
    error: null,
    addFriend: {
      name: '',
      age: '',
      email: '',
    },
    currentFriend: {},
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

  addFriendHandler = event => {
    this.setState({
      addFriend: {
        ...this.state.addFriend,
        [event.target.name]: event.target.value
      }
    });
  };
  postFriend = () => {
    axios
      .post('http://localhost:5000/friends', this.state.addFriend)
      .then(resp => console.log(resp))
      .catch(error => this.setError(error.message));
  };

  deleteFriend = event => {
    axios
      .delete(`http://localhost:5000/friends/${event.target.value}`)
      .then(friends => this.setFriendsList(friends.data))
      .catch(error => this.setError(error.message));
  };

  setCurrentFriend = friend => {
    this.setState({
      currentFriend: friend, 
   })
  }

  render() {
    if (this.state.error) {
      return <h1>Well, that didn't work, here's why: {this.state.error}</h1>;
    }
    return (
      <div className="App">
        <FriendHeader>Friends</FriendHeader>
        <Friends
          friends={this.state.friends}
          deleteFriend={this.deleteFriend}
          setCurrentFriend={this.setCurrentFriend}
        />
        <AddFriend
          addFriend={this.state.addFriend}
          addFriendHandler={this.addFriendHandler}
          postFriend={this.postFriend}
        />
      </div>
    );
  }
}

export default App;

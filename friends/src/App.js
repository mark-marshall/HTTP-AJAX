import React, { Component } from 'react';
import axios from 'axios';
import Friends from './Components/Friends';
import AddFriend from './Components/AddFriend';
import styled from 'styled-components';
import './App.css';

const HeaderWrap = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 50px;
  background-color: #CF2C51;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 17px;
    color: white;
    font-weight: normal;
  }
`;

class App extends Component {
  state = {
    friends: [],
    error: null,
    addFriend: {
      name: '',
      age: '',
      email: ''
    },
    currentFriendID: '',
    editMode: false
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

  updateFriend = () => {
    axios
      .put(
        `http://localhost:5000/friends/${this.state.currentFriendID}`,
        this.state.addFriend
      )
      .then(resp => console.log(resp))
      .catch(error => this.setError(error.message));
    this.setState({ editMode: false });
  };

  setEditMode = event => {
    this.setState({
      editMode: true,
      currentFriendID: event.target.value
    });
  };

  render() {
    if (this.state.error) {
      return <h1>Well, that didn't work, here's why: {this.state.error}</h1>;
    }
    return (
      <div className="App">
        <HeaderWrap>
          <h1>Welcome to Friend Directory, inc. where no list of friends is too small... add and edit friends below as you please 🤗</h1>
        </HeaderWrap>
        <Friends
          friends={this.state.friends}
          deleteFriend={this.deleteFriend}
          setEditMode={this.setEditMode}
          setCurrentFriendID={this.setCurrentFriendID}
        />
        <AddFriend
          addFriend={this.state.addFriend}
          addFriendHandler={this.addFriendHandler}
          postFriend={this.postFriend}
          editMode={this.state.editMode}
          updateFriend={this.updateFriend}
          currentFriendID={this.state.currentFriendID}
        />
      </div>
    );
  }
}

export default App;

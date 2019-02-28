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
  background-color: #cf2c51;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 17px;
    color: white;
    font-weight: normal;
  }
`;

const friendsURL = 'http://localhost:5000/friends';

class App extends Component {
  state = {
    friends: [],
    error: null,
    addFriend: {
      name: '',
      age: '',
      email: '',
    },
    currentFriendID: '',
    editMode: false,
  };

  componentDidMount() {
    axios
      .get(friendsURL)
      .then(friends => this.setFriendsList(friends.data))
      .catch(error => this.setError(error.message));
  }

  setFriendsList = friends => {
    this.setState({ friends });
  };

  setError = error => {
    this.setState({ error });
  };

  addFriendReset = () => {
    this.setState({
      addFriend: {
        name: '',
        age: '',
        email: '',
      },
    });
  };

  addFriendHandler = event => {
    this.setState({
      addFriend: {
        ...this.state.addFriend,
        [event.target.name]: event.target.value,
      },
    });
  };

  friendValidation = () => {
    if (this.state.addFriend.name === '') {
      return alert("Please don't leave your friend nameless 🙈");
    } else if (this.state.addFriend.age === '') {
      return alert("Please don't leave your friend ageless 👶🏻");
    } else if (this.state.addFriend.email === '') {
      return alert("Please don't leave your friend email-less 💻");
    } else if (!this.state.addFriend.email.includes('@')) {
      return alert('FAKE EMAIL ALERT 😱');
    } else return true;
  };

  postFriend = () => {
    if (this.friendValidation()) {
      axios
        .post(friendsURL, this.state.addFriend)
        .then(resp => this.setFriendsList(resp.data))
        .catch(error => this.setError(error.message))
        .finally(this.addFriendReset);
    }
  };

  deleteFriend = event => {
    axios
      .delete(`${friendsURL}/${event.target.value}`)
      .then(friends => this.setFriendsList(friends.data))
      .catch(error => this.setError(error.message));
  };

  updateFriend = () => {
    if (this.friendValidation()) {
      axios
        .put(
          `${friendsURL}/${this.state.currentFriendID}`,
          this.state.addFriend,
        )
        .then(resp => this.setFriendsList(resp.data))
        .catch(error => this.setError(error.message))
        .finally(this.addFriendReset);
      this.setState({ editMode: false });
    }
  };

  setEditMode = event => {
    this.setState({
      editMode: true,
      currentFriendID: event.target.value,
    });
    this.upateValuesForEditMode(event);
  };

  upateValuesForEditMode = event => {
    const id = parseInt(event.target.value);
    const selectedFriend = this.state.friends.filter(
      friend => friend.id === id,
    );
    this.setState({
      addFriend: {
        name: selectedFriend[0].name,
        age: selectedFriend[0].age,
        email: selectedFriend[0].email,
      },
    });
  };

  cancelEdit = () => {
    this.setState({
      editMode: false,
    });
    this.addFriendReset();
  };

  render() {
    if (this.state.error) {
      return <h1>Well, that didn't work, here's why: {this.state.error}</h1>;
    }
    return (
      <div className="App">
        <HeaderWrap>
          <h1>
            Welcome to Friend Directory, inc. where no friends list is too
            small... add and edit friends as you please 🤗
          </h1>
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
          friends={this.state.friends}
          cancelEdit={this.cancelEdit}
        />
      </div>
    );
  }
}

export default App;

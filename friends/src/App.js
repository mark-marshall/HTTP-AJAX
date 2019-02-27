import React, { Component } from 'react';
import axios from 'axios';
import Friends from './Components/Friends';
import './App.css';

class App extends Component {
  state = {
    friends: [],
    error: null,
    loading: false,
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then(friends => this.setFriendsList(friends.data))
    .catch(this.setErorr);
  }

  setFriendsList = friends => {
    this.setState({ friends })
  }

  setErorr = error => {
    this.setState ({ error })
  }

  render() {
    return (
      <div className="App">
        Friends List
        <Friends friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;

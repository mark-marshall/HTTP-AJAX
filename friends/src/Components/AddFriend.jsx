import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import PT from 'prop-types';

const ChangedFriendsWrapper = styled.div`
  justify-content: center;
  padding: 2% 0 8% 0;

  input {
    height: 30px;
    padding: 0.2%;
    margin: 0.2%;
    width: 170px;
    border-radius: 2px;
    border: 1px solid #f5f5f5;
  }

  button {
    height: 39px;
    margin: 0.2%;
    padding: 0 2%;
    border-radius: 3px;
    border: 1px solid white;
    background-color: #2f6c67;
    color: white;
    font-size: 14px;
    cursor: pointer;
    text-transform: uppercase;

    &:active {
      background-color: orange;
    }

    &:hover {
      background-color: ${lighten('0.05', '#2f6c67')};
    }
  }

  .cancelButton {
    background-color: #eb4e47;
    padding: 0 1.5%;

    &:hover {
      background-color: ${lighten('0.05', '#EB4E47')};
    }
  }
`;

export default function AddFriend({
  postFriend,
  addFriend,
  addFriendHandler,
  editMode,
  updateFriend,
  cancelEdit,
}) {
  if (!editMode) {
    return (
      <ChangedFriendsWrapper>
        <input
          placeholder="Name"
          name="name"
          type="text"
          onChange={event => addFriendHandler(event)}
          value={addFriend.name}
        />
        <input
          placeholder="Age"
          name="age"
          type="number"
          onChange={event => addFriendHandler(event)}
          value={addFriend.age}
        />
        <input
          placeholder="Email"
          name="email"
          type="email"
          onChange={event => addFriendHandler(event)}
          value={addFriend.email}
        />
        <button className="addButton" onClick={postFriend} type="submit">
          Add Friend
        </button>
      </ChangedFriendsWrapper>
    );
  }
  return (
    <ChangedFriendsWrapper>
      <input
        placeholder="Name"
        name="name"
        type="text"
        onChange={event => addFriendHandler(event)}
        value={addFriend.name}
      />
      <input
        placeholder="Age"
        name="age"
        type="number"
        onChange={event => addFriendHandler(event)}
        value={addFriend.age}
      />
      <input
        placeholder="Email"
        name="email"
        type="text"
        onChange={event => addFriendHandler(event)}
        value={addFriend.email}
      />
      <button type="submit" onClick={updateFriend}>
        Edit Friend
      </button>
      <button type="submit" onClick={cancelEdit} className="cancelButton">
        X
      </button>
    </ChangedFriendsWrapper>
  );
}

AddFriend.propTypes = {
  postFriend: PT.func.isRequired,
  addFriend: PT.shape({
    name: PT.string.isRequired,
    age: PT.isRequired,
    email: PT.string.isRequired,
  }).isRequired,
  addFriendHandler: PT.func.isRequired,
  editMode: PT.bool.isRequired,
  updateFriend: PT.func.isRequired,
  cancelEdit: PT.func.isRequired,
};

import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import PT from 'prop-types';

const AddFriendForm = styled.form`
  justify-content: center;
  padding: 2% 0 8% 0;

  input {
    height: 30px;
    padding: 0.2%;
    margin: 0.2%;
    width: 170px;
    border-radius: 2px;
    border: 1px solid #F5F5F5;
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
    background-color: #EB4E47;
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
      <AddFriendForm onSubmit={postFriend}>
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
        <button type="submit" className="addButton">
          Add Friend
        </button>
      </AddFriendForm>
    );
  }
  return (
    <AddFriendForm onSubmit={updateFriend}>
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
      <button type="submit">Edit Friend</button>
      <button type="submit" onClick={cancelEdit} className="cancelButton">X</button>
    </AddFriendForm>
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
  editMode: PT.func.isRequired,
  updateFriend: PT.func.isRequired,
  cancelEdit: PT.func.isRequired,
};

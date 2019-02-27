import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';

const AddFriendForm = styled.form`
  justify-content: center;
  padding-bottom: 8%;

  input {
    height: 30px;
    padding: 0.2%;
    margin: 0.2%;
    width: 210px;
  }

  button {
    height: 39px;
    margin: 0.2%;
    padding: 0 2%;
    border: none;
    background-color: #ed8733;
    color: white;
    font-size: 14px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
      background-color: #3d075e;
    }
  }

  .addButton {
      background-color: green;
  }
`;

export default function AddFriend({
  postFriend,
  addFriend,
  addFriendHandler,
  editMode,
  currentFriendID,
  friends,
  updateFriend,
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
        <button type="submit" className="addButton">Add Friend</button>
      </AddFriendForm>
    );
  }
  return (
    <AddFriendForm onSubmit={updateFriend}>
      <input
        placeholder={friends[currentFriendID-1].name}
        name="name"
        type="text"
        onChange={event => addFriendHandler(event)}
        value={addFriend.name}
      />
      <input
        placeholder={friends[currentFriendID-1].age}
        name="age"
        type="number"
        onChange={event => addFriendHandler(event)}
        value={addFriend.age}
      />
      <input
        placeholder={friends[currentFriendID-1].email}
        name="email"
        type="text"
        onChange={event => addFriendHandler(event)}
        value={addFriend.email}
      />
      <button type="submit">Edit Friend</button>
    </AddFriendForm>
  );
}

AddFriend.propTypes = {
  postFriend: PT.func.isRequired,
  addFriend: PT.shape({
    name: PT.string.isRequired,
    age: PT.isRequired,
    email: PT.string.isRequired
  }).isRequired,
  addFriendHandler: PT.func.isRequired
};

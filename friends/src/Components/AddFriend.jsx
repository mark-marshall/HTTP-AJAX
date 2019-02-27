import React from 'react';
import styled from 'styled-components';

const AddFriendForm = styled.form` 
    justify-content: center;

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
        background-color: #ED8733;
        color: white;
        font-size: 14px;
        cursor: pointer;
        text-transform: uppercase;

        &:hover {
            background-color: #3D075E;
        }
    }
`;

export default function AddFriend({ addFriend, addFriendHandler }) {
  return (
      <AddFriendForm>
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
        type="text" 
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
        <button type="submit">Add friend</button>
      </AddFriendForm>
  );
}

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

export default function AddFriend() {
  return (
      <AddFriendForm>
        <input placeholder="Name" type="text" />
        <input placeholder="Age" type="text" />
        <input placeholder="Email" type="text" />
        <button type="submit">Add friend</button>
      </AddFriendForm>
  );
}

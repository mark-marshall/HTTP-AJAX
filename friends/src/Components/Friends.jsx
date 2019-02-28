import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';

const FriendsWrapper = styled.div`
  padding: 2%;
  padding-top: 7%;
  width: 850px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const FriendCard = styled.div`
  height: 210px;
  width: 250px;
  border-radius: 4px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  margin: 10px;
  cursor: pointer;

  &:hover {
    background-color: #3d075e;
    color: white;
  }

  button {
    background-color: white;
    width: 40%;
    height: 15%;
    border: none;
    cursor: pointer;

    &: hover {
      color: white;
    }
  }

  .editButton {
    &:hover {
      background-color: #2F6C67;
    }
  }

  .deleteButton {
    &:hover {
      background-color: #EB4E47;
    }
  }
`;

export default function Friends({ friends, deleteFriend, setEditMode }) {
  return (
    <FriendsWrapper>
      {friends.map(friend => (
        <FriendCard key={friend.id}>
          <h1>{friend.name}</h1>
          <p>
            Age:
            {friend.age}
          </p>
          <p>{friend.email}</p>
          <button
            className="editButton"
            onClick={event => setEditMode(event)}
            type="submit"
            value={friend.id}
          >
            Edit
          </button>
          <button
            className="deleteButton"
            onClick={event => deleteFriend(event)}
            value={friend.id}
            type="submit"
          >
            Delete
          </button>
        </FriendCard>
      ))}
    </FriendsWrapper>
  );
}

Friends.propTypes = {
  friends: PT.arrayOf(
    PT.shape({
      age: PT.isRequired,
      email: PT.string.isRequired,
      id: PT.number.isRequired,
      name: PT.string.isRequired,
    })
  ).isRequired,
  deleteFriend: PT.func.isRequired,
};

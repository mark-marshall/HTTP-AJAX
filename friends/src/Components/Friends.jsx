import React from 'react';
import styled from 'styled-components';

const FriendsWrapper = styled.div`
  padding: 2%;
  width: 850px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FriendCard = styled.div`
  height: 175px;
  width: 250px;
  border-radius: 4px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  margin: 10px;
  cursor: pointer;

  &:hover {
    background-color: #3d075e;
    color: white;
  }
`;

export default function Friends({ friends }) {
  return (
    <FriendsWrapper>
      {friends.map(friend => (
        <FriendCard key={friend.id}>
          <h1>{friend.name}</h1>
          <p>Age: {friend.age}</p>
          <p>{friend.email}</p>
        </FriendCard>
      ))}
    </FriendsWrapper>
  );
}

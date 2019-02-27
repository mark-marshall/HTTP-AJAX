import React from 'react';

export default function Friends({ friends }){
    return (
        <div>
            {
            friends.map(friend =>
                <div key={friend.id}>
                <h1>{friend.name}</h1>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
                </div>
                ) 
            }
        </div>
    )
}
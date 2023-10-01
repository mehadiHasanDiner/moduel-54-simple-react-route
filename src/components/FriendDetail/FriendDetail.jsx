import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const singleFriendData=useLoaderData();
    console.log(singleFriendData)
    return (
        <div>
            <h1>Everything for your friend is here</h1>
            <h2>Name: {singleFriendData.name}</h2>
            <h3>Phone: {singleFriendData.phone}</h3>
        </div>
    );
};

export default FriendDetail;
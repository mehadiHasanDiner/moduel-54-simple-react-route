import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name, email, phone, id} =friend;
    return (
        <div className='friend-container'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/friend/${id}`}>Show Details</Link>
        </div>
    );
};

export default Friend;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'



const PostDetails = () => {
    const userDetails = useLoaderData();
    const navigate = useNavigate();

    // console.log(userDetails)
    const handleGoBack=()=>{
        navigate(-1);
    }
    return (
        <div>
            <h2>User Data of Id: {userDetails.id}</h2>
            <p>{userDetails.title}</p>
            <p>{userDetails.body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;
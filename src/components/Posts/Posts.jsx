import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';


const Posts = () => {
    const allPostData = useLoaderData();
    console.log(allPostData);
    return (
        <div>
            {
                allPostData.map(post => <Post post={post} key={post.id}></Post>)
            }
        </div>
    );
};

export default Posts;
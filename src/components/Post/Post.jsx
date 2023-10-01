import React from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Post = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate();

    const handleNavigation = ()=>{
        navigate(`/post/${id}`)
    }


    return (
        <div style={{border:'2px solid orange', marginTop:'10px', borderRadius:'10px', padding:'10px'}}>
            <h3>{title}</h3>
            <p>Id:{id}</p>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}><button>Show Post Details</button></Link>
            <button onClick={handleNavigation}>Show details using post details</button>
        </div>
    );
};

export default Post;
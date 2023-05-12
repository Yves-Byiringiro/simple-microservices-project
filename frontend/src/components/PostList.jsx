import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CommentList from './CommentList';
import CommentCreate from './CommentCreate';


const PostList = () => {

    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:8003/posts');
        setPosts(res.data);
    }
 
    useEffect(()=> {
        fetchPosts();
    }, []);

    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div className="card" style={{ width: '48%', marginBottom: '20px'}} key={post.id}>
                <div className="card-body">
                    <h5 className="card-title mb-4">{post.title}</h5>
                    <p className="card-text">{post.content}</p>
                    <div>
                        <p>Posted on: <strong>{post.date}</strong></p>
                    </div>
                </div>
                <div className='extended-section mx-3'>
                    <CommentList comments={post.comments}/>
                    <CommentCreate postId={post.p_id}/>
                </div>
          </div>
        )
    })

    return (
        <div className="container mt-3">
            <h4>Posts</h4>
            <hr />
            <div className="d-flex flex-row flex-wrap justify-content-between">
                {renderedPosts}
            </div>
        </div>

    )
}

export default PostList;
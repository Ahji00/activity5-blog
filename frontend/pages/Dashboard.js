import React, { useEffect, useState } from 'react';
import api from '../api/api';
import PostCard from '../components/PostCard';
import '../css/dashboard.css';

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts')
      .then(res => {
        console.log(res.data.items); // check all posts
        setPosts(res.data.items);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="dashboard-container">
      <h2>All Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map(post => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import api from '../api/api';
import PostCard from '../components/PostCard';

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts').then((res) => setPosts(res.data.items));
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

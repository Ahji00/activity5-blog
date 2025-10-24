import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>by {post.user?.username}</p>
      <Link to={`/posts/${post.id}`}>View</Link>
    </div>
  );
}

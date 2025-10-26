import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/PostCard.css';

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <div className="post-header">
        <h3>{post.title}</h3>
        <span className="post-author">by {post.user?.username || 'Unknown'}</span>
      </div>
      <p>{post.content}</p>
      <NavLink to={`/posts/${post.id}`} className="view-post">
        View
      </NavLink>
    </div>
  );
}

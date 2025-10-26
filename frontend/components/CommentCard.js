import React from 'react';
import '../css/CommentCard.css';
export default function CommentCard({ comment }) {
  return (
    <div className="comment-card">
      <p>{comment.user?.username}: {comment.content}</p>
    </div>
  );
}

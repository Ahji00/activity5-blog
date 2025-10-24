import React from 'react';

export default function CommentCard({ comment }) {
  return (
    <div>
      <p>{comment.user?.username}: {comment.content}</p>
    </div>
  );
}

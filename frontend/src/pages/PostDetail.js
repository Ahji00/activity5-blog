import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';
import CommentCard from '../components/CommentCard';

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [content, setContent] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api.get(`/posts/${id}`).then((res) => setPost(res.data));
    api.get(`/comments/post/${id}`).then((res) => setComments(res.data.items));
  }, [id]);

  const handleComment = async (e) => {
    e.preventDefault();
    try {
      await api.post('/comments', { content, postId: id });
      setContent('');
      const res = await api.get(`/comments/post/${id}`);
      setComments(res.data.items);
    } catch {
      alert('Failed to add comment');
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <h3>Comments</h3>
      {comments.map((c) => (
        <CommentCard key={c.id} comment={c} />
      ))}
      <form onSubmit={handleComment}>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Add comment..." />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
}

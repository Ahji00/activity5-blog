import { Post } from '../../posts/entities/post.entity';
import { Comment } from '../../comments/entities/comment.entity';
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    posts: Post[];
    comments: Comment[];
}

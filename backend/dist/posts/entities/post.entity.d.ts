import { User } from '../../users/entities/users.entity';
import { Comment } from '../../comments/entities/comment.entity';
export declare class Post {
    id: number;
    title: string;
    content: string;
    user: User;
    comments: Comment[];
    createdAt: Date;
    updatedAt: Date;
}

import { User } from '../../users/entities/users.entity';
import { Post } from '../../posts/entities/post.entity';
export declare class Comment {
    id: number;
    content: string;
    user: User;
    post: Post;
    createdAt: Date;
    updatedAt: Date;
}

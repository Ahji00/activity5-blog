import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';
import { User } from '../users/entities/users.entity';
import { Post } from '../posts/entities/post.entity';
export declare class CommentsService {
    private repo;
    constructor(repo: Repository<Comment>);
    create(createCommentDto: CreateCommentDto, user: User, post: Post): Promise<Comment>;
    findAllByPost(postId: number, page?: number, limit?: number): Promise<{
        items: Comment[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: number): Promise<Comment>;
    update(id: number, dto: UpdateCommentDto, user: User): Promise<Comment>;
    remove(id: number, user: User): Promise<Comment>;
}

import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { User } from '../users/entities/users.entity';
export declare class PostsService {
    private readonly repo;
    constructor(repo: Repository<Post>);
    create(dto: CreatePostDto, user: User): Promise<Post>;
    findAll(page?: number, limit?: number): Promise<{
        items: Post[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: number): Promise<Post>;
    update(id: number, dto: UpdatePostDto, user: User): Promise<Post>;
    remove(id: number, user: User): Promise<Post>;
}

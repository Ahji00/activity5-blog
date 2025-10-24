import { PostsService } from './posts.service';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(dto: CreatePostDto, req: any): Promise<import("./entities/post.entity").Post>;
    findAll(pagination: PaginationDto): Promise<{
        items: import("./entities/post.entity").Post[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: number): Promise<import("./entities/post.entity").Post>;
    update(id: number, dto: UpdatePostDto, req: any): Promise<import("./entities/post.entity").Post>;
    remove(id: number, req: any): Promise<import("./entities/post.entity").Post>;
}

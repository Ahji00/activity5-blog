import { CommentsService } from './comments.service';
import { PostsService } from '../posts/posts.service';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
export declare class CommentsController {
    private readonly commentsService;
    private readonly postsService;
    constructor(commentsService: CommentsService, postsService: PostsService);
    create(dto: CreateCommentDto, req: any): Promise<import("./entities/comment.entity").Comment>;
    findAllByPost(postId: number, pagination: PaginationDto): Promise<{
        items: import("./entities/comment.entity").Comment[];
        total: number;
        page: number;
        limit: number;
    }>;
    update(id: number, dto: UpdateCommentDto, req: any): Promise<import("./entities/comment.entity").Comment>;
    remove(id: number, req: any): Promise<import("./entities/comment.entity").Comment>;
}

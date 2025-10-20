import {
  Controller,
  Post as HttpPost,
  Body,
  Req,
  Get,
  Param,
  Query,
  Put, // ✅ changed from Patch to Put
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';
import { PostsService } from '../posts/posts.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('comments')
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService,
    private readonly postsService: PostsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @HttpPost()
  async create(@Body() dto: CreateCommentDto, @Req() req: any) {
    const post = await this.postsService.findOne(dto.postId);
    return this.commentsService.create(dto, req.user, post);
  }

  @Get('post/:postId')
  async findAllByPost(
    @Param('postId', ParseIntPipe) postId: number,
    @Query() pagination: PaginationDto,
  ) {
    const page = pagination.page ? Number(pagination.page) : 1;
    const limit = pagination.limit ? Number(pagination.limit) : 10;
    return this.commentsService.findAllByPost(postId, page, limit);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id') // ✅ changed from @Patch to @Put
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCommentDto,
    @Req() req: any,
  ) {
    return this.commentsService.update(id, dto, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number, @Req() req: any) {
    return this.commentsService.remove(id, req.user);
  }
}

// src/posts/posts.controller.ts
import { Controller, Post as HttpPost, Body, Req, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @HttpPost()
  async create(@Body() dto: CreatePostDto, @Req() req: any) {
    // assume req.user is the logged-in user
    const created = await this.postsService.create(dto, req.user);
    delete (created as any).something; // optional
    return created;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }
}

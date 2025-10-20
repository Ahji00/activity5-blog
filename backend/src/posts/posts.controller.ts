// src/posts/posts.controller.ts
import {
  Controller,
  Post as HttpPost,
  Body,
  Req,
  Get,
  Param,
  Query,
  Put,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';

import { PostsService } from './posts.service';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(JwtAuthGuard)
  @HttpPost()
  async create(@Body() dto: CreatePostDto, @Req() req: any) {
    const created = await this.postsService.create(dto, req.user);
    // remove nothing sensitive because user has no password in relations (eager true)
    return created;
  }

  @Get()
  async findAll(@Query() pagination: PaginationDto) {
    const page = pagination.page ? Number(pagination.page) : 1;
    const limit = pagination.limit ? Number(pagination.limit) : 10;
    return this.postsService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.findOne(id);
  }
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdatePostDto,
    @Req() req: any,
    ) {
    return this.postsService.update(id, dto, req.user);
    }


  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number, @Req() req: any) {
    return this.postsService.remove(id, req.user);
  }
}

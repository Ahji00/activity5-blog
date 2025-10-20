// src/posts/posts.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/post.dto';
import { User } from '../users/entities/users.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly repo: Repository<Post>,
  ) {}

  async create(dto: CreatePostDto, user: User) {
    // entity property is `user`
    const post = this.repo.create({ ...dto, user });
    return this.repo.save(post);
  }

  async findOne(id: number) {
    const post = await this.repo.findOne({ where: { id } });
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  // ... other methods
}

// src/comments/comments.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/comment.dto';
import { User } from '../users/entities/users.entity';
import { Post } from '../posts/entities/post.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private repo: Repository<Comment>,
  ) {}

  async create(createCommentDto: CreateCommentDto, user: User, post: Post) {
    const { content } = createCommentDto;
    // create expects entity property names that match the entity (user, post, content)
    const comment = this.repo.create({ content, user, post });
    return this.repo.save(comment);
  }

  async findOne(id: number) {
    const comment = await this.repo.findOne({ where: { id } });
    if (!comment) throw new NotFoundException('Comment not found');
    return comment;
  }

  // ... other methods
}

import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Post } from './entities/post.entity';
import { UsersModule } from '../users/users.module';
import { CommentsModule } from '../comments/comments.module'; // keep import

@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),
    UsersModule,
    forwardRef(() => CommentsModule), // ✅ this line fixes circular dependency
  ],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService],
})
export class PostsModule {}

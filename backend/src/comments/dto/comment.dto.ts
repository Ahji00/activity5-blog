// src/comments/dto/comment.dto.ts
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsInt()
  postId: number;
}

export class UpdateCommentDto {
  @IsString()
  @IsNotEmpty()
  content: string;
}

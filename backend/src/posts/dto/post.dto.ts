import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    example: 'My first blog post',
    description: 'The title of the blog post',
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: 'This is the content of the post. It can be a long text.',
    description: 'The main body/content of the post',
  })
  @IsString()
  content: string;
}

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @ApiProperty({
    example: 'Updated blog post title',
    description: 'The updated title of the post (optional)',
    required: false,
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({
    example: 'Updated content of the post.',
    description: 'The updated content of the post (optional)',
    required: false,
  })
  @IsOptional()
  @IsString()
  content?: string;
}

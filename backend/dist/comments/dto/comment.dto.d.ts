export declare class CreateCommentDto {
    content: string;
    postId: number;
}
declare const UpdateCommentDto_base: import("@nestjs/common").Type<Partial<CreateCommentDto>>;
export declare class UpdateCommentDto extends UpdateCommentDto_base {
    content?: string;
}
export {};

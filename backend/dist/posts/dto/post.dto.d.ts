export declare class CreatePostDto {
    title: string;
    content: string;
}
declare const UpdatePostDto_base: import("@nestjs/common").Type<Partial<CreatePostDto>>;
export declare class UpdatePostDto extends UpdatePostDto_base {
    title?: string;
    content?: string;
}
export {};

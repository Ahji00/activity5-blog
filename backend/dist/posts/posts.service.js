"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const post_entity_1 = require("./entities/post.entity");
let PostsService = class PostsService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async create(dto, user) {
        const post = this.repo.create({ ...dto, user });
        return this.repo.save(post);
    }
    async findAll(page = 1, limit = 10) {
        const [items, total] = await this.repo.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
            order: { id: 'DESC' },
            relations: ['user'],
        });
        return { items, total, page, limit };
    }
    async findOne(id) {
        const post = await this.repo.findOne({
            where: { id },
            relations: ['user', 'comments'],
        });
        if (!post)
            throw new common_1.NotFoundException('Post not found');
        return post;
    }
    async update(id, dto, user) {
        const post = await this.findOne(id);
        if (post.user.id !== user.id) {
            throw new common_1.NotFoundException('Post not found');
        }
        Object.assign(post, dto);
        return this.repo.save(post);
    }
    async remove(id, user) {
        const post = await this.findOne(id);
        if (post.user.id !== user.id) {
            throw new common_1.NotFoundException('Post not found');
        }
        return this.repo.remove(post);
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(post_entity_1.Post)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PostsService);
//# sourceMappingURL=posts.service.js.map
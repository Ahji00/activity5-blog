import { Repository } from 'typeorm';
import { User } from './entities/users.entity';
export declare class UsersService {
    private readonly repo;
    constructor(repo: Repository<User>);
    create(username: string, email: string, password: string): Promise<User>;
    findById(id: number): Promise<User>;
    findOne(id: number): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    findByUsername(username: string): Promise<User | null>;
    findAll(page?: number, limit?: number): Promise<{
        items: User[];
        total: number;
        page: number;
        limit: number;
    }>;
    remove(id: number): Promise<User>;
}

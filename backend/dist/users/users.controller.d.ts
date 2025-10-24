import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(dto: CreateUserDto): Promise<import("./entities/users.entity").User>;
    findAll(pagination: PaginationDto): Promise<{
        items: import("./entities/users.entity").User[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: number): Promise<import("./entities/users.entity").User>;
    remove(id: number, req: any): Promise<import("./entities/users.entity").User>;
}

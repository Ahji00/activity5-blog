import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private config;
    private usersService;
    constructor(config: ConfigService, usersService: UsersService);
    validate(payload: any): Promise<import("../users/entities/users.entity").User>;
}
export {};

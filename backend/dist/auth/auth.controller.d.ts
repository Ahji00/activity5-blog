import { AuthService } from './auth.service';
import { LoginDto } from '../users/dto/user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: LoginDto): Promise<{
        access_token: string;
    }>;
}

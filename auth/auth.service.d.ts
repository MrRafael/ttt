import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/users/entities/user.entity';
export declare class AuthService {
    private usersService;
    private jwtService;
    private configService;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: User): Promise<{
        access_token: string;
        refresh_token: string;
        role: import("../enums/role.enum").Role[];
        email: string;
    }>;
    refresh(headers: any): Promise<{
        access_token: string;
        refresh_token: string;
        role: import("../enums/role.enum").Role[];
        email: string;
    }>;
    verify(token: any): Promise<{
        isValid: any;
    }>;
}

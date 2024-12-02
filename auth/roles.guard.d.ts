import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from 'src/enums/role.enum';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class RolesGuard implements CanActivate {
    private reflector;
    private userService;
    private jwtService;
    constructor(reflector: Reflector, userService: UsersService, jwtService: JwtService);
    loadRolesFromAuthorization(authorization: string): Promise<Role[]>;
    canActivate(context: ExecutionContext): Promise<boolean>;
}

import { CanActivate, ExecutionContext } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
export declare class UserExistGuard implements CanActivate {
    private userService;
    constructor(userService: UsersService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}

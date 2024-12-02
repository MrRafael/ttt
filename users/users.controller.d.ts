import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CompleteUserDto } from './dto/complete-user.dto copy';
import { ResetUserDto } from './dto/reset-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    complete(completeUserDto: CompleteUserDto): Promise<import("./entities/user.entity").User>;
    reset(resetUserDto: ResetUserDto): Promise<import("./entities/user.entity").User>;
    findByCode(code: string): Promise<import("./entities/user.entity").User>;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findOne(email: string): Promise<import("./entities/user.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto, req: any): Promise<import("./entities/user.entity").User>;
    deactivateActivate(id: string): Promise<import("./entities/user.entity").User>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { CompleteUserDto } from './dto/complete-user.dto copy';
import { ResetUserDto } from './dto/reset-user.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
export declare class UsersService {
    private userRepository;
    private jwtService;
    private readonly mailService;
    private configService;
    constructor(userRepository: Repository<User>, jwtService: JwtService, mailService: MailerService, configService: ConfigService);
    create(createUserDto: CreateUserDto): Promise<User>;
    complete(completeUserDto: CompleteUserDto): Promise<User>;
    reset(resetUserDto: ResetUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOneByEmail(email: string): Promise<User>;
    findOneByCode(code: string): Promise<User>;
    findOne(id: number): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto, headers: any): Promise<User>;
    deactivate(id: number): Promise<User>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}

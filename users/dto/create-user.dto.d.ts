import { Role } from 'src/enums/role.enum';
export declare class CreateUserDto {
    readonly name: string;
    readonly email: string;
    readonly roles: Role[];
}

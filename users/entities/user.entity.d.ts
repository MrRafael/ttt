import { Role } from '../../enums/role.enum';
import { ProjectNote } from 'src/project-note/entities/project-note.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    isActive: boolean;
    isComplete: boolean;
    accessCode: string;
    changePassLimit: Date;
    roles: Role[];
    notes: ProjectNote[];
}

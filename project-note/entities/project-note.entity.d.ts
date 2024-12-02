import { Project } from 'src/project/entities/project.entity';
import { CreateProjectNoteDto } from '../dto/create-project-note.dto';
import { User } from 'src/users/entities/user.entity';
export declare class ProjectNote {
    constructor(createProjectNoteDto?: CreateProjectNoteDto);
    id: number;
    note: string;
    createdAt: Date;
    user: User;
    project: Project;
}

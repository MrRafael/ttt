import { CreateProjectNoteDto } from './dto/create-project-note.dto';
import { ProjectNote } from './entities/project-note.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
export declare class ProjectNoteService {
    private projectNotesRepository;
    private jwtService;
    private userService;
    constructor(projectNotesRepository: Repository<ProjectNote>, jwtService: JwtService, userService: UsersService);
    create(createProjectNoteDto: CreateProjectNoteDto, headers: any): Promise<ProjectNote>;
    findAll(): Promise<ProjectNote[]>;
    remove(id: number, headers: any): Promise<import("typeorm").DeleteResult>;
}

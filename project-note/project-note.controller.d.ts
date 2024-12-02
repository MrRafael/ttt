import { ProjectNoteService } from './project-note.service';
import { CreateProjectNoteDto } from './dto/create-project-note.dto';
export declare class ProjectNoteController {
    private readonly projectNoteService;
    constructor(projectNoteService: ProjectNoteService);
    create(createProjectNoteDto: CreateProjectNoteDto, req: any): Promise<import("./entities/project-note.entity").ProjectNote>;
    findAll(): Promise<import("./entities/project-note.entity").ProjectNote[]>;
    remove(id: string, req: any): Promise<import("typeorm").DeleteResult>;
}

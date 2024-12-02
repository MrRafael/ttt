import { ProjectFilesService } from './project-files.service';
import { CreateProjectFileDto } from './dto/create-project-file.dto';
export declare class ProjectFilesController {
    private readonly projectFilesService;
    constructor(projectFilesService: ProjectFilesService);
    create(createProjectFileDto: CreateProjectFileDto, file: Express.Multer.File): Promise<import("./entities/project-file.entity").ProjectFile>;
    findAll(projectId: string): Promise<import("./entities/project-file.entity").ProjectFile[]>;
    download(id: string): Promise<import("@nestjs/common").StreamableFile>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}

import { StreamableFile } from '@nestjs/common';
import { ProjectFile } from './entities/project-file.entity';
import { Repository } from 'typeorm';
import { CreateProjectFileDto } from './dto/create-project-file.dto';
export declare class ProjectFilesService {
    private projectFilesRepository;
    constructor(projectFilesRepository: Repository<ProjectFile>);
    create(createProjectFileDto: CreateProjectFileDto, file: Express.Multer.File): Promise<ProjectFile>;
    findAll(projectId: string): Promise<ProjectFile[]>;
    findOne(id: number): Promise<ProjectFile>;
    download(id: number): Promise<StreamableFile>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}

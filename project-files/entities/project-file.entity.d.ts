import { FileCategory } from 'src/file-category/entities/file-category.entity';
import { Project } from 'src/project/entities/project.entity';
export declare class ProjectFile {
    id: number;
    fileName: string;
    originalName: string;
    mimetype: string;
    path: string;
    project: Project;
    fileCategory: FileCategory;
}

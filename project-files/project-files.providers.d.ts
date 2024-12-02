import { DataSource } from 'typeorm';
import { ProjectFile } from './entities/project-file.entity';
export declare const projectFilesProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<ProjectFile>;
    inject: string[];
}[];

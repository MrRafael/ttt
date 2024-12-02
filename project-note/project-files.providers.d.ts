import { DataSource } from 'typeorm';
import { ProjectNote } from './entities/project-note.entity';
export declare const projectNotesProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<ProjectNote>;
    inject: string[];
}[];

import { DataSource } from 'typeorm';
import { Project } from './entities/project.entity';
export declare const projectProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Project>;
    inject: string[];
}[];

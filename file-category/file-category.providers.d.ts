import { DataSource } from 'typeorm';
import { FileCategory } from './entities/file-category.entity';
export declare const fileCategoryProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<FileCategory>;
    inject: string[];
}[];

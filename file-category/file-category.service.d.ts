import { CreateFileCategoryDto } from './dto/create-file-category.dto';
import { FileCategory } from './entities/file-category.entity';
import { Repository } from 'typeorm';
export declare class FileCategoryService {
    private fileCategoryRepository;
    constructor(fileCategoryRepository: Repository<FileCategory>);
    create(createFileCategoryDto: CreateFileCategoryDto): Promise<CreateFileCategoryDto & FileCategory>;
    findAll(): Promise<FileCategory[]>;
    findOne(id: number): Promise<FileCategory>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}

import { FileCategoryService } from './file-category.service';
import { CreateFileCategoryDto } from './dto/create-file-category.dto';
export declare class FileCategoryController {
    private readonly fileCategoryService;
    constructor(fileCategoryService: FileCategoryService);
    create(createFileCategoryDto: CreateFileCategoryDto): Promise<CreateFileCategoryDto & import("./entities/file-category.entity").FileCategory>;
    findAll(): Promise<import("./entities/file-category.entity").FileCategory[]>;
    findOne(id: string): Promise<import("./entities/file-category.entity").FileCategory>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}

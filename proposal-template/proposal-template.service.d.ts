import { StreamableFile } from '@nestjs/common';
import { ProposalTemplate } from './entities/proposal-template.entity';
import { Repository } from 'typeorm';
import { ProjectService } from 'src/project/project.service';
export declare class ProposalTemplateService {
    private proposalRepository;
    private projectService;
    constructor(proposalRepository: Repository<ProposalTemplate>, projectService: ProjectService);
    create(file: Express.Multer.File): Promise<ProposalTemplate>;
    findAll(): Promise<ProposalTemplate[]>;
    findOne(id: number): Promise<ProposalTemplate>;
    download(proposalId: number, projectId: string): Promise<StreamableFile>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}

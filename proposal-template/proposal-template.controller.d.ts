import { ProposalTemplateService } from './proposal-template.service';
export declare class ProposalTemplateController {
    private readonly proposalTemplateService;
    constructor(proposalTemplateService: ProposalTemplateService);
    create(file: Express.Multer.File): Promise<import("./entities/proposal-template.entity").ProposalTemplate>;
    findAll(): Promise<import("./entities/proposal-template.entity").ProposalTemplate[]>;
    download(proposalId: number, projectId: string): Promise<import("@nestjs/common").StreamableFile>;
    findOne(id: string): Promise<import("./entities/proposal-template.entity").ProposalTemplate>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}

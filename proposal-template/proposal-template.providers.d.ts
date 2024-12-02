import { DataSource } from 'typeorm';
import { ProposalTemplate } from './entities/proposal-template.entity';
export declare const proposalTemplateProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<ProposalTemplate>;
    inject: string[];
}[];

import { Project } from 'src/project/entities/project.entity';
export declare class Client {
    id: number;
    name: string;
    cnpj: string;
    phone: string;
    email: string;
    address: string;
    projects: Project[];
}

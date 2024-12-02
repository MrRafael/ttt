import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    create(createProjectDto: CreateProjectDto): Promise<import("./entities/project.entity").Project>;
    findAll(take: number, skip: number, keyword: string, filters?: {
        status: string[];
    }): Promise<{
        result: number;
        data: import("./entities/project.entity").Project[];
        calc: {
            total: number;
            approved: number;
        };
    }>;
    findOne(id: string): Promise<import("./entities/project.entity").Project>;
    update(id: string, updateProjectDto: UpdateProjectDto): Promise<{
        id: string;
        status: "waitingApproval" | "approved" | "inProgress" | "finished" | "paid";
        clientId?: number;
        value?: number;
        title?: string;
        considerations?: string;
        object?: string;
        product?: string;
        employeeName?: string;
        employeePhone?: string;
        deliveryTime?: string;
        paymentMethod?: string;
        paymentInstallments?: import("../payment-installments/entities/payment-installment.entity").PaymentInstallment[];
        customFields?: import("../custom-field/entities/custom-field.entity").CustomField[];
    } & import("./entities/project.entity").Project>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}

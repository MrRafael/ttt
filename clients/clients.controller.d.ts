import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    create(createClientDto: CreateClientDto): Promise<CreateClientDto & import("./entities/client.entity").Client>;
    findAll(): Promise<import("./entities/client.entity").Client[]>;
    findOne(id: string): Promise<import("./entities/client.entity").Client>;
    update(id: string, updateClientDto: UpdateClientDto): Promise<{
        id: number;
        name?: string;
        cnpj?: string;
        phone?: string;
        email?: string;
        address?: string;
    } & import("./entities/client.entity").Client>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}

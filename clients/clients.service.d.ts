import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
export declare class ClientsService {
    private clientRepository;
    constructor(clientRepository: Repository<Client>);
    create(createClientDto: CreateClientDto): Promise<CreateClientDto & Client>;
    findAll(): Promise<Client[]>;
    findOne(id: number): Promise<Client>;
    update(id: number, updateClientDto: UpdateClientDto): Promise<{
        id: number;
        name?: string;
        cnpj?: string;
        phone?: string;
        email?: string;
        address?: string;
    } & Client>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}

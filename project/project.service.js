"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("./constants");
const typeorm_1 = require("typeorm");
const project_entity_1 = require("./entities/project.entity");
let ProjectService = class ProjectService {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    create(createProjectDto) {
        const projectToSave = new project_entity_1.Project(createProjectDto);
        return this.projectRepository.save(projectToSave, {});
    }
    async findAll(take, skip, keyword, filter) {
        const options = {
            take: take,
            skip: skip,
            relations: { client: true, paymentInstallments: true },
        };
        const where = {};
        let addWhere = false;
        if (keyword !== '') {
            keyword = keyword.toLowerCase();
            where['title'] = (0, typeorm_1.Raw)((alias) => `LOWER(${alias}) Like '%${keyword}%'`);
            addWhere = true;
        }
        if (filter.status.length > 0) {
            keyword = keyword.toLowerCase();
            where['status'] = (0, typeorm_1.In)(filter.status);
            addWhere = true;
        }
        if (addWhere) {
            options['where'] = where;
        }
        const total = await this.selecCalc();
        const approved = await this.selecCalc(true);
        const [data, result] = await this.projectRepository.findAndCount(options);
        return { result, data, calc: { total, approved } };
    }
    async selecCalc(onlyApproved = false) {
        const where = { approvalDate: (0, typeorm_1.Not)((0, typeorm_1.IsNull)()) };
        return this.projectRepository.sum('value', onlyApproved ? where : {});
    }
    async findOne(id) {
        const projects = await this.projectRepository.find({
            where: { id: (0, typeorm_1.Equal)(id) },
            relations: {
                client: true,
                paymentInstallments: true,
                customFields: true,
                files: { fileCategory: true },
                notes: { user: true },
            },
            order: { paymentInstallments: { id: 'ASC' } },
        });
        return projects[0];
    }
    update(id, updateProjectDto) {
        const projectToUpdate = { ...updateProjectDto, id };
        if (updateProjectDto.status === 'approved') {
            projectToUpdate['approvalDate'] = new Date();
        }
        return this.projectRepository.save(projectToUpdate);
    }
    remove(id) {
        return this.projectRepository.delete(id);
    }
};
exports.ProjectService = ProjectService;
exports.ProjectService = ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.projectConstants.providerName)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ProjectService);
//# sourceMappingURL=project.service.js.map
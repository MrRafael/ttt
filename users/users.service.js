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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const constants_1 = require("./constants");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const role_enum_1 = require("../enums/role.enum");
const uuid_1 = require("uuid");
const mailer_1 = require("@nestjs-modules/mailer");
const config_1 = require("@nestjs/config");
let UsersService = class UsersService {
    constructor(userRepository, jwtService, mailService, configService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.mailService = mailService;
        this.configService = configService;
    }
    async create(createUserDto) {
        const userSaved = await this.findOneByEmail(createUserDto.email);
        if (userSaved) {
            throw new common_1.BadRequestException();
        }
        let user = new user_entity_1.User();
        user.name = createUserDto.name;
        user.email = createUserDto.email;
        user.roles = createUserDto.roles;
        user.accessCode = (0, uuid_1.v4)();
        user = await this.userRepository.save(user);
        const mailOptions = {
            to: user.email,
            subject: 'Conta Criada',
            text: `Você foi adicionado ao sistema de gestão de projetos da Artecnica.
      Acesse o link para criar uma senha: ${this.configService.get('frontendURL')}/complete/${user.accessCode}`,
        };
        this.mailService.sendMail(mailOptions);
        return user;
    }
    async complete(completeUserDto) {
        const usersSaved = await this.userRepository.findBy({
            accessCode: completeUserDto.accessCode,
        });
        const userSaved = usersSaved[0];
        if (!userSaved) {
            throw new common_1.NotFoundException();
        }
        if (userSaved.isComplete && userSaved.changePassLimit < new Date())
            throw new common_1.NotFoundException();
        userSaved.password = await bcrypt.hash(completeUserDto.password, 10);
        userSaved.accessCode = null;
        userSaved.changePassLimit = null;
        userSaved.isComplete = true;
        return this.userRepository.save(userSaved);
    }
    async reset(resetUserDto) {
        let userSaved = await this.findOneByEmail(resetUserDto.email);
        if (!userSaved) {
            throw new common_1.NotFoundException();
        }
        userSaved.accessCode = (0, uuid_1.v4)();
        userSaved.changePassLimit = new Date(Date.now() + 15 * 60000);
        userSaved = await this.userRepository.save(userSaved);
        const mailOptions = {
            to: userSaved.email,
            subject: 'Esqueci minha senha',
            text: `Acesse: ${this.configService.get('frontendURL')}/complete/${userSaved.accessCode}
      para trocar de senha.`,
        };
        this.mailService.sendMail(mailOptions);
        return userSaved;
    }
    findAll() {
        return this.userRepository.find({
            where: { roles: (0, typeorm_1.Not)((0, typeorm_1.ArrayContains)([role_enum_1.Role.SuperAdmin])) },
        });
    }
    async findOneByEmail(email) {
        const users = await this.userRepository.find({
            where: { email: (0, typeorm_1.Equal)(email) },
        });
        return users[0];
    }
    async findOneByCode(code) {
        if (!code) {
            throw new common_1.BadRequestException();
        }
        const users = await this.userRepository.find({
            where: { accessCode: (0, typeorm_1.Equal)(code) },
        });
        return users[0];
    }
    async findOne(id) {
        const users = await this.userRepository.find({ where: { id: (0, typeorm_1.Equal)(id) } });
        return users[0];
    }
    async update(id, updateUserDto, headers) {
        const token = headers.authorization?.split(' ')[1];
        const decoded = this.jwtService.decode(token);
        const userSaved = await this.findOne(id);
        if (!userSaved) {
            throw new common_1.BadRequestException();
        }
        if (userSaved.email !== decoded.username) {
            throw new common_1.ForbiddenException();
        }
        userSaved.name = updateUserDto.name;
        if (userSaved.email !== updateUserDto.email) {
            const emailToSave = await this.findOneByEmail(updateUserDto.email);
            if (emailToSave) {
                throw new common_1.BadRequestException();
            }
            userSaved.email = updateUserDto.email;
        }
        if (updateUserDto.password) {
            userSaved.password = await bcrypt.hash(updateUserDto.password, 10);
        }
        return this.userRepository.save(userSaved);
    }
    async deactivate(id) {
        const userSaved = await this.findOne(id);
        if (!userSaved) {
            throw new common_1.BadRequestException();
        }
        userSaved.isActive = !userSaved.isActive;
        return this.userRepository.save(userSaved);
    }
    async remove(id) {
        return this.userRepository.delete(id);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.usersConstants.providerName)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        jwt_1.JwtService,
        mailer_1.MailerService,
        config_1.ConfigService])
], UsersService);
//# sourceMappingURL=users.service.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const role_enum_1 = require("../enums/role.enum");
const roles_decorator_1 = require("./roles.decorator");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
let RolesGuard = class RolesGuard {
    constructor(reflector, userService, jwtService) {
        this.reflector = reflector;
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async loadRolesFromAuthorization(authorization) {
        const splitAuth = authorization?.split(' ');
        if (splitAuth.length !== 2)
            return [];
        const token = splitAuth[1];
        const decoded = this.jwtService.decode(token);
        const creator = await this.userService.findOneByEmail(decoded.username);
        return creator?.roles ? creator?.roles : [];
    }
    async canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(roles_decorator_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) {
            return true;
        }
        const { headers } = context.switchToHttp().getRequest();
        const roles = await this.loadRolesFromAuthorization(headers['authorization']);
        requiredRoles.push(role_enum_1.Role.SuperAdmin);
        return requiredRoles.some((role) => roles.includes(role));
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        users_service_1.UsersService,
        jwt_1.JwtService])
], RolesGuard);
//# sourceMappingURL=roles.guard.js.map
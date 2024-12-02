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
exports.UserExistGuard = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
let UserExistGuard = class UserExistGuard {
    constructor(userService) {
        this.userService = userService;
    }
    async canActivate(context) {
        const { params } = context.switchToHttp().getRequest();
        if (!params?.id) {
            throw new common_1.BadRequestException();
        }
        const user = await this.userService.findOne(params?.id);
        if (!user) {
            throw new common_1.BadRequestException();
        }
        return !!user;
    }
};
exports.UserExistGuard = UserExistGuard;
exports.UserExistGuard = UserExistGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UserExistGuard);
//# sourceMappingURL=users.guard.js.map
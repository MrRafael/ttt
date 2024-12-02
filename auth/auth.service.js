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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(usersService, jwtService, configService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async validateUser(email, pass) {
        const user = await this.usersService.findOneByEmail(email);
        if (!user) {
            return null;
        }
        const isMatch = await bcrypt.compare(pass, user.password);
        if (user && isMatch && user.isActive) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    async login(user) {
        const payload = { username: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
            refresh_token: this.jwtService.sign(payload, {
                secret: this.configService.get('jwt.refreshSecret'),
                expiresIn: this.configService.get('jwt.refreshDuration'),
            }),
            role: user.roles,
            email: user.email,
        };
    }
    async refresh(headers) {
        const token = headers.authorization?.split(' ')[1];
        if (!token) {
            throw new common_1.NotFoundException('User not found');
        }
        const decoded = this.jwtService.decode(token);
        const payload = { username: decoded.username, sub: decoded.sub };
        const user = await this.usersService.findOneByEmail(payload.username);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        try {
            this.jwtService.verify(token, {
                secret: this.configService.get('jwt.refreshSecret'),
            });
            return {
                access_token: this.jwtService.sign(payload),
                refresh_token: this.jwtService.sign(payload, {
                    secret: this.configService.get('jwt.refreshSecret'),
                    expiresIn: this.configService.get('jwt.refreshDuration'),
                }),
                role: user.roles,
                email: user.email,
            };
        }
        catch (err) {
            if (err.name === 'JsonWebTokenError') {
                throw new common_1.UnauthorizedException('Invalid signature');
            }
            if (err.name === 'TokenExpiredError') {
                throw new common_1.UnauthorizedException('Token Expired');
            }
            throw new common_1.UnauthorizedException(err.name);
        }
    }
    async verify(token) {
        return {
            isValid: this.jwtService.verify(token),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map
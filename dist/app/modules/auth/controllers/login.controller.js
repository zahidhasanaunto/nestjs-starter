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
const error_constant_1 = require("./../../../constants/error.constant");
const user_entity_1 = require("../../user/entities/user.entity");
const common_1 = require("@nestjs/common");
const login_user_dto_1 = require("../dtos/login-user.dto");
const user_service_1 = require("./../../user/services/user.service");
const typeorm_1 = require("typeorm");
const helpers_1 = require("../../../helpers");
let LoginController = class LoginController {
    constructor(userService) {
        this.userService = userService;
        this.bcryptHelper = new helpers_1.BcryptHelper();
        this.jwtHelper = new helpers_1.JWTHelper();
    }
    async login(data) {
        const connection = typeorm_1.getConnection();
        const user = await connection
            .createQueryBuilder(user_entity_1.User, 'user')
            .addSelect('user.password')
            .where('user.username = :username', { username: data.username })
            .getOne();
        if (!user) {
            return { success: false, error: error_constant_1.UserNotFoundError, message: 'User Not Found' };
        }
        const isPasswordCorrect = await this.bcryptHelper.compareHash(data.password, user.password);
        if (!isPasswordCorrect) {
            return { success: false, error: error_constant_1.WrongPasswordError, message: 'Password Not Matched' };
        }
        const token = await this.jwtHelper.makeAccessToken(user);
        return { success: true, message: 'User Login Success', data: { accessToken: token, user } };
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "login", null);
LoginController = __decorate([
    common_1.Controller('auth/login'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map
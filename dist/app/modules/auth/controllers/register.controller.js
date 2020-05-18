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
const common_1 = require("@nestjs/common");
const user_service_1 = require("../../user/services/user.service");
const register_user_dto_1 = require("../dtos/register-user.dto");
const error_constant_1 = require("./../../../constants/error.constant");
let RegisterController = class RegisterController {
    constructor(userService) {
        this.userService = userService;
    }
    async register(data) {
        const dupUser = await this.userService.findAll({ single: true, username: data.username });
        if (dupUser.data) {
            return { success: false, error: error_constant_1.UserAlreadyExistError, message: 'User Already Exist' };
        }
        try {
            const user = await this.userService.insert(data);
            return user;
        }
        catch (err) {
            if (err.name === 'QueryFailedError') {
                return { success: false, error: error_constant_1.UserAlreadyExistError, message: 'User Already Exist' };
            }
            else {
                return { success: false, error: error_constant_1.UserRegisterFailedError, message: 'User Register Failed' };
            }
        }
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_user_dto_1.RegisterUserDto]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "register", null);
RegisterController = __decorate([
    common_1.Controller('auth/register'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], RegisterController);
exports.RegisterController = RegisterController;
//# sourceMappingURL=register.controller.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const utils_1 = require("../utils");
class BaseService extends typeorm_1.Repository {
    constructor() {
        super();
    }
    async getDataAll(options, relations) {
        if (options.take && options.take === 'all') {
            delete options.take;
            delete options.page;
            options.where = Object.assign({}, options);
            options.relations = relations;
            const payload = await this.find(options);
            return utils_1.paginateAll(payload);
        }
        else {
            const pOptions = utils_1.paginationOptions(options);
            pOptions.where = Object.assign({}, options);
            if (relations) {
                pOptions.relations = relations;
            }
            const payload = await this.findAndCount(pOptions);
            return utils_1.paginate(pOptions, payload);
        }
    }
    async getDataById(uuid, relations) {
        const options = {};
        if (relations) {
            options.relations = relations;
        }
        const payload = await this.findByIds([uuid], options);
        return utils_1.getSingleDataPlaceholder(payload);
    }
    async insertData(options) {
        const payload = await this.save(options);
        return utils_1.insertDataPlaceholder(payload);
    }
    async updateData(uuid, options) {
        const _payload = await this.update(uuid, options);
        const payload = await this.findByIds([uuid]);
        return utils_1.updateDataPlaceholder(payload);
    }
    async deleteData(uuid) {
        const payload = await this.delete(uuid);
        return utils_1.deleteDataPlaceholder(payload);
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map
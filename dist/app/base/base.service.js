"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const utils_1 = require("../utils");
class BaseService extends typeorm_1.Repository {
    constructor(repository) {
        super();
        this.repository = repository;
        this.repo = this.repository;
    }
    async insert(data) {
        const payload = await this.repo.save(data);
        return utils_1.insertDataPlaceholder(payload);
    }
    async findAll(options, relations) {
        if (options.single) {
            const _options = {};
            delete options.take;
            delete options.page;
            _options.where = Object.assign({}, options);
            _options.relations = relations;
            const payload = await this.repo.findOne(options);
            return utils_1.getSingleDataPlaceholder(payload);
        }
        else {
            if (options.take && options.take === 'all') {
                delete options.take;
                delete options.page;
                options.where = Object.assign({}, options);
                options.relations = relations;
                const payload = await this.repo.find(options);
                return utils_1.paginateAll(payload);
            }
            else {
                const pOptions = utils_1.paginationOptions(options);
                pOptions.where = Object.assign({}, options);
                if (relations) {
                    pOptions.relations = relations;
                }
                const payload = await this.repo.findAndCount(pOptions);
                return utils_1.paginate(pOptions, payload);
            }
        }
    }
    async findById(id, relations) {
        const options = {};
        if (relations) {
            options.relations = relations;
        }
        const payload = await this.repo.findOne(id, options);
        return utils_1.getSingleDataPlaceholder(payload);
    }
    async update(id, options, relations) {
        const _payload = await this.repo.update(id, options);
        return this.findById(id, relations);
    }
    async delete(id) {
        const payload = await this.repo.delete(id);
        return utils_1.deleteDataPlaceholder(payload);
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map
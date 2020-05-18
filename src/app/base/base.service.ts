import { FindOneOptions, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { deleteDataPlaceholder, getSingleDataPlaceholder, paginate, paginateAll, paginationOptions, insertDataPlaceholder } from '../utils';


export abstract class BaseService<Entity> extends Repository<Entity> {

    repo: Repository<Entity>

    constructor(private repository: any) {
        super();
        this.repo = this.repository;
    }

    async insert(data: any): Promise<any> {
        const payload = await this.repo.save(data);
        return insertDataPlaceholder(payload);
    }

    async findAll(options: any, relations?: string[]): Promise<any> {
        if (options.single) {
            const _options: FindOneOptions = {};
            delete options.take;
            delete options.page;
            _options.where = { ...options };
            _options.relations = relations;
            const payload = await this.repo.findOne(options);
            return getSingleDataPlaceholder(payload);
        } else {
            if (options.take && options.take === 'all') {
                delete options.take;
                delete options.page;
                options.where = { ...options };
                options.relations = relations;

                const payload = await this.repo.find(options);
                return paginateAll(payload);
            } else {
                const pOptions: any = paginationOptions(options);
                pOptions.where = { ...options };

                if (relations) {
                    pOptions.relations = relations;
                }

                const payload = await this.repo.findAndCount(pOptions);
                return paginate(pOptions, payload);
            }
        }
    }

    async findById(id: string, relations?: string[]): Promise<any> {
        const options: FindOneOptions = {};
        if (relations) {
            options.relations = relations;
        }
        const payload = await this.repo.findOne(id, options);
        return getSingleDataPlaceholder(payload);
    }

    async update(
        id: string,
        options: QueryDeepPartialEntity<any>,
        relations?: string[]
    ): Promise<any | undefined> {
        const _payload = await this.repo.update(id, options);
        return this.findById(id, relations);
    }

    async delete(id: string): Promise<any> {
        const payload = await this.repo.delete(id);
        return deleteDataPlaceholder(payload);
    }
}
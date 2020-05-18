import { Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
export declare abstract class BaseService<Entity> extends Repository<Entity> {
    private repository;
    repo: Repository<Entity>;
    constructor(repository: any);
    insert(data: any): Promise<any>;
    findAll(options: any, relations?: string[]): Promise<any>;
    findById(id: string, relations?: string[]): Promise<any>;
    update(id: string, options: QueryDeepPartialEntity<any>, relations?: string[]): Promise<any | undefined>;
    delete(id: string): Promise<any>;
}

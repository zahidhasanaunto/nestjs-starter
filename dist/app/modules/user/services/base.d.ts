import { Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
export declare class BaseTestService<Entity> {
    private repository;
    repo: Repository<Entity>;
    constructor(repository: any);
    create(data: any): Promise<any>;
    findAll(options: any, relations?: string[]): Promise<any>;
    findOne(id: string, relations?: string[]): Promise<any>;
    update(id: string, options: QueryDeepPartialEntity<any>, relations?: string[]): Promise<any | undefined>;
    remove(id: string): Promise<any>;
}

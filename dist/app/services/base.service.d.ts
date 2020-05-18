import { ObjectLiteral, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
export declare class BaseService<Entity extends ObjectLiteral> extends Repository<Entity> {
    constructor();
    getDataAll(options: any, relations?: string[]): Promise<any | undefined>;
    getDataById(uuid: any, relations?: string[]): Promise<any | undefined>;
    insertData(options: any): Promise<any | undefined>;
    updateData(uuid: string, options: QueryDeepPartialEntity<Entity>): Promise<any | undefined>;
    deleteData(uuid: string): Promise<any | undefined>;
}

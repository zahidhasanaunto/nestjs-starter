export declare abstract class BaseController<T> {
    private _modelService;
    private _modelRelations;
    modelService: any;
    modelRelations: any;
    constructor(_modelService: any, _modelRelations: string[]);
    create(data: T): Promise<any>;
    findAll(query: any): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, data: any): Promise<any>;
    remove(id: string): Promise<any>;
}

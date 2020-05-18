import { FindManyOptions } from 'typeorm';
export declare function paginate(options: any, payload: any): {
    success: boolean;
    message: string;
    take: number;
    skip: number;
    page: number;
    total: any;
    data: any;
};
export declare function paginateAll(payload: any[]): {
    success: boolean;
    message: string;
    take: string;
    skip: boolean;
    page: boolean;
    total: number;
    data: any[];
};
export declare function paginationOptions(options: any): FindManyOptions;

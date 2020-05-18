import { Body, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { CleanParams } from "../decorators/CleanParams.decorator";

export abstract class BaseController<T> {

    modelService: any;
    modelRelations: any;

    constructor(private _modelService: any, private _modelRelations: string[]) {
        this.modelService = this._modelService;
        this.modelRelations = this._modelRelations;
    }

    @Post()
    create(@Body() data: T): Promise<any> {
        return this.modelService.insert(data);
    }

    @Get()
    @CleanParams()
    findAll(@Query() query: any): Promise<any> {
        return this.modelService.findAll(query, this.modelRelations);
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<any> {
        return this.modelService.findById(id, this.modelRelations);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: any): Promise<any> {
        return this.modelService.update(id, data, this.modelRelations);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<any> {
        return this.modelService.delete(id);
    }
}
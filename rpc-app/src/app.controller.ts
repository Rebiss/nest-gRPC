import { Controller, Get, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';
import { INumberArray, ISumOfNumberArray } from './interface/app.interface';

@Controller()
export class AppController {
    private logger = new Logger('AppController');
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @GrpcMethod('AppController', 'Accumulate')
    accumulate(numberArray: INumberArray, metadata: any): ISumOfNumberArray {
        this.logger.log(`Adding ${numberArray.toString()}`);
        return { sum: this.appService.add(numberArray.data) };
    }
}

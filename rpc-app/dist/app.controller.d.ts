import { AppService } from './app.service';
import { INumberArray, ISumOfNumberArray } from './interface/app.interface';
export declare class AppController {
    private readonly appService;
    private logger;
    constructor(appService: AppService);
    getHello(): string;
    accumulate(numberArray: INumberArray, metadata: any): ISumOfNumberArray;
}

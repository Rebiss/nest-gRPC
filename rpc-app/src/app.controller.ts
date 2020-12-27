import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

@Controller()
export class AppController {
    private logger = new Logger('AppController');
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @MessagePattern('add')
    async accumulation(data: number[]) {
        this.logger.log(`Adding ${data.toString()}`);
        return this.appService.add(data);
    }
}

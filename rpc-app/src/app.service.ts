import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

const logger = new Logger('AppService');
@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!';
    }

    public postAcumulete(data: number[]): number {
        return (data || []).reduce((a: number, b: number) => a + b);
    }

    public add(data: number[]) {
        return this.client.send<number, number[]>('add', data);
    }
}

import { HttpException } from '@nestjs/common';

export class BaseException extends HttpException {
    customResponse: {
        [key: string]: any;
    };

    error: Error;

    constructor(response: string | object, status: number, error?: Error) {
        super(response, status);
        this.error = error;
    }
}

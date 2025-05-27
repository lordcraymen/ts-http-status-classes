import { HttpErrorStatus } from './HttpErrorStatus';

abstract class HttpServerErrorStatus extends HttpErrorStatus {
    constructor(
        public readonly status: number,
        public readonly description: string,
        public readonly message?: string
    ) {
        super(status, description, message);
    }
}

export { HttpServerErrorStatus };
import { HttpStatus } from './HttpStatus';

class HttpRedirectStatus extends HttpStatus {
    constructor(
        public readonly status: number,
        public readonly description: string,
        public readonly message?: string
    ) {
        super(status, description, message);
    }
}

export { HttpRedirectStatus };
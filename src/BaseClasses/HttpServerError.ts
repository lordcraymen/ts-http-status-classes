import { HttpError } from './HttpError';

abstract class HttpServerError extends HttpError {
    constructor(
        public readonly status: number,
        public readonly description: string,
        public readonly message?: string
    ) {
        super(status, description, message);
    }
}

export { HttpServerError };
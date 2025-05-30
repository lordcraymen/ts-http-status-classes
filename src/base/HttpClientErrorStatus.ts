import { HttpErrorStatus } from './HttpErrorStatus';

abstract class HttpClientErrorStatus extends HttpErrorStatus {
    constructor(
        public readonly status: number,
        public readonly description: string,
        public readonly message?: string
    ) {
        super(status, description);
    }
}

export { HttpClientErrorStatus };
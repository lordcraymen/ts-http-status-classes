import { HttpStatus } from "./HttpStatus";

class HttpInfoStatus extends HttpStatus {
    constructor(
        public readonly status: number,
        public readonly description: string, 
    ) {
        super(status, description);
    }
}


export { HttpInfoStatus };
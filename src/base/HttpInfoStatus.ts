import { HttpStatus } from "./HttpStatus";

abstract class HttpInfoStatus extends HttpStatus {
    public abstract readonly status: number;
    public abstract readonly description: string;
    public abstract readonly message: string | undefined;
}


export { HttpInfoStatus };
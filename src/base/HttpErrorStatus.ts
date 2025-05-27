import { HttpStatus, createHttpStatusClass } from "./HttpStatus";

abstract class HttpErrorStatus extends HttpStatus {
  constructor(
    public readonly status: number,
    public readonly description: string,
    public readonly message?: string
  ) {
    super(status, description, message);
  }
  static from<T extends typeof HttpErrorStatus>(this: T, error: Error): InstanceType<T> {
    return new (this as any)(error.message);
  }
}

interface HttpErrorStatusConstructor<T extends HttpErrorStatus> {
  new (message?: string): T;
  from(error: Error): T;
}

function createHttpErrorStatusClass<
  TBase extends abstract new (...args: any[]) => HttpErrorStatus,
  TInst extends InstanceType<TBase> = InstanceType<TBase>
>(
  Base: TBase,
  status: number,
  description: string
): HttpErrorStatusConstructor<TInst> {
  return createHttpStatusClass(Base, status, description) as unknown as HttpErrorStatusConstructor<TInst>;
}

export { HttpErrorStatus, createHttpErrorStatusClass, type HttpErrorStatusConstructor };

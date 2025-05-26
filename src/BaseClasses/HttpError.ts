import { HttpStatus, createHttpStatusClass } from "./HttpStatus";

abstract class HttpError extends HttpStatus {
  constructor(
    public readonly status: number,
    public readonly description: string,
    public readonly message?: string
  ) {
    super(status, description, message);
  }
  static from<T extends typeof HttpError>(this: T, error: Error): InstanceType<T> {
    return new (this as any)(error.message);
  }
}

interface HttpErrorConstructor<T extends HttpError> {
  new (message?: string): T;
  from(error: Error): T;
}

function createHttpErrorClass<
  TBase extends abstract new (...args: any[]) => HttpError,
  TInst extends InstanceType<TBase> = InstanceType<TBase>
>(
  Base: TBase,
  status: number,
  description: string
): HttpErrorConstructor<TInst> {
  return createHttpStatusClass(Base, status, description) as unknown as HttpErrorConstructor<TInst>;
}

export { HttpError, createHttpErrorClass };

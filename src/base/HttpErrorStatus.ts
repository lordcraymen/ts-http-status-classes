import { HttpStatus, createHttpStatusClass } from "./HttpStatus";

abstract class HttpErrorStatus extends HttpStatus {
  public abstract readonly status: number;
  public abstract readonly description: string;
  public abstract readonly message: string | undefined;
  public readonly name: string = this.constructor.name;
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
  if (status < 400 || status > 599) {
    throw new Error("Http Error Status codes must be between 400 and 599.");
  }
  return createHttpStatusClass(Base, status, description) as unknown as HttpErrorStatusConstructor<TInst>;
}

export { HttpErrorStatus, createHttpErrorStatusClass, type HttpErrorStatusConstructor };
